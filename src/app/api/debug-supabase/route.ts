import { NextResponse } from "next/server"
import { getSupabase } from "@/lib/supabase"

export async function GET() {
  const supabase = getSupabase()
  if (!supabase) {
    return NextResponse.json(
      {
        ok: false,
        message: "Supabase env vars missing",
        env: {
          urlPresent: Boolean(process.env.SUPABASE_URL),
          keyPresent: Boolean(process.env.SUPABASE_ANON_KEY),
        },
      },
      { status: 500 }
    )
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug,title,description,author,date,readTime,ogImage")
    .order("date", { ascending: false })
    .limit(5)

  if (error) {
    return NextResponse.json(
      { ok: false, message: error.message, code: error.code },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true, count: data?.length || 0, sample: data })
}