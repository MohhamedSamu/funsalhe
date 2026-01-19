'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default function EditarBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    image_url: '',
    published: true,
    publish_date: '',
  });

  useEffect(() => {
    const adminUser = localStorage.getItem('admin_user');
    if (!adminUser) {
      router.push('/admin/login');
      return;
    }
    fetchPost();
  }, [id, router]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data) {
        // Formatear fecha para input (YYYY-MM-DD)
        const publishDate = data.publish_date ? new Date(data.publish_date).toISOString().split('T')[0] : '';
        
        setFormData({
          title: data.title || '',
          content: data.content || '',
          excerpt: data.excerpt || '',
          image_url: data.image_url || '',
          published: data.published ?? true,
          publish_date: publishDate,
        });
      }
    } catch (error: any) {
      console.error('Error fetching post:', error);
      alert('Error al cargar la publicación');
      router.push('/admin/blog');
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
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt || null,
        image_url: formData.image_url || null,
        published: formData.published,
        publish_date: formData.published ? null : (formData.publish_date || null),
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('blog_posts')
        .update(dataToUpdate)
        .eq('id', id);

      if (error) throw error;

      router.push('/admin/blog');
    } catch (error: any) {
      console.error('Error updating post:', error);
      alert('Error al actualizar la publicación: ' + (error.message || 'Error desconocido'));
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, published: e.target.checked }));
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
            href="/admin/blog"
            className="p-2 hover:bg-white rounded-lg transition-colors mr-4"
          >
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Editar Publicación</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Título *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              placeholder="Título de la publicación"
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
              Resumen
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows={3}
              value={formData.excerpt}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none resize-none"
              placeholder="Breve resumen de la publicación"
            />
          </div>

          <div>
            <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-2">
              URL de Imagen
            </label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Contenido *
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={15}
              value={formData.content}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none resize-none font-mono text-sm"
              placeholder="Escribe el contenido aquí. Puedes usar HTML básico."
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-[#dc2626] focus:ring-[#dc2626] border-gray-300 rounded"
            />
            <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
              Publicado
            </label>
          </div>

          {!formData.published && (
            <div>
              <label htmlFor="publish_date" className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de publicación programada *
              </label>
              <input
                type="date"
                id="publish_date"
                name="publish_date"
                required={!formData.published}
                value={formData.publish_date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#dc2626] focus:border-transparent outline-none"
              />
              <p className="mt-2 text-sm text-gray-500">
                El post se publicará automáticamente en esta fecha
              </p>
            </div>
          )}

          <div className="flex justify-end space-x-4 pt-4">
            <Link
              href="/admin/blog"
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


