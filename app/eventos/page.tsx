import { supabaseServer } from '@/lib/supabase';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

async function getEventos() {
  try {
    const { data, error } = await supabaseServer
      .from('eventos')
      .select('*')
      .order('fecha', { ascending: true })
      .limit(50);

    if (error) {
      console.error('Error fetching eventos:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export default async function EventosPage() {
  const eventos = await getEventos();
  const now = new Date();

  const upcomingEventos = eventos.filter((e) => new Date(e.fecha) >= now);
  const pastEventos = eventos.filter((e) => new Date(e.fecha) < now);

  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eventos
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Próximos eventos y actividades de la fundación
          </p>
        </div>

        {/* Upcoming Events */}
        {upcomingEventos.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Próximos Eventos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEventos.map((evento) => {
                // Arreglar problema de zona horaria - parsear la fecha como string directamente
                const fechaStr = evento.fecha.toString();
                const fecha = fechaStr.includes('T') ? parseISO(fechaStr.split('T')[0]) : parseISO(fechaStr);
                
                return (
                  <Link
                    key={evento.id}
                    href={`/eventos/${evento.id}`}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-[#dc2626] block"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{evento.titulo}</h3>
                    <div className="space-y-2 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-[#dc2626]" />
                        {format(fecha, "EEEE, d 'de' MMMM, yyyy", { locale: es })}
                      </div>
                      {evento.hora && (
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-[#dc2626]" />
                          {evento.hora}
                        </div>
                      )}
                      {evento.ubicacion && (
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-[#dc2626]" />
                          <span className="line-clamp-1">{evento.ubicacion}</span>
                        </div>
                      )}
                    </div>
                    {evento.descripcion && (
                      <p className="text-gray-700 line-clamp-3 mb-3">{evento.descripcion}</p>
                    )}
                    <div className="flex items-center text-[#dc2626] font-semibold mt-4">
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEventos.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Eventos Anteriores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEventos.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-gray-300 opacity-75"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{evento.titulo}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                      {(() => {
                        const fechaStr = evento.fecha.toString();
                        const fecha = fechaStr.includes('T') ? parseISO(fechaStr.split('T')[0]) : parseISO(fechaStr);
                        return format(fecha, "EEEE, d 'de' MMMM, yyyy", { locale: es });
                      })()}
                    </div>
                    {evento.ubicacion && (
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                        {evento.ubicacion}
                      </div>
                    )}
                  </div>
                  {evento.descripcion && (
                    <p className="text-gray-700 line-clamp-3">{evento.descripcion}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {eventos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No hay eventos disponibles aún.</p>
          </div>
        )}
      </div>
    </div>
  );
}


