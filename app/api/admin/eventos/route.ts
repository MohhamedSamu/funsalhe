import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabaseServer
      .from('eventos')
      .select('*')
      .order('fecha', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Error al obtener los eventos' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data: data || [] },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Eventos API error:', error);
    return NextResponse.json(
      { error: error.message || 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { titulo, descripcion, fecha, hora, ubicacion, imagen_url } = body;

    if (!titulo || !fecha) {
      return NextResponse.json(
        { error: 'Título y fecha son requeridos' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseServer
      .from('eventos')
      .insert([
        {
          titulo,
          descripcion,
          fecha,
          hora: hora || null,
          ubicacion: ubicacion || null,
          imagen_url: imagen_url || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Error al crear el evento' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Create evento API error:', error);
    return NextResponse.json(
      { error: error.message || 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

