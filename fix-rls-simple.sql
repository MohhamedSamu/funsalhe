-- Script SIMPLE para arreglar políticas RLS
-- Si el script complejo no funciona, ejecuta este primero para eliminar políticas viejas
-- Luego ejecuta el script simple de creación

-- Eliminar políticas existentes si hay conflictos
DROP POLICY IF EXISTS "Admin insert access for eventos" ON eventos;
DROP POLICY IF EXISTS "Admin update access for eventos" ON eventos;
DROP POLICY IF EXISTS "Admin delete access for eventos" ON eventos;

DROP POLICY IF EXISTS "Admin insert access for blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Admin update access for blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Admin delete access for blog_posts" ON blog_posts;

DROP POLICY IF EXISTS "Admin insert access for agenda" ON agenda;
DROP POLICY IF EXISTS "Admin update access for agenda" ON agenda;
DROP POLICY IF EXISTS "Admin delete access for agenda" ON agenda;

-- Crear políticas para eventos
CREATE POLICY "Admin insert access for eventos" ON eventos
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin update access for eventos" ON eventos
  FOR UPDATE USING (true);

CREATE POLICY "Admin delete access for eventos" ON eventos
  FOR DELETE USING (true);

-- Crear políticas para blog_posts
CREATE POLICY "Admin insert access for blog_posts" ON blog_posts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin update access for blog_posts" ON blog_posts
  FOR UPDATE USING (true);

CREATE POLICY "Admin delete access for blog_posts" ON blog_posts
  FOR DELETE USING (true);

-- Crear políticas para agenda
CREATE POLICY "Admin insert access for agenda" ON agenda
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin update access for agenda" ON agenda
  FOR UPDATE USING (true);

CREATE POLICY "Admin delete access for agenda" ON agenda
  FOR DELETE USING (true);

