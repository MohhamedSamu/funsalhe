# FUNSALHE - Fundación Salvadoreña de Hemofilia

Sitio web moderno para la Fundación Salvadoreña de Hemofilia, desarrollado con Next.js 16, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con colores rojos pastel y blancos
- **Páginas Principales**:
  - Inicio
  - Blog
  - Eventos
  - Sobre Nosotros
  - Estatutos
  - Agenda (números de teléfono)
  - Contáctanos
- **Sistema de Administración**: Panel de administración oculto (estilo WordPress) con CRUD completo
- **Base de Datos**: Integración con Supabase para Blog, Eventos, Agenda y Mensajes de Contacto
- **Gestión de Contenido**: Crear, editar y eliminar posts, eventos y contactos desde el panel admin
- **Sistema de Mensajes**: Los visitantes pueden enviar mensajes a través del formulario de contacto
- **Responsive**: Diseño completamente adaptable a dispositivos móviles

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Cuenta de Supabase (gratuita)

## 🛠️ Instalación

1. Clona o navega al directorio del proyecto:
```bash
cd funsalhe-web
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
Crea un archivo `.env.local` en la raíz del proyecto con:
```env
# Variables privadas (solo servidor) - Recomendado para producción
SUPABASE_URL=tu_url_de_supabase
SUPABASE_ANON_KEY=tu_clave_anon_de_supabase

# Variables públicas (cliente) - Solo necesarias si usas componentes del cliente
# La anon key es segura cuando Row Level Security (RLS) está configurado correctamente
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon_de_supabase
```

**Nota de Seguridad**: Las variables sin el prefijo `NEXT_PUBLIC_` son privadas y solo accesibles en el servidor. Las variables con `NEXT_PUBLIC_` son públicas y se exponen al navegador. Para máxima seguridad, usa las variables privadas (`SUPABASE_URL` y `SUPABASE_ANON_KEY`) en producción.

## 🗄️ Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Ve al SQL Editor en tu proyecto de Supabase
3. Ejecuta el script `supabase-schema.sql` que se encuentra en la raíz del proyecto
4. Esto creará todas las tablas necesarias y un usuario administrador por defecto:
   - Email: `admin@funsalhe.org`
   - Password: `admin123` (⚠️ **CAMBIA ESTA CONTRASEÑA INMEDIATAMENTE**)

## 🚀 Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Build para Producción

```bash
npm run build
npm start
```

## 🌐 Deploy en Vercel

1. Sube tu código a GitHub, GitLab o Bitbucket
2. Ve a [Vercel](https://vercel.com) y conecta tu repositorio
3. Configura las variables de entorno en Vercel:
   - `SUPABASE_URL` (privada, recomendada)
   - `SUPABASE_ANON_KEY` (privada, recomendada)
   - `NEXT_PUBLIC_SUPABASE_URL` (pública, solo si usas componentes del cliente)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (pública, solo si usas componentes del cliente)

**Recomendación**: Usa las variables privadas (`SUPABASE_URL` y `SUPABASE_ANON_KEY`) para mayor seguridad. El código automáticamente usará las privadas cuando estén disponibles.
4. Vercel detectará automáticamente que es un proyecto Next.js y lo desplegará

O usa la CLI de Vercel:

```bash
npm i -g vercel
vercel
```

## 🔐 Acceso al Panel de Administración

El acceso al panel de administración está oculto (estilo WordPress). Para acceder:

1. Ve a: `/admin/login`
2. Usa las credenciales del usuario administrador creado en Supabase
3. Por defecto:
   - Email: `admin@funsalhe.org`
   - Password: `admin123`

**⚠️ IMPORTANTE**: Cambia la contraseña del usuario administrador después del primer login.

### Funcionalidades del Panel Admin

- **Dashboard**: Vista general con acceso a todas las secciones
- **Blog**: Crear, editar y eliminar publicaciones del blog
- **Eventos**: Gestionar eventos de la fundación
- **Agenda**: Administrar contactos telefónicos
- **Mensajes**: Ver y gestionar mensajes recibidos del formulario de contacto

## 📁 Estructura del Proyecto

```
funsalhe-web/
├── app/
│   ├── admin/              # Panel de administración
│   │   ├── blog/           # CRUD de blog posts
│   │   ├── eventos/        # CRUD de eventos
│   │   ├── agenda/         # CRUD de contactos
│   │   ├── mensajes/       # Gestión de mensajes de contacto
│   │   ├── dashboard/      # Dashboard principal
│   │   └── login/          # Login de administración
│   ├── blog/               # Páginas públicas del blog
│   ├── eventos/            # Página pública de eventos
│   ├── sobre-nosotros/     # Página sobre nosotros
│   ├── estatutos/          # Página de estatutos
│   ├── agenda/             # Página pública de agenda
│   └── contactanos/        # Página de contacto
├── components/             # Componentes reutilizables
│   ├── Navigation.tsx      # Navegación principal
│   └── Footer.tsx          # Footer del sitio
├── lib/                    # Utilidades y configuración
│   └── supabase.ts         # Cliente de Supabase
├── supabase-schema.sql     # Scripts SQL para Supabase
└── vercel.json             # Configuración de Vercel
```

## 🎨 Colores

- **Rojo Accent**: `#dc2626` (rojo principal)
- **Rojo Pastel**: `#ff6b6b` (rojo suave)
- **Rojo Light**: `#fee2e2` (fondo claro)
- **Rojo Lighter**: `#fef2f2` (fondo muy claro)
- **Blanco**: `#ffffff`

## 📝 Notas

- Los scripts SQL están numerados para facilitar su ejecución ordenada
- El sistema de autenticación es simple (sin hash de contraseñas). Para producción, considera implementar autenticación más robusta.
- Las imágenes deben subirse a un servicio de almacenamiento (Supabase Storage, Cloudinary, etc.) y las URLs guardarse en la base de datos.

## 🤝 Contribuir

Este proyecto fue desarrollado para FUNSALHE. Para contribuciones, contacta con el equipo de desarrollo.

## 📄 Licencia

Todos los derechos reservados - Fundación Salvadoreña de Hemofilia
