-- Scripts SQL para Supabase
-- Ejecuta estos scripts en el SQL Editor de Supabase

-- Tabla de usuarios (sistema simple de autenticación)
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  rol VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  author_id UUID REFERENCES users(id),
  published BOOLEAN DEFAULT true,
  publish_date DATE, -- Fecha de publicación programada (para posts no publicados)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de eventos
CREATE TABLE IF NOT EXISTS eventos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  fecha DATE NOT NULL,
  hora TIME,
  ubicacion VARCHAR(255),
  imagen_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de agenda (contactos telefónicos)
CREATE TABLE IF NOT EXISTS agenda (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  telefono VARCHAR(50),
  email VARCHAR(255),
  direccion TEXT,
  categoria VARCHAR(100) DEFAULT 'General',
  descripcion TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de mensajes de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50),
  asunto VARCHAR(255) NOT NULL,
  mensaje TEXT NOT NULL,
  leido BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_eventos_fecha ON eventos(fecha);
CREATE INDEX IF NOT EXISTS idx_agenda_categoria ON agenda(categoria);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_leido ON contact_messages(leido);

-- Habilitar Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE eventos ENABLE ROW LEVEL SECURITY;
ALTER TABLE agenda ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para lectura pública
CREATE POLICY "Public read access for blog_posts" ON blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Admin insert access for blog_posts" ON blog_posts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin update access for blog_posts" ON blog_posts
  FOR UPDATE USING (true);

CREATE POLICY "Admin delete access for blog_posts" ON blog_posts
  FOR DELETE USING (true);

CREATE POLICY "Public read access for eventos" ON eventos
  FOR SELECT USING (true);

CREATE POLICY "Admin insert access for eventos" ON eventos
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin update access for eventos" ON eventos
  FOR UPDATE USING (true);

CREATE POLICY "Admin delete access for eventos" ON eventos
  FOR DELETE USING (true);

CREATE POLICY "Public read access for agenda" ON agenda
  FOR SELECT USING (true);

CREATE POLICY "Admin insert access for agenda" ON agenda
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin update access for agenda" ON agenda
  FOR UPDATE USING (true);

CREATE POLICY "Admin delete access for agenda" ON agenda
  FOR DELETE USING (true);

-- Políticas RLS para usuarios (permitir lectura para login)
-- NOTA: Esta política permite leer todos los usuarios para el sistema de login simple
-- En producción, considera implementar autenticación más robusta
CREATE POLICY "Users can read for login" ON users
  FOR SELECT USING (true);

-- Políticas RLS para mensajes de contacto
CREATE POLICY "Public insert access for contact_messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin read access for contact_messages" ON contact_messages
  FOR SELECT USING (true);

-- Insertar usuario administrador por defecto
-- NOTA: Cambia la contraseña después del primer login
-- Password: admin123 (debes cambiarlo en producción)
INSERT INTO users (nombre, email, password, rol)
VALUES (
  'Administrador',
  'admin@funsalhe.org',
  'admin123', -- Cambiar en producción
  'admin'
) ON CONFLICT (email) DO NOTHING;

-- Datos de ejemplo para blog
INSERT INTO blog_posts (title, content, excerpt, published)
VALUES (
  'Bienvenidos a FUNSALHE',
  '<p>Bienvenidos a la página oficial de la Fundación Salvadoreña de Hemofilia. Estamos comprometidos con mejorar la calidad de vida de las personas con trastornos de coagulación.</p>',
  'Bienvenidos a la página oficial de FUNSALHE',
  true
) ON CONFLICT DO NOTHING;

-- Datos de ejemplo para eventos
INSERT INTO eventos (titulo, descripcion, fecha, ubicacion)
VALUES (
  'Censo Nacional de Hemofilia',
  'Evento para realizar el censo nacional de personas con trastornos de coagulación',
  CURRENT_DATE + INTERVAL '30 days',
  'Zona Central, El Salvador'
) ON CONFLICT DO NOTHING;

-- Datos de ejemplo para agenda
INSERT INTO agenda (nombre, telefono, email, categoria, descripcion)
VALUES (
  'FUNSALHE - Oficina Principal',
  '0000-0000',
  'info@funsalhe.org',
  'General',
  'Oficina principal de la fundación'
) ON CONFLICT DO NOTHING;

