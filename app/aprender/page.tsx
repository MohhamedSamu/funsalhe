import Link from 'next/link';
import { BookOpen, History, Users, GraduationCap, Heart } from 'lucide-react';

export default function AprenderPage() {
  const secciones = [
    {
      href: '/aprender/historia-trastornos-hemorragicos',
      title: 'Historia de los Trastornos Hemorrágicos',
      description: 'Un recorrido cronológico por los avances clave en el reconocimiento y tratamiento de los trastornos hemorrágicos a lo largo de la historia.',
      icon: History,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      href: '/aprender/historia-mujeres',
      title: 'Historia de las Mujeres',
      description: 'Descubre cómo las mujeres con trastornos hemorrágicos han sido tradicionalmente subdiagnosticadas y el progreso reciente en su reconocimiento.',
      icon: Users,
      color: 'bg-pink-100 text-pink-600',
    },
    {
      href: '/aprender/trastornos-hemorragicos-101',
      title: 'Trastornos Hemorrágicos 101',
      description: 'Una guía introductoria que explica los conceptos esenciales: qué son los trastornos hemorrágicos, sus tipos, complicaciones y opciones de tratamiento.',
      icon: BookOpen,
      color: 'bg-green-100 text-green-600',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Aprender
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explora nuestros recursos educativos sobre trastornos hemorrágicos. 
            Información confiable y actualizada para pacientes, familiares y profesionales de la salud.
          </p>
        </div>

        {/* Secciones Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {secciones.map((seccion) => {
            const Icon = seccion.icon;
            return (
              <Link
                key={seccion.href}
                href={seccion.href}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start mb-4">
                  <div className={`${seccion.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#dc2626] transition-colors">
                    {seccion.title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {seccion.description}
                </p>
                <div className="mt-4 flex items-center text-[#dc2626] font-medium group-hover:translate-x-2 transition-transform">
                  Leer más
                  <Heart className="ml-2 h-4 w-4" fill="currentColor" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Información adicional */}
        <section className="bg-gradient-to-br from-[#fee2e2] to-[#fef2f2] rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Recursos Educativos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <BookOpen className="h-12 w-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Contenido Actualizado</h3>
              <p className="text-gray-700 text-sm">
                Información basada en las últimas investigaciones y avances médicos
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Heart className="h-12 w-12 text-[#dc2626] mx-auto mb-4" fill="currentColor" />
              <h3 className="font-bold text-gray-900 mb-2">Para Toda la Familia</h3>
              <p className="text-gray-700 text-sm">
                Recursos adaptados para pacientes, familiares y cuidadores
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <GraduationCap className="h-12 w-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Acceso Gratuito</h3>
              <p className="text-gray-700 text-sm">
                Todo nuestro contenido educativo está disponible sin costo
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


