import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar si la URL contiene letras mayúsculas
  const hasUpperCase = /[A-Z]/.test(pathname);

  if (hasUpperCase) {
    // Convertir la URL a minúsculas
    const lowerPathname = pathname.toLowerCase();
    
    // Crear una nueva URL con la ruta en minúsculas
    const url = request.nextUrl.clone();
    url.pathname = lowerPathname;
    
    // Redirigir a la versión en minúsculas
    return NextResponse.redirect(url, 301); // 301 = redirección permanente
  }

  // Agregar headers de cache-control para páginas públicas dinámicas
  // Esto evita que el navegador cachee las respuestas
  const response = NextResponse.next();
  
  // Rutas públicas que deben evitar cache (blog, eventos, agenda)
  const publicDynamicRoutes = ['/blog', '/eventos', '/agenda'];
  const isPublicDynamicRoute = publicDynamicRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isPublicDynamicRoute) {
    // Headers para evitar cache del navegador y CDN
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  return response;
}

// Configurar qué rutas deben pasar por el middleware
export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas excepto:
     * - api (API routes)
     * - _next/static (archivos estáticos)
     * - _next/image (optimización de imágenes)
     * - favicon.ico (favicon)
     * - archivos con extensiones (imágenes, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|images).*)',
  ],
};

