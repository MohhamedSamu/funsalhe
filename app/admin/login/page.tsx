'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Lock, Mail, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simple authentication - check user in database
      // Primero buscamos por email
      const { data, error: authError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

      if (authError) {
        console.error('Supabase error:', authError);
        if (authError.code === 'PGRST116' || authError.message?.includes('No rows')) {
          setError('Credenciales incorrectas');
        } else {
          setError('Error al conectar con la base de datos. Verifica tu configuración de Supabase.');
        }
        setIsLoading(false);
        return;
      }

      if (!data) {
        setError('Credenciales incorrectas');
        setIsLoading(false);
        return;
      }

      // Verificar contraseña (en producción usar hash)
      if (data.password !== password) {
        setError('Credenciales incorrectas');
        setIsLoading(false);
        return;
      }

      // Store session (in production, use proper session management)
      // No guardar la contraseña en localStorage por seguridad
      const { password: _, ...userWithoutPassword } = data;
      localStorage.setItem('admin_user', JSON.stringify(userWithoutPassword));
      router.push('/admin/dashboard');
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Error al iniciar sesión. Verifica tu configuración de Supabase.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef2f2] via-white to-[#fee2e2] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Lock className="h-12 w-12 text-[#dc2626]" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Acceso Administrativo</h2>
            <p className="mt-2 text-sm text-gray-600">Ingresa tus credenciales para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#dc2626] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#b91c1c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


