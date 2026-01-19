-- Script DEFINITIVO para arreglar políticas RLS
-- Ejecuta este script completo en el SQL Editor de Supabase

-- ELIMINAR políticas existentes primero (si hay conflictos)
DROP POLICY IF EXISTS "Admin insert access for eventos" ON eventos;
DROP POLICY IF EXISTS "Admin update access for eventos" ON eventos;
DROP POLICY IF EXISTS "Admin delete access for eventos" ON eventos;

DROP POLICY IF EXISTS "Admin insert access for blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Admin update access for blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Admin delete access for blog_posts" ON blog_posts;

DROP POLICY IF EXISTS "Admin insert access for agenda" ON agenda;
DROP POLICY IF EXISTS "Admin update access for agenda" ON agenda;
DROP POLICY IF EXISTS "Admin delete access for agenda" ON agenda;

-- CREAR políticas para eventos (INSERT, UPDATE, DELETE)
CREATE POLICY "Admin insert access for eventos" ON eventos
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin update access for eventos" ON eventos
  FOR UPDATE USING (true);

CREATE POLICY "Admin delete access for eventos" ON eventos
  FOR DELETE USING (true);

-- CREAR políticas para blog_posts (INSERT, UPDATE, DELETE)
CREATE POLICY "Admin insert access for blog_posts" ON blog_posts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin update access for blog_posts" ON blog_posts
  FOR UPDATE USING (true);

CREATE POLICY "Admin delete access for blog_posts" ON blog_posts
  FOR DELETE USING (true);

-- CREAR políticas para agenda (INSERT, UPDATE, DELETE)
CREATE POLICY "Admin insert access for agenda" ON agenda
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin update access for agenda" ON agenda
  FOR UPDATE USING (true);

CREATE POLICY "Admin delete access for agenda" ON agenda
  FOR DELETE USING (true);

