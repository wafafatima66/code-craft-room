
'use client';
import React, { useState, useEffect } from 'react';
import { FormValues, GenerationResult, ToneStyle, NewsletterLength, ValidationFeedback } from '@/lib/bistromail/types';
import { supabaseService } from '@/lib/bistromail/supabaseService';
import FormStep from '@/components/bistromail/FormStep';
import SuccessView from '@/components/bistromail/SuccessView';
import { UtensilsCrossed, TrendingUp, Users, Target } from 'lucide-react';

const INITIAL_FORM_VALUES: FormValues = {
  restaurantName: '',
  mainTopic: '',
  promotion: '',
  tone: ToneStyle.WARM,
  length: NewsletterLength.SHORT,
  cta: '',
  helpful: ValidationFeedback.YES,
  feedback: '',
};

export default function BistroMailPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [streamingContent, setStreamingContent] = useState('');
  const [isDoneStreaming, setIsDoneStreaming] = useState(false);
  const [currentLeadId, setCurrentLeadId] = useState<string | null>(null);

  useEffect(() => {
    supabaseService.trackLinkOpened().then(id => {
      if (id) setCurrentLeadId(id);
    });
  }, []);

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setError(null);
    setStreamingContent('');
    setIsDoneStreaming(false);
    setResult({ newsletter: '', formValues: values });

    const leadId = await supabaseService.saveInitialValidation(values, currentLeadId);
    if (leadId) setCurrentLeadId(leadId);

    try {
      const res = await fetch('/api/bistromail/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formValues: values }),
      });

      if (!res.ok || !res.body) throw new Error('Server error');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value);
        if (text.includes('\x00ERROR:')) {
          throw new Error(text.split('\x00ERROR:')[1]);
        }
        setStreamingContent(prev => prev + text);
      }

      setIsDoneStreaming(true);
      if (leadId) await supabaseService.trackNewsletterGenerated(leadId);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Generation failed';
      setError(msg);
      setResult(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNotifyMe = async (email: string) => {
    if (currentLeadId) {
      await supabaseService.updateLeadWithEmail(currentLeadId, email);
    }
  };

  if (result) {
    return (
      <SuccessView
        newsletter={streamingContent}
        isStreaming={!isDoneStreaming}
        formValues={result.formValues}
        leadId={currentLeadId}
        onReset={() => {
          setResult(null);
          setStreamingContent('');
          setIsDoneStreaming(false);
          setCurrentLeadId(null);
        }}
        onNotify={handleNotifyMe}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-orange-100 bg-[#F9F7F2]">

      {/* Hero */}
      <header className="relative pt-24 pb-32 px-6 overflow-hidden bg-[#F9F7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-stone-200 shadow-sm text-[#BC472B] rounded-full text-xs font-bold tracking-[0.25em] uppercase">
            Stay Top-of-Mind Every Single Week
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-stone-900 leading-[1.05] italic">
            Stop losing guests to <br />
            <span className="text-[#BC472B] relative">pure forgetfulness.
              <svg className="absolute -bottom-6 left-0 w-full h-6 text-[#BC472B]/10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
          </h1>
          <p className="text-2xl text-stone-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Automatically generate mouth-watering updates that turn one-time diners into loyal regulars.
          </p>
        </div>
      </header>

      {/* Why section */}
      <section className="bg-stone-900 text-white py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold italic leading-tight">
              Why a newsletter is your <br /><span className="text-[#BC472B]">highest-ROI tool.</span>
            </h2>
            <p className="text-xl text-stone-400 leading-relaxed font-medium">
              Acquiring a new customer is <span className="text-white font-bold">5x more expensive</span> than keeping an existing one. BistroMail AI automates the retention process in three steps:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {[
              { n: '1', title: 'Capture Attention', body: '70% of guests never return simply because they were never reminded. Your newsletter bridges that gap.' },
              { n: '2', title: 'Visual Cravings', body: 'People eat with their eyes. Our generator crafts descriptions so vivid, your regulars will book before they finish reading.' },
              { n: '3', title: 'Automated Loyalty', body: 'Consistent updates create "top-of-mind" awareness. When they think "dinner," they think of you first.' },
            ].map(item => (
              <div key={item.n} className="space-y-6">
                <div className="w-16 h-16 bg-[#BC472B] rounded-2xl flex items-center justify-center font-black text-3xl text-white">{item.n}</div>
                <h3 className="text-2xl font-bold italic">{item.title}</h3>
                <p className="text-stone-400 text-lg leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-white/5 p-12 rounded-[3rem] border border-white/10">
            {[
              { stat: '4200%', label: 'Average ROI on Email' },
              { stat: '67%', label: 'Higher Spend per Regular' },
              { stat: '3.2x', label: 'Higher Booking Frequency' },
            ].map((item, i) => (
              <div key={i} className={`text-center space-y-2 ${i === 1 ? 'border-y md:border-y-0 md:border-x border-white/10 py-10 md:py-0' : ''}`}>
                <div className="text-5xl font-bold text-[#BC472B] italic">{item.stat}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-stone-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <TrendingUp size={28} />, title: 'Full Tables', text: 'Drive traffic during slow weekday shifts with targeted weekly updates.' },
          { icon: <Users size={28} />, title: 'Direct Connection', text: 'Own your audience. No algorithms or high-priced ads standing in the way.' },
          { icon: <Target size={28} />, title: 'Hyper-Relevant', text: 'Precision copy that understands your unique atmosphere, tone, and culinary style.' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm space-y-4">
            <div className="text-[#BC472B] mb-6">{item.icon}</div>
            <h3 className="text-2xl font-bold italic text-stone-900">{item.title}</h3>
            <p className="text-stone-600 leading-relaxed font-medium">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Generator */}
      <main className="max-w-4xl mx-auto w-full px-6 mb-32 relative z-10">
        {error && (
          <div className="mb-6 p-6 bg-red-50 border border-red-200 rounded-2xl text-red-700 font-medium">
            {error}
          </div>
        )}
        <div className="bg-white rounded-[3.5rem] shadow-[0_80px_150px_-30px_rgba(45,41,38,0.25)] border border-stone-100 overflow-hidden ring-1 ring-black/5">
          <div className="bg-stone-50 border-b border-stone-100 p-10 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <UtensilsCrossed className="text-[#BC472B]" size={32} />
              <h2 className="text-3xl font-bold text-stone-900 italic">Content Generator</h2>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[#BC472B] font-bold text-xs tracking-widest uppercase">Instant Drafting</p>
              <p className="text-stone-400 font-medium text-[10px]">Professional Standards</p>
            </div>
          </div>
          <FormStep initialValues={INITIAL_FORM_VALUES} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 text-orange-100 italic text-2xl">
            <UtensilsCrossed size={20} /> BistroMail AI
          </div>
          <p className="text-stone-500 font-medium">Empowering restaurants to build lasting guest relationships with precision content.</p>
        </div>
      </footer>
    </div>
  );
}
