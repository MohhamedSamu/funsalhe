import { createClient } from '@supabase/supabase-js';

// Server-side client (uses private environment variables)
// Use this in Server Components and API routes
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Server-side Supabase client (private, for Server Components and API routes)
// Todas las operaciones de Supabase ahora se realizan a través de API routes del servidor
// para mantener las credenciales privadas y nunca exponerlas al cliente
export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

// NOTA: El cliente del lado del cliente (supabase) ha sido eliminado por seguridad.
// Todas las operaciones ahora se realizan a través de API routes que usan supabaseServer.
// Esto garantiza que las credenciales de Supabase nunca se expongan al navegador.

