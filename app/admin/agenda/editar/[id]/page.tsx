'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default function EditarContactoPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    categoria: 'General',
    descripcion: '',
  });

  useEffect(() => {
    const adminUser = localStorage.getItem('admin_user');
    if (!adminUser) {
      router.push('/admin/login');
      return;
    }
    fetchContact();
  }, [id, router]);

  const fetchContact = async () => {
    try {
      const { data, error } = await supabase
        .from('agenda')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data) {
        setFormData({
          nombre: data.nombre || '',
          telefono: data.telefono || '',
          email: data.email || '',
          direccion: data.direccion || '',
          categoria: data.categoria || 'General',
          descripcion: data.descripcion || '',
        });
      }
    } catch (error: any) {
      console.error('Error fetching contact:', error);
      alert('Error al cargar el contacto');
      router.push('/admin/agenda');
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
        nombre: formData.nombre,
        telefono: formData.telefono || null,
        email: formData.email || null,
        direccion: formData.direccion || null,
        categoria: formData.categoria || 'General',
        descripcion: formData.descripcion || null,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('agenda')
        .update(dataToUpdate)
        .eq('id', id);

      if (error) throw error;

      router.push('/admin/agenda');
    } catch (error: any) {
      console.error('Error updating contact:', error);
      alert('Error al actualizar el contacto: ' + (error.message || 'Error desconocido'));
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            href="/admin/agenda"
            className="p-2 hover:bg-white rounded-lg transition-colors mr-4"
          >
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Editar Contacto</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              placeholder="Nombre del contacto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
                placeholder="0000-0000"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
                placeholder="contacto@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
              Categoría
            </label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
            >
              <option value="General">General</option>
              <option value="Emergencias">Emergencias</option>
              <option value="Hospitales">Hospitales</option>
              <option value="Centros de Salud">Centros de Salud</option>
              <option value="Farmacias">Farmacias</option>
              <option value="Oficinas">Oficinas</option>
              <option value="Otros">Otros</option>
            </select>
          </div>

          <div>
            <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-2">
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              placeholder="Dirección completa"
            />
          </div>

          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows={4}
              value={formData.descripcion}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none resize-none"
              placeholder="Información adicional sobre el contacto"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Link
              href="/admin/agenda"
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


