'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FileText, Calendar, Phone, LogOut, Plus, Mail } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    const adminUser = localStorage.getItem('admin_user');
    if (!adminUser) {
      router.push('/admin/login');
      return;
    }
    setUser(JSON.parse(adminUser));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Panel de Administración</h1>
            <p className="text-gray-600 mt-2">Bienvenido, {user.nombre || user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Cerrar Sesión
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/blog"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-[#dc2626]"
          >
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-[#dc2626] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Blog</h2>
            </div>
            <p className="text-gray-600 mb-4">Gestiona las publicaciones del blog</p>
            <div className="flex items-center text-[#dc2626] font-semibold">
              <Plus className="h-5 w-5 mr-2" />
              Administrar
            </div>
          </Link>

          <Link
            href="/admin/eventos"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-[#dc2626]"
          >
            <div className="flex items-center mb-4">
              <Calendar className="h-8 w-8 text-[#dc2626] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Eventos</h2>
            </div>
            <p className="text-gray-600 mb-4">Gestiona los eventos de la fundación</p>
            <div className="flex items-center text-[#dc2626] font-semibold">
              <Plus className="h-5 w-5 mr-2" />
              Administrar
            </div>
          </Link>

          <Link
            href="/admin/agenda"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-[#dc2626]"
          >
            <div className="flex items-center mb-4">
              <Phone className="h-8 w-8 text-[#dc2626] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Agenda</h2>
            </div>
            <p className="text-gray-600 mb-4">Gestiona los contactos de la agenda</p>
            <div className="flex items-center text-[#dc2626] font-semibold">
              <Plus className="h-5 w-5 mr-2" />
              Administrar
            </div>
          </Link>

          <Link
            href="/admin/mensajes"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-[#dc2626]"
          >
            <div className="flex items-center mb-4">
              <Mail className="h-8 w-8 text-[#dc2626] mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Mensajes</h2>
            </div>
            <p className="text-gray-600 mb-4">Gestiona los mensajes de contacto</p>
            <div className="flex items-center text-[#dc2626] font-semibold">
              <Mail className="h-5 w-5 mr-2" />
              Ver Mensajes
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

