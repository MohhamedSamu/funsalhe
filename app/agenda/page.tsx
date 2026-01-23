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

  // Group contacts by category if they have one
  const groupedContacts = contacts.reduce((acc: any, contact: any) => {
    const category = contact.categoria || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(contact);
    return acc;
  }, {});

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
            {Object.entries(groupedContacts).map(([category, items]: [string, any]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building className="h-6 w-6 text-[#dc2626] mr-2" />
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((contact: any) => (
                    <div
                      key={contact.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{contact.nombre}</h3>
                      
                      <div className="space-y-3">
                        {contact.telefono && (
                          <div className="flex items-center text-gray-700">
                            <Phone className="h-5 w-5 text-[#dc2626] mr-3 flex-shrink-0" />
                            <a
                              href={`tel:${contact.telefono}`}
                              className="hover:text-[#dc2626] transition-colors"
                            >
                              {contact.telefono}
                            </a>
                          </div>
                        )}
                        
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


