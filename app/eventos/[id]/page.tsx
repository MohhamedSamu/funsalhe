import { supabaseServer } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

async function getEvento(id: string) {
  try {
    const { data, error } = await supabaseServer
      .from('eventos')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

function generateGoogleCalendarUrl(evento: any): string {
  // Formatear fecha y hora para Google Calendar
  const fechaStr = evento.fecha.toString();
  const fecha = fechaStr.includes('T') ? fechaStr.split('T')[0] : fechaStr;
  
  // Crear fechas en zona horaria local para evitar problemas
  const [year, month, day] = fecha.split('-').map(Number);
  
  // Si hay hora, usarla; si no, usar todo el día
  let startDateTime = '';
  let endDateTime = '';
  
  if (evento.hora) {
    const [hours, minutes = 0] = evento.hora.split(':').map(Number);
    const startDate = new Date(year, month - 1, day, hours, minutes, 0);
    const endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + 1); // Duración de 1 hora por defecto
    
    // Formato para Google Calendar: YYYYMMDDTHHMMSSZ
    const formatDate = (date: Date) => {
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, '0');
      const day = String(date.getUTCDate()).padStart(2, '0');
      const hours = String(date.getUTCHours()).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');
      return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
    };
    
    startDateTime = formatDate(startDate);
    endDateTime = formatDate(endDate);
  } else {
    // Evento de todo el día - formato YYYYMMDD
    startDateTime = `${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`;
    const endDate = new Date(year, month - 1, day + 1);
    const endYear = endDate.getFullYear();
    const endMonth = String(endDate.getMonth() + 1).padStart(2, '0');
    const endDay = String(endDate.getDate()).padStart(2, '0');
    endDateTime = `${endYear}${endMonth}${endDay}`;
  }

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: evento.titulo,
    dates: `${startDateTime}/${endDateTime}`,
    details: evento.descripcion || '',
    location: evento.ubicacion || '',
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default async function EventoDetallePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const evento = await getEvento(id);

  if (!evento) {
    notFound();
  }

  // Arreglar problema de zona horaria
  const fechaStr = evento.fecha.toString();
  const fecha = fechaStr.includes('T') ? parseISO(fechaStr.split('T')[0]) : parseISO(fechaStr);
  const googleCalendarUrl = generateGoogleCalendarUrl(evento);

  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/eventos"
          className="inline-flex items-center text-[#dc2626] font-semibold mb-8 hover:underline"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Volver a eventos
        </Link>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {evento.imagen_url && (
            <div className="w-full h-64 md:h-96 relative bg-gray-200 overflow-hidden">
              <Image
                src={evento.imagen_url}
                alt={evento.titulo}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {evento.titulo}
            </h1>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <Calendar className="h-6 w-6 text-[#dc2626] mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Fecha</p>
                  <p className="text-lg">
                    {format(fecha, "EEEE, d 'de' MMMM, yyyy", { locale: es })}
                  </p>
                </div>
              </div>

              {evento.hora && (
                <div className="flex items-center text-gray-700">
                  <Clock className="h-6 w-6 text-[#dc2626] mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Hora</p>
                    <p className="text-lg">{evento.hora}</p>
                  </div>
                </div>
              )}

              {evento.ubicacion && (
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-6 w-6 text-[#dc2626] mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-lg">{evento.ubicacion}</p>
                  </div>
                </div>
              )}
            </div>

            {evento.descripcion && (
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {evento.descripcion}
                </p>
              </div>
            )}

            <div className="pt-6 border-t border-gray-200">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#4285f4] text-white rounded-lg font-semibold hover:bg-[#3367d6] transition-colors shadow-md"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 4H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12zM7 10h5v5H7v-5z"/>
                </svg>
                Agregar a Google Calendar
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

