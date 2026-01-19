import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Users, BookOpen, Calendar, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#fef2f2] via-white to-[#fee2e2] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fundación Salvadoreña de <span className="text-[#dc2626]">Hemofilia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Juntos por una mejor condición de vida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center px-8 py-3 bg-[#dc2626] text-white rounded-lg font-semibold hover:bg-[#b91c1c] transition-colors shadow-lg"
              >
                Conoce más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contactanos"
                className="inline-flex items-center px-8 py-3 bg-white text-[#dc2626] border-2 border-[#dc2626] rounded-lg font-semibold hover:bg-[#fef2f2] transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/Logo para FMH.png"
                alt="Logo FUNSALHE"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bienvenidos a FUNSALHE
            </h2>
            <div className="w-24 h-1 bg-[#dc2626] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Fundación Salvadoreña de Hemofilia nace jurídicamente según Escritura Pública de constitución del 09 de agosto
              del 2014, como una organización sin fines de lucro enfocada al servicio de la población salvadoreña con
              trastornos de coagulación de la sangre; autorizada por el Ministerio de Gobernación y Desarrollo Territorial
              según decreto Nº 017 del 19 de agosto del 2015 publicado en el Diario Oficial Nº 190, Tomo Nº 409 del 16 de
              octubre de 2015.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#fef2f2] p-8 rounded-xl">
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/Mesa de salud de la PDDH.jpg"
                  alt="Mesa de salud de la PDDH"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Estatutos Incluyen</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>Procurar la rehabilitación de las personas con hemofilia</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>Ser un medio para informar de la enfermedad a la población Salvadoreña</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>Fomentar campañas de capacitación e investigación de la enfermedad de la hemofilia</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>Desarrollar programas y actividades en beneficio de la comunidad hemofílica</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#fee2e2] to-[#fef2f2] p-8 rounded-xl">
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/Feria de salud.jpg"
                  alt="Feria de salud"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Censo Nacional de Hemofilia</h3>
              <p className="text-gray-700">
                FUNSALHE ha desarrollado un proyecto que tiene como objetivo el realizar un CENSO NACIONAL de personas con
                trastornos de coagulación de la sangre, a fin de actualizar la información estadística ya que las cifras que
                se manejan hoy en día datan del año 2014. Dicho censo está proyectado se ejecutar en tres etapas a realizarse
                en la zona oriental, zona occidental y concluyendo en la zona central del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#fef2f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <div className="w-24 h-1 bg-[#dc2626] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <BookOpen className="h-12 w-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blog</h3>
              <p className="text-gray-600 mb-4">Información y recursos sobre hemofilia</p>
              <Link href="/blog" className="text-[#dc2626] font-semibold hover:underline">
                Leer más →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <Calendar className="h-12 w-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eventos</h3>
              <p className="text-gray-600 mb-4">Próximos eventos y actividades</p>
              <Link href="/eventos" className="text-[#dc2626] font-semibold hover:underline">
                Ver eventos →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <Phone className="h-12 w-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agenda</h3>
              <p className="text-gray-600 mb-4">Números de contacto importantes</p>
              <Link href="/agenda" className="text-[#dc2626] font-semibold hover:underline">
                Ver agenda →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <Users className="h-12 w-12 text-[#dc2626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comunidad</h3>
              <p className="text-gray-600 mb-4">Únete a nuestra comunidad</p>
              <Link href="/sobre-nosotros" className="text-[#dc2626] font-semibold hover:underline">
                Conoce más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas ayuda o información?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Estamos aquí para apoyarte. Contáctanos y te responderemos lo antes posible.
          </p>
          <Link
            href="/contactanos"
            className="inline-flex items-center px-8 py-3 bg-white text-[#dc2626] rounded-lg font-semibold hover:bg-[#fef2f2] transition-colors shadow-lg"
          >
            Contáctanos ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
