import { FileText, CheckCircle } from 'lucide-react';

export default function EstatutosPage() {
  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileText className="h-12 w-12 text-[#dc2626]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Estatutos
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Estatutos de la Fundación Salvadoreña de Hemofilia
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Decreto Nº 017 del 19 de agosto del 2015 - Diario Oficial Nº 190, Tomo Nº 409 del 16 de octubre de 2015
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Capítulo I - Denominación, Domicilio y Duración */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-[#dc2626] mr-2" />
              Capítulo I - Denominación, Domicilio y Duración
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                La Fundación Salvadoreña de Hemofilia (FUNSALHE) es una organización sin fines de lucro, constituida según
                Escritura Pública del 09 de agosto de 2014, autorizada por el Ministerio de Gobernación y Desarrollo
                Territorial según decreto Nº 017 del 19 de agosto del 2015.
              </p>
              <p>
                La fundación tiene su domicilio en El Salvador y su duración es indefinida.
              </p>
            </div>
          </section>

          {/* Capítulo II - Objeto y Fines */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-[#dc2626] mr-2" />
              Capítulo II - Objeto y Fines
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">La fundación tiene como objeto y fines principales:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2">•</span>
                  <span>Procurar la rehabilitación de las personas con hemofilia y otros trastornos de coagulación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2">•</span>
                  <span>Ser un medio para informar y educar sobre la enfermedad a la población salvadoreña</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2">•</span>
                  <span>Fomentar campañas de capacitación e investigación sobre hemofilia y trastornos de coagulación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2">•</span>
                  <span>Desarrollar programas y actividades en beneficio de la comunidad hemofílica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2">•</span>
                  <span>Brindar asistencia y apoyo a las personas con hemofilia y sus familias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2">•</span>
                  <span>Promover el acceso oportuno a medicamentos y tratamientos médicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2">•</span>
                  <span>Establecer alianzas estratégicas con instituciones públicas y privadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#dc2626] mr-2">•</span>
                  <span>Realizar censos y estudios sobre la población con trastornos de coagulación</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Capítulo III - Patrimonio */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-[#dc2626] mr-2" />
              Capítulo III - Patrimonio
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                El patrimonio de la fundación está constituido por donaciones, aportes, subvenciones y cualquier otro
                ingreso lícito que reciba. Todos los recursos se destinan exclusivamente al cumplimiento de los fines
                establecidos en los estatutos.
              </p>
            </div>
          </section>

          {/* Capítulo IV - Órganos de Gobierno */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-[#dc2626] mr-2" />
              Capítulo IV - Órganos de Gobierno
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                La fundación está dirigida por una Junta Directiva, la cual está integrada por miembros comprometidos con la
                misión de la organización. La Junta Directiva es responsable de la administración, dirección y representación
                legal de la fundación.
              </p>
            </div>
          </section>

          {/* Nota */}
          <div className="bg-[#fef2f2] border-l-4 border-[#dc2626] p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-700">
              <strong>Nota:</strong> Este es un resumen de los estatutos. Para consultar el documento completo, puede
              acceder al Diario Oficial Nº 190, Tomo Nº 409 del 16 de octubre de 2015, o contactar directamente con la
              fundación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


