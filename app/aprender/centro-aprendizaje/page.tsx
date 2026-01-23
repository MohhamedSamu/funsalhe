import Link from 'next/link';
import { ArrowLeft, GraduationCap, BookOpen, Video, FileText, Download, Users, Clock, Award } from 'lucide-react';

export default function CentroAprendizajePage() {
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
            Centro de Aprendizaje
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mb-6"></div>
          <p className="text-xl text-gray-700">
            Recursos educativos diseñados para pacientes, cuidadores y profesionales de la salud
          </p>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introducción */}
          <section>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Bienvenido al Centro de Aprendizaje</h2>
            </div>
            <div className="bg-[#fef2f2] rounded-lg p-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El Centro de Aprendizaje es un espacio educativo diseñado para pacientes, cuidadores y profesionales de la salud 
                que desean profundizar en el conocimiento de los trastornos hemorrágicos. Ofrecemos una amplia gama de recursos 
                educativos accesibles en cualquier momento y desde cualquier dispositivo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Todos nuestros recursos son gratuitos y están organizados según el nivel de conocimiento (principiante a avanzado) 
                y el tipo de usuario, permitiendo que cada persona encuentre el contenido más adecuado para sus necesidades.
              </p>
            </div>
          </section>

          {/* Características */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Características del Centro de Aprendizaje</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <Clock className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Acceso 24/7</h3>
                <p className="text-gray-700">
                  Todos los recursos están disponibles en cualquier momento y desde cualquier dispositivo, 
                  permitiendo aprender a tu propio ritmo.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <Award className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sin Costo</h3>
                <p className="text-gray-700">
                  Todo nuestro contenido educativo es completamente gratuito, sin necesidad de suscripciones o pagos.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <Users className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Para Todos</h3>
                <p className="text-gray-700">
                  Recursos adaptados para pacientes, familiares, cuidadores y profesionales de la salud.
                </p>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                <BookOpen className="h-8 w-8 text-pink-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Múltiples Formatos</h3>
                <p className="text-gray-700">
                  Cursos en línea, videos, guías descargables, infografías y herramientas interactivas.
                </p>
              </div>
            </div>
          </section>

          {/* Tipos de Cursos */}
          <section>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Tipos de Cursos Disponibles</h2>
            </div>
            <div className="space-y-6">
              {/* Curso 1 */}
              <div className="border-l-4 border-[#dc2626] pl-6 py-4 bg-[#fef2f2] rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fundamentos de los Trastornos Hemorrágicos</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Un curso introductorio perfecto para quienes recién comienzan a aprender sobre trastornos hemorrágicos. 
                  Cubre los conceptos básicos, tipos de trastornos, síntomas comunes y opciones de tratamiento.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Principiante</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Auto-curso</span>
                </div>
              </div>

              {/* Curso 2 */}
              <div className="border-l-4 border-[#dc2626] pl-6 py-4 bg-[#fef2f2] rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Independencia y Adherencia en Adolescentes</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Diseñado específicamente para adolescentes con trastornos hemorrágicos y sus familias. Aborda temas como 
                  la transición hacia la independencia, adherencia al tratamiento, y cómo manejar los desafíos únicos de 
                  la adolescencia con un trastorno hemorrágico.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Intermedio</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Auto-curso</span>
                </div>
              </div>

              {/* Curso 3 */}
              <div className="border-l-4 border-[#dc2626] pl-6 py-4 bg-[#fef2f2] rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Asuntos Financieros y Navegación del Sistema de Salud</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Una guía práctica sobre cómo navegar el sistema de salud, entender el seguro médico, manejar los costos 
                  del tratamiento, y acceder a programas de asistencia financiera.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Principiante</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Auto-curso</span>
                </div>
              </div>

              {/* Curso 4 */}
              <div className="border-l-4 border-[#dc2626] pl-6 py-4 bg-[#fef2f2] rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cursos Específicos por Tipo de Trastorno</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Cursos especializados que profundizan en tipos específicos de trastornos hemorrágicos, incluyendo Hemofilia A, 
                  Hemofilia B, enfermedad de von Willebrand, y otros trastornos menos comunes. Cada curso cubre diagnóstico, 
                  tratamiento, manejo y complicaciones específicas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Intermedio</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Auto-curso</span>
                </div>
              </div>

              {/* Curso 5 */}
              <div className="border-l-4 border-[#dc2626] pl-6 py-4 bg-[#fef2f2] rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Manejo de Inhibidores</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Un curso avanzado sobre el desarrollo y manejo de inhibidores, que son anticuerpos que pueden hacer que el 
                  tratamiento sea menos efectivo. Incluye información sobre prevención, detección temprana y opciones de tratamiento.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Avanzado</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Auto-curso</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recursos Adicionales */}
          <section>
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Recursos Adicionales</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <Video className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Videos Educativos</h3>
                <p className="text-gray-700">
                  Biblioteca de videos que cubren diversos temas, desde conceptos básicos hasta técnicas avanzadas de tratamiento. 
                  Incluye testimonios de pacientes, entrevistas con expertos y demostraciones prácticas.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <FileText className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guías y Folletos</h3>
                <p className="text-gray-700">
                  Guías descargables en formato PDF que puedes imprimir o guardar en tu dispositivo. Incluyen información sobre 
                  primeros auxilios, viajes, ejercicio seguro, y más.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <Download className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Herramientas de Seguimiento</h3>
                <p className="text-gray-700">
                  Registros descargables para el seguimiento de sangrados, tratamientos, y síntomas. Incluye registros menstruales 
                  para mujeres y herramientas para compartir con proveedores de salud.
                </p>
              </div>

              <div className="bg-pink-50 rounded-lg p-6">
                <BookOpen className="h-8 w-8 text-pink-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Infografías</h3>
                <p className="text-gray-700">
                  Visualizaciones informativas que explican conceptos complejos de manera sencilla. Perfectas para compartir 
                  con familiares, amigos o en redes sociales para aumentar la conciencia.
                </p>
              </div>
            </div>
          </section>

          {/* Para Profesionales */}
          <section>
            <div className="bg-gradient-to-br from-[#fee2e2] to-[#fef2f2] rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-[#dc2626] mr-2" />
                <h2 className="text-3xl font-bold text-gray-900">Recursos para Profesionales de la Salud</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El Centro de Aprendizaje también ofrece recursos especializados para profesionales de la salud, incluyendo:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" />
                  <span>Guías de práctica clínica actualizadas</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" />
                  <span>Información sobre las últimas investigaciones y avances en tratamiento</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" />
                  <span>Recursos para la educación de pacientes</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" />
                  <span>Herramientas para el diagnóstico y seguimiento</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-[#dc2626] mr-2 mt-1 flex-shrink-0" />
                  <span>Información sobre centros de tratamiento y recursos de referencia</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Cómo Empezar */}
          <section>
            <div className="bg-white border-2 border-[#dc2626] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo Empezar?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#dc2626] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Evalúa tu Nivel de Conocimiento</h3>
                    <p className="text-gray-700">
                      Si eres nuevo en el tema, comienza con los cursos de nivel principiante. Si ya tienes experiencia, 
                      puedes saltar directamente a cursos más avanzados.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#dc2626] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Identifica tus Necesidades</h3>
                    <p className="text-gray-700">
                      Considera qué información es más relevante para tu situación actual. ¿Eres un paciente recién diagnosticado? 
                      ¿Un cuidador? ¿Un profesional de la salud?
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#dc2626] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Explora los Recursos</h3>
                    <p className="text-gray-700">
                      Navega por los diferentes cursos, videos y guías disponibles. Todos los recursos están organizados por tema 
                      y nivel de dificultad para facilitar tu búsqueda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#dc2626] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Aprende a tu Propio Ritmo</h3>
                    <p className="text-gray-700">
                      Todos los recursos son auto-curso, lo que significa que puedes tomarte el tiempo que necesites. 
                      Puedes pausar, revisar y volver a cualquier recurso cuando lo necesites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nota Final */}
          <section className="bg-gradient-to-br from-[#fee2e2] to-[#fef2f2] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recuerda</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              El Centro de Aprendizaje está diseñado para complementar, no reemplazar, la atención médica profesional. 
              Siempre consulta con tu equipo de atención médica sobre cualquier pregunta o preocupación relacionada con tu 
              condición o tratamiento. La educación es una herramienta poderosa para empoderarte en el manejo de tu trastorno 
              hemorrágico, pero debe ir de la mano con el cuidado médico adecuado.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


