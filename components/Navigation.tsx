'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/blog', label: 'Blog' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '/estatutos', label: 'Estatutos' },
    { href: '/agenda', label: 'Agenda' },
    { href: '/contactanos', label: 'Contactanos' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-10 w-10">
              <Image
                src="/images/logo.jpg"
                alt="FUNSALHE Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-800 group-hover:text-[#dc2626] transition-colors">
              FUNSALHE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-[#dc2626] hover:bg-[#fef2f2] rounded-lg transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-[#fef2f2] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:text-[#dc2626] hover:bg-[#fef2f2] rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


