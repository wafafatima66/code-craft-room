
import { NextRequest } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { FormValues } from '@/lib/bistromail/types';

function buildPrompt(data: FormValues): string {
  return `
You are an elite restaurant email copywriter.
Write like a real owner, chef, or warm host speaking directly to loyal guests of ${data.restaurantName}.
The copy must feel vivid, irresistible, human, and impossible to ignore.

CAMPAIGN DETAILS:
- Restaurant: ${data.restaurantName}
- Main Topic: ${data.mainTopic}
- Offer or Promotion: ${data.promotion}
- Brand Tone: ${data.tone}
- Exact CTA to end with: ${data.cta}

YOUR JOB:
- Make the reader instantly hungry.
- Make the food feel craveable, specific, and memorable.
- Make the offer feel timely and worth acting on now.
- Make the email enjoyable to read, not just informative.

COPY RULES:
1. Open with a strong hook that pulls the reader in immediately.
2. Use sensory language: sizzling, smoky, buttery, crisp, slow-roasted, velvety, fresh, warm, chilled, caramelized.
3. Sound natural, confident, and human. Avoid stiff marketing language.
4. Write with rhythm: short sentences mixed with a few longer, flowing ones.
5. Focus on appetite, mood, anticipation, and desire.
6. Make the restaurant feel alive, busy, loved, and worth visiting.
7. If there is a promotion, make it feel special without sounding fake or pushy.
8. Do not over-explain. Every sentence should earn attention.

SUBJECT LINE RULES:
- Start with exactly: SUBJECT:
- The first word after SUBJECT: must begin with a capital letter.
- Keep the rest natural and readable.
- Make it catchy and curiosity-driven, but not spammy.
- No ALL CAPS.

BODY RULES:
- Keep the body under 150 words.
- Use short paragraphs for readability.
- Make the first 2 sentences especially strong.
- End naturally with this exact CTA:
${data.cta}

STRICT NO-GOS:
- No brackets or placeholder text.
- No "Dear Customer" or "Valued Guest".
- No generic AI wording.
- No cheesy exaggeration that sounds fake.

OUTPUT FORMAT:
Line 1: SUBJECT: followed by the subject line
Line 2: blank line
Line 3+: the email body only
`.trim();
}

export async function POST(req: NextRequest) {
  const { formValues }: { formValues: FormValues } = await req.json();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response('GEMINI_API_KEY is not configured on the server.', { status: 500 });
  }

  const prompt = buildPrompt(formValues);
  const encoder = new TextEncoder();
  const stream = new TransformStream<Uint8Array, Uint8Array>();
  const writer = stream.writable.getWriter();

  (async () => {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContentStream({
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: { temperature: 0.7 },
      });
      for await (const chunk of response) {
        if (chunk.text) await writer.write(encoder.encode(chunk.text));
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Generation failed';
      await writer.write(encoder.encode(`\x00ERROR:${msg}`));
    } finally {
      await writer.close();
    }
  })();

  return new Response(stream.readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
