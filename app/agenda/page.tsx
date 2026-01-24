import { supabaseServer } from '@/lib/supabase';
import { Phone, Mail, MapPin, Building } from 'lucide-react';

// Configuración de cache: forzar revalidación dinámica (no cachear)
export const revalidate = 0;
export const dynamic = 'force-dynamic';

async function getAgendaContacts() {
  try {
    const { data, error } = await supabaseServer
      .from('agenda')
      .select('*')
      .order('nombre', { ascending: true });

    if (error) {
      console.error('Error fetching agenda:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      console.error('Error details:', JSON.stringify(error, null, 2));
      return [];
    }

    if (!data) {
      console.warn('No data returned from agenda query');
      return [];
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export default async function AgendaPage() {
  const contacts = await getAgendaContacts();

  // Normalizar categorías: "Hospitales" -> "Hospital"
  const normalizeCategory = (cat: string) => {
    if (!cat) return 'General';
    if (cat.toLowerCase().includes('hospital')) return 'Hospital';
    return cat;
  };

  // Group contacts by category
  const groupedContacts = contacts.reduce((acc: any, contact: any) => {
    const category = normalizeCategory(contact.categoria || 'General');
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(contact);
    return acc;
  }, {});

  // Orden de categorías específico
  const categoryOrder = ['General', 'Emergencias', 'Hospital', 'Otros'];
  
  // Ordenar las categorías según el orden especificado
  const sortedCategories = Object.keys(groupedContacts).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    
    // Si ambas están en el orden especificado, usar ese orden
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // Si solo una está en el orden, esa va primero
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    // Si ninguna está en el orden, ordenar alfabéticamente
    return a.localeCompare(b);
  });

  // Función para dividir teléfonos por comas y crear lista
  const renderPhones = (telefono: string) => {
    if (!telefono) return null;
    
    const phones = telefono.split(',').map(phone => phone.trim()).filter(phone => phone);
    
    if (phones.length === 0) return null;
    
    return (
      <div className="space-y-2">
        {phones.map((phone, index) => (
          <div key={index} className="flex items-center text-gray-700">
            <Phone className="h-5 w-5 text-[#dc2626] mr-3 flex-shrink-0" />
            <a
              href={`tel:${phone}`}
              className="hover:text-[#dc2626] transition-colors"
            >
              {phone}
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Phone className="h-12 w-12 text-[#dc2626]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Agenda
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Números de teléfono y contactos importantes
          </p>
        </div>

        {contacts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No hay contactos disponibles aún.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {sortedCategories.map((category) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building className="h-6 w-6 text-[#dc2626] mr-2" />
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedContacts[category].map((contact: any) => (
                    <div
                      key={contact.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{contact.nombre}</h3>
                      
                      <div className="space-y-3">
                        {renderPhones(contact.telefono)}
                        
                        {contact.email && (
                          <div className="flex items-center text-gray-700">
                            <Mail className="h-5 w-5 text-[#dc2626] mr-3 flex-shrink-0" />
                            <a
                              href={`mailto:${contact.email}`}
                              className="hover:text-[#dc2626] transition-colors break-all"
                            >
                              {contact.email}
                            </a>
                          </div>
                        )}
                        
                        {contact.direccion && (
                          <div className="flex items-start text-gray-700">
                            <MapPin className="h-5 w-5 text-[#dc2626] mr-3 mt-1 flex-shrink-0" />
                            <span>{contact.direccion}</span>
                          </div>
                        )}
                        
                        {contact.descripcion && (
                          <p className="text-gray-600 text-sm mt-3">{contact.descripcion}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


