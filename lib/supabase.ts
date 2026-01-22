import { createClient } from '@supabase/supabase-js';

// Server-side client (uses private environment variables)
// Use this in Server Components and API routes
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Client-side client (uses public environment variables - safe for browser)
// The anon key is designed to be public when RLS is properly configured
const supabaseUrlClient = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKeyClient = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Server-side Supabase client (private, for Server Components and API routes)
export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

// Client-side Supabase client (public, for Client Components)
// Note: The anon key is safe to expose when Row Level Security (RLS) is properly configured
export const supabase = createClient(supabaseUrlClient, supabaseAnonKeyClient, {
  auth: {
    persistSession: false,
  },
});

