import Link from 'next/link';
import { ArrowLeft, Calendar, Heart } from 'lucide-react';

export default function HistoriaTrastornosHemorragicosPage() {
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
            Historia de los Trastornos Hemorrágicos
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mb-6"></div>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Introducción */}
          <section>
            <p className="text-lg text-gray-700 leading-relaxed">
              La historia de los trastornos hemorrágicos es un viaje fascinante que se remonta a épocas antiguas. 
              A lo largo de los siglos, hemos sido testigos de avances extraordinarios en el reconocimiento, 
              diagnóstico y tratamiento de estas condiciones, transformando la vida de millones de personas en todo el mundo.
            </p>
          </section>

          {/* Antigüedad */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Antigüedad: Los Primeros Registros</h2>
            </div>
            <div className="bg-[#fef2f2] rounded-lg p-6 mb-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                Los primeros registros escritos sobre trastornos hemorrágicos hereditarios datan de épocas muy antiguas. 
                En el siglo II después de Cristo, el Talmud, un cuerpo de leyes judías, describe casos en los que varios 
                hermanos mueren tras ser circuncidados, lo que sugiere una afección hereditaria que afectaba la capacidad 
                de coagulación de la sangre.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Este relato histórico representa uno de los primeros reconocimientos documentados de que ciertas familias 
                tenían una predisposición hereditaria a sangrar de manera excesiva, estableciendo las bases para el 
                entendimiento futuro de estos trastornos.
              </p>
            </div>
          </section>

          {/* Siglos XVII-XIX */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Siglos XVII - XIX: Documentación en Europa y América</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1639</p>
                <p className="text-gray-700">
                  El primer europeo con un trastorno hemorrágico llega a las colonias americanas, marcando el inicio 
                  de la documentación de estos casos en el Nuevo Mundo.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1791</p>
                <p className="text-gray-700">
                  Isaac Zoll de Virginia muere a los 19 años de un corte menor en el pie. Se le considera el primer 
                  estadounidense con hemofilia documentado, destacando la gravedad de estos trastornos incluso ante 
                  lesiones aparentemente menores.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1803</p>
                <p className="text-gray-700">
                  La hemofilia recibe su nombre oficial, estableciendo una terminología médica que se mantiene hasta nuestros días.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1839</p>
                <p className="text-gray-700">
                  Se publica el libro "Medicina Doméstica", que incluye tratamientos para hemorragias y sangrados internos, 
                  reflejando el interés creciente en el manejo de estos síntomas.
                </p>
              </div>
            </div>
          </section>

          {/* Siglo XX - Primera Mitad */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Siglo XX: Avances Fundamentales</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1926</p>
                <p className="text-gray-700">
                  Se describe por primera vez la enfermedad de von Willebrand, ampliando el conocimiento sobre los diferentes 
                  tipos de trastornos hemorrágicos.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1943</p>
                <p className="text-gray-700">
                  Los avances en medicina transfusional mejoran significativamente la esperanza de vida para alguien con 
                  hemofilia severa, alcanzando los 20 años. Aunque aún limitada, esta mejora representa un progreso importante.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1948</p>
                <p className="text-gray-700">
                  La Fundación Nacional de Hemofilia es fundada por Betty Jane y Bob Henry, padres de un hijo con hemofilia. 
                  Esta organización marca un hito en la defensa de los derechos de los pacientes y el apoyo a las familias afectadas.
                </p>
              </div>
            </div>
          </section>

          {/* Décadas de 1960-1970 */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Décadas de 1960-1970: Revolución en el Tratamiento</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1963</p>
                <p className="text-gray-700">
                  La Federación Mundial de Hemofilia (FMH) es fundada por Frank Schnabel, un canadiense con hemofilia A grave. 
                  El primer Congreso de la FMH se llevó a cabo en Copenhague con representantes de 12 países diferentes, 
                  estableciendo una red global de apoyo y colaboración.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1965</p>
                <p className="text-gray-700">
                  La Dra. Judith Graham Pool descubre el crioprecipitado. Este es el primer tratamiento exitoso para la hemofilia 
                  más allá de la sangre entera. Después de este descubrimiento, la esperanza de vida aumenta a 24 años, 
                  representando un avance crucial en el cuidado de los pacientes.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1967</p>
                <p className="text-gray-700">
                  Trabajando en Hyland Labs, el Dr. Brinkhaus descubre un método para destilar crioprecipitado en factor de coagulación, 
                  una terapia aún más potente para controlar el sangrado. Este avance permite tratamientos más efectivos y concentrados.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1968</p>
                <p className="text-gray-700">
                  A medida que el concentrado de factor está disponible, los pacientes reciben instrucciones sobre cómo acceder a él. 
                  Sin embargo, la disponibilidad varía según el centro y la región, destacando las desigualdades en el acceso al tratamiento.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1969</p>
                <p className="text-gray-700">
                  Camp Bold Eagle en Michigan se convierte en el primer campamento de verano de hemofilia en el país para niños con 
                  trastornos hemorrágicos. El campamento brinda a los niños la oportunidad de estar cerca de otros como ellos, 
                  y para muchos esta es la primera vez que conocen a otras personas con hemofilia, creando una comunidad de apoyo invaluable.
                </p>
              </div>
            </div>
          </section>

          {/* Décadas de 1980-1990 */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Décadas de 1980-1990: Desafíos y Nuevos Tratamientos</h2>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
              <p className="text-gray-700 leading-relaxed">
                Esta época estuvo marcada por la crisis del VIH y la hepatitis C, que afectó profundamente a la comunidad de 
                trastornos hemorrágicos debido a la contaminación de los productos de factor de coagulación. Sin embargo, 
                también trajo avances importantes en la seguridad de los tratamientos.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1980s</p>
                <p className="text-gray-700">
                  Se desarrollan métodos de inactivación viral para hacer los productos de factor más seguros, 
                  reduciendo significativamente el riesgo de transmisión de enfermedades.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">1990s</p>
                <p className="text-gray-700">
                  Se introducen los factores de coagulación recombinantes, producidos sin usar sangre humana, 
                  eliminando completamente el riesgo de transmisión de enfermedades infecciosas.
                </p>
              </div>
            </div>
          </section>

          {/* Siglo XXI */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-[#dc2626] mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Siglo XXI: Innovación y Terapias Avanzadas</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">2000s-2010s</p>
                <p className="text-gray-700">
                  Se desarrollan productos de vida media extendida, permitiendo tratamientos menos frecuentes y mejorando 
                  la calidad de vida de los pacientes. También se crean nuevos tratamientos no basados en factor de coagulación.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">2022</p>
                <p className="text-gray-700">
                  La Administración de Alimentos y Medicamentos (FDA) aprueba por primera vez una terapia génica para el 
                  tratamiento de la hemofilia B. Más de 20 años después de la demostración inicial de que la terapia génica 
                  podría curar la hemofilia B en animales, el primer fármaco de terapia génica obtuvo la aprobación regulatoria.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">2023</p>
                <p className="text-gray-700">
                  La FDA otorga aprobación por primera vez a una terapia génica para el tratamiento de la hemofilia A, 
                  marcando otro hito histórico en el tratamiento de estos trastornos.
                </p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <p className="font-semibold text-gray-900">2024</p>
                <p className="text-gray-700">
                  El primer paciente en EE. UU. recibe una terapia génica única para la hemofilia A fuera de ensayos clínicos. 
                  La terapia génica proporciona instrucciones para ayudar al cuerpo a producir FVIII, reduciendo así la necesidad 
                  de tratamientos regulares.
                </p>
              </div>
            </div>
          </section>

          {/* Reconocimiento de Poblaciones */}
          <section>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-[#dc2626] mr-2" fill="currentColor" />
              <h2 className="text-3xl font-bold text-gray-900">Reconocimiento de Todas las Poblaciones</h2>
            </div>
            <div className="bg-[#fef2f2] rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                A lo largo de la historia, las mujeres, las personas de color y las que viven en áreas rurales rara vez se 
                mencionaban en las descripciones de los medios de comunicación sobre las personas con trastornos hemorrágicos. 
                Sin embargo, en décadas recientes ha crecido el reconocimiento hacia estas poblaciones.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hoy en día, hay un mayor enfoque en abordar las barreras de acceso, las desigualdades en el diagnóstico y 
                tratamiento, y las necesidades específicas de todas las personas afectadas por trastornos hemorrágicos, 
                independientemente de su género, origen étnico o ubicación geográfica.
              </p>
            </div>
          </section>

          {/* Conclusión */}
          <section className="bg-gradient-to-br from-[#fee2e2] to-[#fef2f2] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mirando Hacia el Futuro</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La historia de los trastornos hemorrágicos es una historia de perseverancia, innovación y esperanza. 
              Desde los primeros registros en textos antiguos hasta las terapias génicas de hoy, hemos sido testigos de 
              avances extraordinarios que han transformado la vida de millones de personas. Aunque todavía no existe una cura 
              definitiva, el futuro se ve prometedor con nuevas terapias en desarrollo y un mayor reconocimiento de las 
              necesidades de toda la comunidad afectada.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


