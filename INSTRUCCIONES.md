# Instrucciones de Configuración - FUNSALHE

## 📋 Pasos para Configurar el Proyecto

### 1. Configurar Supabase

1. Ve a [https://supabase.com](https://supabase.com) y crea una cuenta (es gratis)
2. Crea un nuevo proyecto  GqMuWyCyUBveIyy6
3. Una vez creado, ve a **Settings > API**
4. Copia los siguientes valores:
   - **Project URL** → Esta será tu `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → Esta será tu `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2. Configurar la Base de Datos

1. En tu proyecto de Supabase, ve a **SQL Editor**
2. Abre el archivo `supabase-schema.sql` que está en la raíz de este proyecto
3. Copia y pega todo el contenido en el SQL Editor
4. Haz clic en **Run** para ejecutar el script
5. Esto creará:
   - Tabla de usuarios
   - Tabla de blog posts
   - Tabla de eventos
   - Tabla de agenda
   - Un usuario administrador por defecto

### 3. Configurar Variables de Entorno

1. En la raíz del proyecto, crea un archivo llamado `.env.local`
2. Agrega las siguientes líneas (reemplaza con tus valores reales):

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon_aqui
```

### 4. Instalar Dependencias y Ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔐 Acceso al Panel de Administración

1. Ve a: `http://localhost:3000/admin/login`
2. Usa las credenciales por defecto:
   - **Email**: `admin@funsalhe.org`
   - **Password**: `admin123`

**⚠️ IMPORTANTE**: Cambia esta contraseña inmediatamente después del primer login.

### Cómo Cambiar la Contraseña del Administrador

1. Ve a Supabase > **Table Editor** > tabla `users`
2. Encuentra el usuario `admin@funsalhe.org`
3. Edita el campo `password` y cambia el valor
4. Guarda los cambios

## 📝 Agregar Contenido

### Agregar un Post al Blog

1. Inicia sesión en `/admin/login`
2. Ve a **Administrar Blog**
3. Haz clic en **Nueva Publicación**
4. Completa el formulario y guarda

### Agregar un Evento

1. Inicia sesión en `/admin/login`
2. Ve a **Administrar Eventos**
3. Haz clic en **Nuevo Evento**
4. Completa el formulario y guarda

### Agregar un Contacto a la Agenda

1. Inicia sesión en `/admin/login`
2. Ve a **Administrar Agenda**
3. Haz clic en **Nuevo Contacto**
4. Completa el formulario y guarda

## 🚀 Deploy en Vercel

### Opción 1: Desde la Web de Vercel

1. Sube tu código a GitHub, GitLab o Bitbucket
2. Ve a [https://vercel.com](https://vercel.com)
3. Haz clic en **New Project**
4. Conecta tu repositorio
5. En **Environment Variables**, agrega:
   - `NEXT_PUBLIC_SUPABASE_URL` = tu URL de Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = tu clave anon de Supabase
6. Haz clic en **Deploy**

### Opción 2: Desde la Terminal

```bash
npm i -g vercel
vercel
```

Sigue las instrucciones y agrega las variables de entorno cuando se te solicite.

## 🎨 Personalización

### Cambiar Colores

Los colores están definidos en `app/globals.css`. Puedes modificar:
- `--red-pastel`: Rojo pastel principal
- `--red-accent`: Rojo accent (botones, enlaces)
- `--red-light`: Fondo claro
- `--red-lighter`: Fondo muy claro

### Agregar Más Páginas

1. Crea un nuevo archivo en `app/[nombre-pagina]/page.tsx`
2. Agrega el enlace en `components/Navigation.tsx`

## 📞 Soporte

Si tienes problemas:
1. Verifica que las variables de entorno estén correctamente configuradas
2. Verifica que el script SQL se haya ejecutado correctamente en Supabase
3. Revisa la consola del navegador para errores
4. Revisa los logs de Vercel/Supabase si estás en producción

## 🔒 Seguridad

- **Nunca** subas el archivo `.env.local` a Git
- Cambia la contraseña del administrador inmediatamente
- En producción, considera implementar autenticación más robusta (Supabase Auth)
- Las claves de Supabase son públicas (anon key), pero aún así no las compartas públicamente


