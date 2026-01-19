import Link from 'next/link';
import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-[#ff6b6b]" fill="currentColor" />
              <span className="text-xl font-bold">FUNSALHE</span>
            </div>
            <p className="text-gray-400 text-sm">
              Fundación Salvadoreña de Hemofilia - Juntos por una mejor condición de vida
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-400 hover:text-[#ff6b6b] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#ff6b6b] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-400 hover:text-[#ff6b6b] transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/contactanos" className="text-gray-400 hover:text-[#ff6b6b] transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/FunsalheElSalvador"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#ff6b6b] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/funsalhe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#ff6b6b] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/funsalhe/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#ff6b6b] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Fundación Salvadoreña de Hemofilia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


