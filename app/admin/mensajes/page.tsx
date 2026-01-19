'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft, Mail, CheckCircle, X } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function AdminMensajesPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  useEffect(() => {
    const adminUser = localStorage.getItem('admin_user');
    if (!adminUser) {
      router.push('/admin/login');
      return;
    }
    fetchMessages();
  }, [router]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ leido: true })
        .eq('id', id);

      if (error) throw error;
      fetchMessages();
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, leido: true });
      }
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const markAsUnread = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ leido: false })
        .eq('id', id);

      if (error) throw error;
      fetchMessages();
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, leido: false });
      }
    } catch (error) {
      console.error('Error marking as unread:', error);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este mensaje?')) return;

    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchMessages();
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Error al eliminar el mensaje');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fef2f2] flex items-center justify-center">
        <p className="text-gray-600">Cargando...</p>
      </div>
    );
  }

  const unreadCount = messages.filter((m) => !m.leido).length;

  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              href="/admin/dashboard"
              className="p-2 hover:bg-white rounded-lg transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-gray-700" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Mensajes de Contacto</h1>
              {unreadCount > 0 && (
                <p className="text-sm text-[#dc2626] mt-1">
                  {unreadCount} mensaje{unreadCount !== 1 ? 's' : ''} sin leer
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Lista de mensajes */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="max-h-[600px] overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <Mail className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p>No hay mensajes</p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
                        !message.leido ? 'bg-[#fef2f2]' : ''
                      } ${selectedMessage?.id === message.id ? 'bg-[#fee2e2]' : ''}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {message.nombre}
                        </h3>
                        {!message.leido && (
                          <span className="h-2 w-2 bg-[#dc2626] rounded-full flex-shrink-0 mt-1"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate mb-1">
                        {message.asunto}
                      </p>
                      <p className="text-xs text-gray-500">
                        {format(new Date(message.created_at), "d MMM yyyy, HH:mm", { locale: es })}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Detalle del mensaje */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedMessage.asunto}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{selectedMessage.nombre}</span>
                      <span>•</span>
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="text-[#dc2626] hover:underline"
                      >
                        {selectedMessage.email}
                      </a>
                      {selectedMessage.telefono && (
                        <>
                          <span>•</span>
                          <a
                            href={`tel:${selectedMessage.telefono}`}
                            className="text-[#dc2626] hover:underline"
                          >
                            {selectedMessage.telefono}
                          </a>
                        </>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {format(new Date(selectedMessage.created_at), "EEEE, d 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {selectedMessage.leido ? (
                      <button
                        onClick={() => markAsUnread(selectedMessage.id)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Marcar como no leído"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => markAsRead(selectedMessage.id)}
                        className="p-2 text-[#dc2626] hover:bg-[#fef2f2] rounded-lg transition-colors"
                        title="Marcar como leído"
                      >
                        <CheckCircle className="h-5 w-5" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Eliminar mensaje"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {selectedMessage.mensaje}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Mail className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Selecciona un mensaje para ver los detalles</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


