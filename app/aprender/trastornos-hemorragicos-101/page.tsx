import Link from 'next/link';
import { ArrowLeft, BookOpen, Heart, AlertCircle, Stethoscope, Users } from 'lucide-react';

export default function TrastornosHemorragicos101Page() {
  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/aprender"
            className="inline-flex items-center text-[#dc2626] hover:text-[#b91c1c] mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Aprender
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trastornos Hemorrágicos 101
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mb-6"></div>
          <p className="text-xl text-gray-700">
            Una guía introductoria sobre los trastornos hemorrágicos: qué son, sus tipos, síntomas y opciones de tratamiento.
          </p>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          {/* ¿Qué son los Trastornos Hemorrágicos? */}
          <section>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">¿Qué son los Trastornos Hemorrágicos?</h2>
            </div>
            <div className="bg-[#fef2f2] rounded-lg p-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un trastorno hemorrágico es una condición médica en la que la sangre no coagula correctamente. 
                Esto puede deberse a una deficiencia o mal funcionamiento de las proteínas de coagulación (factores de coagulación) 
                o de las plaquetas, que son células sanguíneas esenciales para la formación de coágulos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cuando una persona tiene un trastorno hemorrágico, puede experimentar sangrados prolongados, dolorosos y 
                con secuelas crónicas, incluso después de lesiones menores. Estos sangrados pueden ocurrir externamente 
                (como cortes) o internamente (como en articulaciones o músculos).
              </p>
            </div>
          </section>

          {/* Tipos de Trastornos Hemorrágicos */}
          <section>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-[#dc2626] mr-2" fill="currentColor" />
              <h2 className="text-3xl font-bold text-gray-900">Tipos de Trastornos Hemorrágicos</h2>
            </div>
            <div className="space-y-6">
              {/* Hemofilia A */}
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hemofilia A</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  También conocida como hemofilia clásica, es causada por una deficiencia del factor VIII de coagulación. 
                  Es el tipo más común de hemofilia, afectando aproximadamente 1 de cada 5,000-10,000 varones nacidos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Síntomas:</strong> Sangrado prolongado después de lesiones, sangrado espontáneo en articulaciones 
                  y músculos, moretones frecuentes, y sangrado interno que puede causar daño a largo plazo.
                </p>
              </div>

              {/* Hemofilia B */}
              <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hemofilia B</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  También conocida como enfermedad de Christmas, es causada por una deficiencia del factor IX de coagulación. 
                  Es menos común que la hemofilia A, afectando aproximadamente 1 de cada 25,000-30,000 varones nacidos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Síntomas:</strong> Similar a la hemofilia A, incluyendo sangrado prolongado, sangrado espontáneo, 
                  y riesgo de sangrado interno. La gravedad varía de leve a severa dependiendo del nivel de factor IX.
                </p>
              </div>

              {/* Hemofilia C */}
              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hemofilia C</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Causada por una deficiencia del factor XI de coagulación. A diferencia de la hemofilia A y B, la hemofilia C 
                  se hereda de manera autosómica recesiva, lo que significa que tanto hombres como mujeres pueden verse afectados 
                  por igual.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Síntomas:</strong> Generalmente más leves que la hemofilia A o B, pero puede causar sangrado excesivo 
                  después de cirugías o lesiones traumáticas.
                </p>
              </div>

              {/* Enfermedad de von Willebrand */}
              <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-50 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enfermedad de von Willebrand</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Es el trastorno hemorrágico hereditario más común, afectando aproximadamente al 1% de la población. 
                  Es causada por una deficiencia o mal funcionamiento del factor de von Willebrand, una proteína que ayuda 
                  a las plaquetas a adherirse y formar coágulos.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  A diferencia de la hemofilia, la enfermedad de von Willebrand afecta tanto a hombres como a mujeres, 
                  aunque las mujeres pueden experimentar síntomas más notables debido al sangrado menstrual.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Síntomas:</strong> Sangrado menstrual abundante, sangrado prolongado después de cortes o cirugías, 
                  moretones frecuentes, sangrado de las encías, y sangrado nasal frecuente.
                </p>
              </div>
            </div>
          </section>

          {/* Gravedad de los Trastornos */}
          <section>
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Niveles de Gravedad</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Leve</h3>
                <p className="text-gray-700">
                  Sangrado prolongado principalmente después de cirugías, extracciones dentales o lesiones traumáticas. 
                  Generalmente no hay sangrado espontáneo.
                </p>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Moderado</h3>
                <p className="text-gray-700">
                  Sangrado prolongado después de lesiones menores y ocasional sangrado espontáneo. Puede requerir 
                  tratamiento preventivo antes de actividades físicas.
                </p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Severo</h3>
                <p className="text-gray-700">
                  Sangrado espontáneo frecuente en articulaciones, músculos y otros tejidos. Requiere tratamiento 
                  regular para prevenir sangrados y daño a largo plazo.
                </p>
              </div>
            </div>
          </section>

          {/* Complicaciones */}
          <section>
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Posibles Complicaciones</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Daño Articular</h3>
                <p className="text-gray-700">
                  Los sangrados repetidos en las articulaciones (especialmente rodillas, codos y tobillos) pueden causar 
                  artropatía hemofílica, una condición crónica que causa dolor, rigidez y limitación del movimiento. 
                  El tratamiento temprano y preventivo es crucial para prevenir este daño.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inhibidores</h3>
                <p className="text-gray-700">
                  Algunas personas desarrollan inhibidores, que son anticuerpos que atacan los factores de coagulación 
                  administrados como tratamiento. Esto hace que el tratamiento sea menos efectivo y requiere terapias 
                  alternativas más complejas.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Salud Mental</h3>
                <p className="text-gray-700">
                  Vivir con un trastorno hemorrágico puede tener un impacto significativo en la salud mental, incluyendo 
                  ansiedad, depresión y estrés relacionado con el manejo de la condición. El apoyo psicológico es una 
                  parte importante del cuidado integral.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sangrado Interno</h3>
                <p className="text-gray-700">
                  Los sangrados internos no tratados pueden causar daño a órganos, músculos y tejidos. En casos severos, 
                  pueden ser potencialmente mortales si ocurren en áreas críticas como el cerebro.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnóstico */}
          <section>
            <div className="flex items-center mb-4">
              <Stethoscope className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Diagnóstico</h2>
            </div>
            <div className="bg-[#fef2f2] rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                El diagnóstico de un trastorno hemorrágico generalmente comienza con una evaluación del historial médico 
                del paciente y su familia, seguida de análisis de sangre específicos que miden los niveles de factores 
                de coagulación y la función de las plaquetas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Es importante buscar atención médica si experimenta síntomas como sangrado prolongado, moretones frecuentes, 
                sangrado menstrual abundante, o sangrado espontáneo. Un diagnóstico temprano puede prevenir complicaciones 
                a largo plazo y mejorar significativamente la calidad de vida.
              </p>
            </div>
          </section>

          {/* Tratamiento */}
          <section>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-[#dc2626] mr-2" fill="currentColor" />
              <h2 className="text-3xl font-bold text-gray-900">Opciones de Tratamiento</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Terapia de Reemplazo de Factor</h3>
                <p className="text-gray-700">
                  La administración de factores de coagulación concentrados (ya sea derivados del plasma o recombinantes) 
                  para reemplazar el factor faltante. Puede administrarse de manera preventiva (profilaxis) o cuando ocurre 
                  un sangrado (tratamiento a demanda).
                </p>
              </div>

              <div className="border-l-4 border-[#dc2626] pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tratamiento en el Hogar</h3>
                <p className="text-gray-700">
                  Muchos pacientes aprenden a administrarse su propio tratamiento en casa, lo que permite un tratamiento 
                  más rápido y una mayor independencia. Esto es especialmente importante para el tratamiento preventivo regular.
                </p>
              </div>

              <div className="border-l-4 border-[#dc2626] pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Terapias No Basadas en Factor</h3>
                <p className="text-gray-700">
                  Nuevos tratamientos que funcionan de manera diferente a la terapia de reemplazo tradicional, incluyendo 
                  productos que imitan la función del factor VIII o IX, o que aumentan la capacidad de coagulación de otras maneras.
                </p>
              </div>

              <div className="border-l-4 border-[#dc2626] pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Terapia Génica</h3>
                <p className="text-gray-700">
                  Una terapia innovadora que proporciona instrucciones genéticas para que el cuerpo produzca su propio factor 
                  de coagulación. Aunque todavía es relativamente nueva, representa una promesa significativa para el futuro 
                  del tratamiento.
                </p>
              </div>
            </div>
          </section>

          {/* Centros de Tratamiento */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Centros de Tratamiento Integral</h2>
            </div>
            <div className="bg-gradient-to-br from-[#fee2e2] to-[#fef2f2] rounded-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Los Centros de Tratamiento de Hemofilia (HTC, por sus siglas en inglés) son centros especializados que 
                proporcionan atención multidisciplinaria coordinada para personas con trastornos hemorrágicos. Estos centros 
                reúnen a un equipo de profesionales de la salud que incluye:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span><strong>Hematólogos:</strong> Especialistas en trastornos de la sangre</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span><strong>Fisioterapeutas:</strong> Para prevenir y tratar el daño articular</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span><strong>Genetistas:</strong> Para asesoramiento genético y diagnóstico</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span><strong>Enfermeras especializadas:</strong> Para educación y apoyo continuo</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span><strong>Psicólogos:</strong> Para apoyo emocional y salud mental</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span><strong>Trabajadores sociales:</strong> Para apoyo con recursos y navegación del sistema de salud</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Esta atención coordinada ha demostrado mejorar significativamente los resultados de salud y la calidad de vida 
                de las personas con trastornos hemorrágicos.
              </p>
            </div>
          </section>

          {/* Conclusión */}
          <section className="bg-white border-2 border-[#dc2626] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Viviendo con un Trastorno Hemorrágico</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Aunque los trastornos hemorrágicos son condiciones de por vida, con el diagnóstico adecuado, tratamiento apropiado 
              y apoyo integral, las personas afectadas pueden llevar vidas plenas y activas. El conocimiento, la educación y el 
              acceso a atención especializada son fundamentales para manejar estos trastornos de manera efectiva.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Si usted o alguien que conoce experimenta síntomas de un trastorno hemorrágico, es importante buscar atención médica 
              de un profesional de la salud familiarizado con estas condiciones. El diagnóstico y tratamiento tempranos pueden hacer 
              una diferencia significativa en la prevención de complicaciones y la mejora de la calidad de vida.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


