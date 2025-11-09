import { createClient, type SupabaseClient } from "@supabase/supabase-js"

// Server-side Supabase client helper
// Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment
export function getSupabase(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key, { auth: { persistSession: false } })
}

export type SupabaseBlogPost = {
  slug: string
  title: string
  description: string
  keywords: string[] | null
  author: string
  ogImage: string | null
  date: string
  readTime: string
  content: string // HTML
}