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
# Variables privadas (solo servidor) - REQUERIDAS
SUPABASE_URL=tu_url_de_supabase
SUPABASE_ANON_KEY=tu_clave_anon_de_supabase

# Service Role Key (RECOMENDADO para operaciones administrativas)
# Esta clave bypassa RLS y es necesaria para INSERT, UPDATE, DELETE
# Obtén esta clave en: Settings > API > service_role key (secret)
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key_aqui
```

**Nota de Seguridad**: 
- Las variables sin el prefijo `NEXT_PUBLIC_` son privadas y solo accesibles en el servidor.
- **SUPABASE_SERVICE_ROLE_KEY** es altamente sensible y NUNCA debe exponerse al cliente.
- El código usa automáticamente `SERVICE_ROLE_KEY` si está disponible (bypassa RLS), si no, usa `ANON_KEY`.
- Para operaciones administrativas (CRUD), se recomienda usar `SERVICE_ROLE_KEY` para evitar problemas con RLS.

**Cómo obtener el Service Role Key:**
1. Ve a tu proyecto en Supabase
2. Settings > API
3. Busca "service_role" key (secret) - está en la sección "Project API keys"
4. Copia esa clave y agrégala a `.env.local` como `SUPABASE_SERVICE_ROLE_KEY`

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
3. Configura las variables de entorno en Vercel (Settings > Environment Variables):
   - `SUPABASE_URL` (privada, REQUERIDA)
   - `SUPABASE_ANON_KEY` (privada, REQUERIDA)
   - `SUPABASE_SERVICE_ROLE_KEY` (privada, **MUY RECOMENDADA** para operaciones administrativas)

**⚠️ IMPORTANTE**: 
- **SUPABASE_SERVICE_ROLE_KEY** es esencial para que funcionen las operaciones de INSERT, UPDATE y DELETE en producción
- Sin esta clave, las políticas RLS bloquearán las operaciones administrativas
- Esta clave bypassa RLS y permite todas las operaciones - NUNCA la expongas al cliente

4. Vercel detectará automáticamente que es un proyecto Next.js y lo desplegará
5. **Después del deploy, verifica los logs** para asegurarte de que el service role key se esté cargando correctamente

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
