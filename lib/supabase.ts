import { createClient } from '@supabase/supabase-js';

// Server-side client (uses private environment variables)
// Use this in Server Components and API routes
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Validar que las variables estén configuradas
if (!supabaseUrl || supabaseUrl === 'https://placeholder.supabase.co' || supabaseUrl === '') {
  throw new Error(
    'SUPABASE_URL no está configurada. Por favor, configura SUPABASE_URL en tu archivo .env.local'
  );
}

// Para operaciones administrativas, preferir service role key (bypassa RLS)
// Si no está disponible, usar anon key
const supabaseKey = supabaseServiceRoleKey || supabaseAnonKey;

if (!supabaseKey || supabaseKey === 'placeholder-key' || supabaseKey === '') {
  throw new Error(
    'SUPABASE_SERVICE_ROLE_KEY o SUPABASE_ANON_KEY debe estar configurada. Por favor, configura al menos una en tu archivo .env.local'
  );
}

// Logging para debugging
// En desarrollo siempre muestra, en producción solo si DEBUG_SUPABASE=true
const shouldLog = process.env.NODE_ENV === 'development' || process.env.DEBUG_SUPABASE === 'true';
if (shouldLog) {
  console.log('🔑 Supabase Key Status:', {
    hasServiceRole: !!supabaseServiceRoleKey,
    hasAnonKey: !!supabaseAnonKey,
    usingKey: supabaseServiceRoleKey ? 'SERVICE_ROLE (bypassa RLS)' : 'ANON (sujeto a RLS)',
    keyLength: supabaseKey.length,
    supabaseUrl: supabaseUrl?.substring(0, 30) + '...',
  });
}

// Advertencia si no se está usando service role key (puede causar problemas con RLS)
if (!supabaseServiceRoleKey && shouldLog) {
  console.warn('⚠️  SUPABASE_SERVICE_ROLE_KEY no está configurada. Las operaciones estarán sujetas a políticas RLS.');
}

// Server-side Supabase client (private, for Server Components and API routes)
// Usa SERVICE_ROLE_KEY si está disponible (bypassa RLS para operaciones administrativas)
// Si no, usa ANON_KEY (sujeto a políticas RLS)
// Todas las operaciones de Supabase ahora se realizan a través de API routes del servidor
// para mantener las credenciales privadas y nunca exponerlas al cliente
export const supabaseServer = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});

// NOTA: El cliente del lado del cliente (supabase) ha sido eliminado por seguridad.
// Todas las operaciones ahora se realizan a través de API routes que usan supabaseServer.
// Esto garantiza que las credenciales de Supabase nunca se expongan al navegador.

