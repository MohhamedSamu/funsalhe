-- Script para agregar políticas RLS faltantes para INSERT, UPDATE y DELETE
-- Ejecuta este script en el SQL Editor de Supabase si ya ejecutaste el schema principal

-- Políticas para eventos (INSERT, UPDATE, DELETE)
CREATE POLICY IF NOT EXISTS "Admin insert access for eventos" ON eventos
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Admin update access for eventos" ON eventos
  FOR UPDATE USING (true);

CREATE POLICY IF NOT EXISTS "Admin delete access for eventos" ON eventos
  FOR DELETE USING (true);

-- Políticas para blog_posts (INSERT, UPDATE, DELETE)
CREATE POLICY IF NOT EXISTS "Admin insert access for blog_posts" ON blog_posts
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Admin update access for blog_posts" ON blog_posts
  FOR UPDATE USING (true);

CREATE POLICY IF NOT EXISTS "Admin delete access for blog_posts" ON blog_posts
  FOR DELETE USING (true);

-- Políticas para agenda (INSERT, UPDATE, DELETE)
CREATE POLICY IF NOT EXISTS "Admin insert access for agenda" ON agenda
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Admin update access for agenda" ON agenda
  FOR UPDATE USING (true);

CREATE POLICY IF NOT EXISTS "Admin delete access for agenda" ON agenda
  FOR DELETE USING (true);

