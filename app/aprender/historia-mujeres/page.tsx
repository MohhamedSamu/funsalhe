import Link from 'next/link';
import { ArrowLeft, Calendar, Heart, Users } from 'lucide-react';

export default function HistoriaMujeresPage() {
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
            Historia de las Mujeres con Trastornos Hemorrágicos
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mb-6"></div>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introducción */}
          <section>
            <p className="text-lg text-gray-700 leading-relaxed">
              Durante siglos, las mujeres con trastornos hemorrágicos han sido tradicionalmente ignoradas, mal diagnosticadas 
              o subrepresentadas en la investigación y el tratamiento médico. Esta sección aborda cómo las mujeres han sido 
              históricamente excluidas del discurso sobre trastornos hemorrágicos y el progreso reciente hacia un mayor 
              reconocimiento de sus necesidades específicas.
            </p>
          </section>

          {/* El Problema Histórico */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">El Problema Histórico</h2>
            </div>
            <div className="bg-[#fef2f2] rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Por siglos, la investigación y el tratamiento de los trastornos hemorrágicos se centraron casi exclusivamente 
                en los hombres y en la hemofilia. Generalmente se pensaba que solo los hombres sufrían la enfermedad activa, 
                mientras que las mujeres solo la transmitían como portadoras.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sin embargo, la enfermedad de von Willebrand, que es más frecuente y afecta significativamente a las mujeres, 
                no recibió la misma atención que la hemofilia. El estigma asociado con el sangrado menstrual y la falta de 
                conocimiento sobre cómo los trastornos hemorrágicos se manifiestan en las mujeres contribuyeron al retraso 
                en diagnósticos y tratamientos adecuados.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Muchas mujeres con trastornos hemorrágicos experimentaron síntomas desde la infancia, pero fueron desestimadas 
                o mal diagnosticadas durante años, sufriendo innecesariamente debido a la falta de reconocimiento de sus condiciones.
              </p>
            </div>
          </section>

          {/* Primeros Casos Documentados */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Primeros Casos Documentados</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1923</p>
                <p className="text-gray-700">
                  Aparece el primer caso documentado de una mujer con hemofilia, diagnosticada en la edad adulta luego de 
                  experimentar síntomas graves desde su infancia. Este caso marcó un hito importante, demostrando que las 
                  mujeres también podían tener hemofilia activa, no solo ser portadoras.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1926</p>
                <p className="text-gray-700">
                  Se describe por primera vez la enfermedad de von Willebrand, que afecta tanto a hombres como a mujeres, 
                  pero es más comúnmente diagnosticada en mujeres debido a sus síntomas relacionados con el sangrado menstrual.
                </p>
              </div>
            </div>
          </section>

          {/* Avances en los Años 50-70 */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Avances en el Reconocimiento (1950s-1970s)</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1959</p>
                <p className="text-gray-700">
                  Mary M. Gooley fundó uno de los primeros centros integrales de atención que incluyó específicamente el 
                  cuidado para mujeres con trastornos hemorrágicos en Rochester, Nueva York. Este centro marcó un cambio 
                  importante hacia el reconocimiento de las necesidades específicas de las mujeres.
                </p>
              </div>
              <div className="bg-[#fef2f2] rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  Durante este período, comenzó a crecer la conciencia de que las mujeres no solo eran portadoras, sino que 
                  también podían experimentar síntomas significativos de trastornos hemorrágicos. Sin embargo, el diagnóstico 
                  y tratamiento adecuados seguían siendo un desafío para muchas mujeres.
                </p>
              </div>
            </div>
          </section>

          {/* Organización y Defensa (1980s-1990s) */}
          <section>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-[#dc2626] mr-2" fill="currentColor" />
              <h2 className="text-3xl font-bold text-gray-900">Organización y Defensa (1980s-1990s)</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1980s</p>
                <p className="text-gray-700">
                  Se crea la Blood Sisterhood (Hermandad de Sangre), una red de apoyo específicamente para mujeres con 
                  trastornos hemorrágicos. Esta organización proporcionó un espacio seguro para que las mujeres compartieran 
                  sus experiencias y se apoyaran mutuamente.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1990s</p>
                <p className="text-gray-700">
                  Se establecen redes y comités específicos de mujeres dentro de organizaciones de trastornos hemorrágicos. 
                  Estos grupos trabajan para aumentar la conciencia sobre las necesidades únicas de las mujeres y abogar por 
                  mejor investigación y atención.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1995</p>
                <p className="text-gray-700">
                  Los Centros para el Control y Prevención de Enfermedades (CDC) expandieron su alcance para incluir 
                  específicamente a las mujeres en sus programas de vigilancia y educación sobre trastornos hemorrágicos.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">2010</p>
                <p className="text-gray-700">
                  Se funda la Fundación para Mujeres y Niñas con Trastornos Sanguíneos, una organización dedicada 
                  exclusivamente a abordar las necesidades de las mujeres afectadas por estos trastornos.
                </p>
              </div>
            </div>
          </section>

          {/* Desafíos Persistentes */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Desafíos Persistentes</h2>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                A pesar del progreso, las mujeres con trastornos hemorrágicos continúan enfrentando desafíos significativos:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>
                    <strong>Diagnóstico tardío:</strong> Las mujeres con enfermedad de von Willebrand reportan síntomas desde 
                    los 6 años, pero muchas veces no son diagnosticadas hasta pasados los 15 años.
                  </span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>
                    <strong>Normalización del sangrado menstrual:</strong> El sangrado menstrual excesivo a menudo se 
                    normaliza o se atribuye a otras causas, retrasando el diagnóstico.
                  </span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>
                    <strong>Falta de investigación:</strong> Históricamente, las mujeres han estado subrepresentadas en 
                    estudios clínicos sobre trastornos hemorrágicos.
                  </span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>
                    <strong>Barreras de acceso:</strong> Las mujeres pueden enfrentar barreras adicionales para acceder 
                    a atención especializada, especialmente en áreas rurales.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Avances Recientes */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Avances Recientes (2000s-Presente)</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">2000s-2010s</p>
                <p className="text-gray-700">
                  Se incorporan servicios de ginecología y salud reproductiva en los centros de tratamiento de hemofilia, 
                  reconociendo las necesidades únicas de las mujeres. Se desarrollan guías específicas para el manejo de 
                  trastornos hemorrágicos durante el embarazo y el parto.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">2022</p>
                <p className="text-gray-700">
                  Tras la anulación de Roe vs. Wade en Estados Unidos, surgen preocupaciones sobre la privacidad del uso 
                  de aplicaciones móviles para el seguimiento del sangrado menstrual. Esto llevó a algunas organizaciones 
                  a retirar aplicaciones de seguimiento y crear alternativas más privadas, como páginas descargables de 
                  seguimiento que no requieren conexión a internet.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">2024</p>
                <p className="text-gray-700">
                  MASAC (Medical and Scientific Advisory Council) publica un documento con recomendaciones formales para 
                  el diagnóstico y tratamiento de trastornos hemorrágicos hereditarios en niñas y mujeres. Este documento 
                  representa un paso importante hacia un mayor reconocimiento del tratamiento de las mujeres y establece 
                  directrices claras para los proveedores de atención médica.
                </p>
              </div>
            </div>
          </section>

          {/* El Camino Hacia Adelante */}
          <section>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-[#dc2626] mr-2" fill="currentColor" />
              <h2 className="text-3xl font-bold text-gray-900">El Camino Hacia Adelante</h2>
            </div>
            <div className="bg-gradient-to-br from-[#fee2e2] to-[#fef2f2] rounded-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Aunque se ha logrado un progreso significativo en el reconocimiento y tratamiento de las mujeres con 
                trastornos hemorrágicos, todavía hay trabajo por hacer. Las mujeres continúan enfrentando diagnósticos tardíos, 
                falta de investigación específica y barreras para acceder a la atención adecuada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Es fundamental continuar:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>Aumentar la conciencia sobre cómo los trastornos hemorrágicos se manifiestan en las mujeres</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>Mejorar la educación de los proveedores de atención médica sobre el diagnóstico en mujeres</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>Incluir más mujeres en estudios clínicos y de investigación</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>Desarrollar recursos y herramientas específicas para las necesidades de las mujeres</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" fill="currentColor" />
                  <span>Abogar por políticas que mejoren el acceso a la atención para todas las mujeres afectadas</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusión */}
          <section className="bg-white border-2 border-[#dc2626] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reconocimiento y Esperanza</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La historia de las mujeres con trastornos hemorrágicos es una historia de resistencia, organización y progreso. 
              Desde ser completamente ignoradas hasta tener organizaciones dedicadas y recomendaciones formales de tratamiento, 
              las mujeres han trabajado incansablemente para obtener el reconocimiento y la atención que merecen. 
              Aunque el camino ha sido largo y todavía hay desafíos por superar, el futuro se ve más prometedor para las 
              mujeres afectadas por trastornos hemorrágicos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


