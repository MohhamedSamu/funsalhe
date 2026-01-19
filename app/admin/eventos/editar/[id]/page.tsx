'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default function EditarEventoPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    fecha: '',
    hora: '',
    ubicacion: '',
    imagen_url: '',
  });

  useEffect(() => {
    const adminUser = localStorage.getItem('admin_user');
    if (!adminUser) {
      router.push('/admin/login');
      return;
    }
    fetchEvento();
  }, [id, router]);

  const fetchEvento = async () => {
    try {
      const { data, error } = await supabase
        .from('eventos')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data) {
        // Format date for input (YYYY-MM-DD)
        const fecha = data.fecha ? new Date(data.fecha).toISOString().split('T')[0] : '';
        // Format time for input (HH:MM)
        const hora = data.hora ? data.hora.substring(0, 5) : '';

        setFormData({
          titulo: data.titulo || '',
          descripcion: data.descripcion || '',
          fecha: fecha,
          hora: hora,
          ubicacion: data.ubicacion || '',
          imagen_url: data.imagen_url || '',
        });
      }
    } catch (error: any) {
      console.error('Error fetching evento:', error);
      alert('Error al cargar el evento');
      router.push('/admin/eventos');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Preparar datos: convertir campos opcionales vacíos a null
      const dataToUpdate = {
        titulo: formData.titulo,
        descripcion: formData.descripcion || null,
        fecha: formData.fecha,
        hora: formData.hora || null, // Convertir cadena vacía a null
        ubicacion: formData.ubicacion || null,
        imagen_url: formData.imagen_url || null,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('eventos')
        .update(dataToUpdate)
        .eq('id', id);

      if (error) throw error;

      router.push('/admin/eventos');
    } catch (error: any) {
      console.error('Error updating evento:', error);
      alert('Error al actualizar el evento: ' + (error.message || 'Error desconocido'));
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fef2f2] flex items-center justify-center">
        <p className="text-gray-600">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link
            href="/admin/eventos"
            className="p-2 hover:bg-white rounded-lg transition-colors mr-4"
          >
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Editar Evento</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-2">
              Título *
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              required
              value={formData.titulo}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              placeholder="Título del evento"
            />
          </div>

          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows={5}
              value={formData.descripcion}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none resize-none"
              placeholder="Descripción del evento"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">
                Fecha *
              </label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                required
                value={formData.fecha}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mb-2">
                Hora
              </label>
              <input
                type="time"
                id="hora"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="ubicacion" className="block text-sm font-medium text-gray-700 mb-2">
              Ubicación
            </label>
            <input
              type="text"
              id="ubicacion"
              name="ubicacion"
              value={formData.ubicacion}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              placeholder="Ubicación del evento"
            />
          </div>

          <div>
            <label htmlFor="imagen_url" className="block text-sm font-medium text-gray-700 mb-2">
              URL de Imagen
            </label>
            <input
              type="url"
              id="imagen_url"
              name="imagen_url"
              value={formData.imagen_url}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Link
              href="/admin/eventos"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center px-6 py-3 bg-[#dc2626] text-white rounded-lg hover:bg-[#b91c1c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="h-5 w-5 mr-2" />
              {saving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


