import Image from 'next/image';
import { Heart, Target, Eye, Users, Award } from 'lucide-react';

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mx-auto mb-6"></div>
        </div>

        {/* Quienes Somos */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-[#dc2626] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">¿Quiénes Somos?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos una Organización sin fines de lucro, creada para el servicio del pueblo, especialmente para las personas
                que padecen de la hemofilia. Fundación Salvadoreña de Hemofilia nace jurídicamente según Escritura Pública de
                constitución del 09 de agosto del 2014, como una organización sin fines de lucro enfocada al servicio de la
                población salvadoreña con trastornos de coagulación de la sangre; autorizada por el Ministerio de Gobernación y
                Desarrollo Territorial según decreto Nº 017 del 19 de agosto del 2015 publicado en el Diario Oficial Nº 190,
                Tomo Nº 409 del 16 de octubre de 2015.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/Equipos multidiciplinario Hops.Rosales.jpg"
                alt="Equipos multidisciplinario Hospital Rosales"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-[#dc2626] mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Misión</h2>
            </div>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/news/salvador_mundo3.png"
                alt="Reconocimiento de la PDDH"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser una Institución que satisfaga las necesidades de la población hemofílica, brindando los medios necesarios
              para que la ayuda médica de los afectados con dicha enfermedad sea oportuna, que no exista escasez de
              medicamentos; a fin de mejorar la condición de vida de los hemofílicos.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-[#dc2626] mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Visión</h2>
            </div>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/news/cumbre_global.jpg"
                alt="Reconocimiento PHHD"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser una fundación modelo, que promueva el espíritu de apoyo humanístico y solidario en el fortalecimiento de
              las necesidades médicas como del suministro de medicamentos a las personas con padecimiento de la Hemofilia, a
              fin de brindar un mejor bienestar a las familias salvadoreñas que sufren de este mal.
            </p>
          </section>
        </div>

        {/* Objectives */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-[#dc2626] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Objetivos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Heart className="h-6 w-6 text-[#dc2626] mr-3 mt-1 flex-shrink-0" fill="currentColor" />
              <p className="text-gray-700">
                Procurar la rehabilitación de las personas con hemofilia
              </p>
            </div>
            <div className="flex items-start">
              <Heart className="h-6 w-6 text-[#dc2626] mr-3 mt-1 flex-shrink-0" fill="currentColor" />
              <p className="text-gray-700">
                Ser un medio para informar de la enfermedad a la población Salvadoreña
              </p>
            </div>
            <div className="flex items-start">
              <Heart className="h-6 w-6 text-[#dc2626] mr-3 mt-1 flex-shrink-0" fill="currentColor" />
              <p className="text-gray-700">
                Fomentar campañas de capacitación e investigación de la enfermedad de la hemofilia
              </p>
            </div>
            <div className="flex items-start">
              <Heart className="h-6 w-6 text-[#dc2626] mr-3 mt-1 flex-shrink-0" fill="currentColor" />
              <p className="text-gray-700">
                Desarrollar programas y actividades en beneficio de la comunidad hemofílica
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-gradient-to-br from-[#fee2e2] to-[#fef2f2] rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Proyectos en Desarrollo</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Censo Nacional de Hemofilia</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                FUNSALHE ha desarrollado un proyecto que tiene como objetivo el realizar un CENSO NACIONAL de personas con
                trastornos de coagulación de la sangre, a fin de actualizar la información estadística ya que las cifras que
                se manejan hoy en día datan del año 2014. Dicho censo está proyectado se ejecutar en tres etapas a realizarse
                en la zona oriental, zona occidental y concluyendo en la zona central del país.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proyecto de Jóvenes Líderes de El Salvador</h3>
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/news/hemofilia.jpg"
                  alt="Proyecto de Jóvenes Líderes"
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                FUNSALHE está elaborando un programa especialmente para la preparación de jóvenes líderes, la cual se
                realizará en tres eventos siendo el primero en la zona oriental, el segundo en la zona occidental y
                concluyendo con el tercer y último evento en la zona central del país.
              </p>
              <div className="bg-white rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-2">El objetivo de este evento es capacitar a los jóvenes a resolver problemas de la vida diaria:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                    <span>Cómo defender nuestros derechos</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                    <span>Estableciendo mi rol en la comunidad de hemofilia</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                    <span>Yo puedo ser un líder</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


