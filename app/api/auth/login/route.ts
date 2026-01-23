import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validar que se proporcionaron email y password
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Buscar usuario en la base de datos usando el cliente del servidor
    const { data, error: authError } = await supabaseServer
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (authError) {
      console.error('Supabase error:', authError);
      if (authError.code === 'PGRST116' || authError.message?.includes('No rows')) {
        return NextResponse.json(
          { error: 'Credenciales incorrectas' },
          { status: 401 }
        );
      }
      return NextResponse.json(
        { error: `Error al conectar con la base de datos: ${authError.message || 'Error desconocido'}` },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Credenciales incorrectas' },
        { status: 401 }
      );
    }

    // Verificar contraseña (en producción usar hash)
    if (data.password !== password) {
      return NextResponse.json(
        { error: 'Credenciales incorrectas' },
        { status: 401 }
      );
    }

    // No enviar la contraseña en la respuesta
    const { password: _, ...userWithoutPassword } = data;

    return NextResponse.json(
      { 
        success: true,
        user: userWithoutPassword 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { error: error.message || 'Error al procesar la solicitud de login' },
      { status: 500 }
    );
  }
}

