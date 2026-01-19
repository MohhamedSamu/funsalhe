-- Script COMPLETO para arreglar políticas RLS
-- Ejecuta este script completo en el SQL Editor de Supabase

-- Primero, eliminar políticas existentes si hay conflictos (opcional, solo si es necesario)
-- Si da error de "policy already exists", ejecuta primero estas líneas:
-- DROP POLICY IF EXISTS "Admin insert access for eventos" ON eventos;
-- DROP POLICY IF EXISTS "Admin update access for eventos" ON eventos;
-- DROP POLICY IF EXISTS "Admin delete access for eventos" ON eventos;
-- DROP POLICY IF EXISTS "Admin insert access for blog_posts" ON blog_posts;
-- DROP POLICY IF EXISTS "Admin update access for blog_posts" ON blog_posts;
-- DROP POLICY IF EXISTS "Admin delete access for blog_posts" ON blog_posts;
-- DROP POLICY IF EXISTS "Admin insert access for agenda" ON agenda;
-- DROP POLICY IF EXISTS "Admin update access for agenda" ON agenda;
-- DROP POLICY IF EXISTS "Admin delete access for agenda" ON agenda;

-- Políticas para eventos (INSERT, UPDATE, DELETE)
-- Si da error de "policy already exists", ejecuta primero la línea DROP correspondiente arriba
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'eventos' 
        AND policyname = 'Admin insert access for eventos'
    ) THEN
        CREATE POLICY "Admin insert access for eventos" ON eventos
          FOR INSERT WITH CHECK (true);
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'eventos' 
        AND policyname = 'Admin update access for eventos'
    ) THEN
        CREATE POLICY "Admin update access for eventos" ON eventos
          FOR UPDATE USING (true);
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'eventos' 
        AND policyname = 'Admin delete access for eventos'
    ) THEN
        CREATE POLICY "Admin delete access for eventos" ON eventos
          FOR DELETE USING (true);
    END IF;
END $$;

-- Políticas para blog_posts (INSERT, UPDATE, DELETE)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'blog_posts' 
        AND policyname = 'Admin insert access for blog_posts'
    ) THEN
        CREATE POLICY "Admin insert access for blog_posts" ON blog_posts
          FOR INSERT WITH CHECK (true);
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'blog_posts' 
        AND policyname = 'Admin update access for blog_posts'
    ) THEN
        CREATE POLICY "Admin update access for blog_posts" ON blog_posts
          FOR UPDATE USING (true);
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'blog_posts' 
        AND policyname = 'Admin delete access for blog_posts'
    ) THEN
        CREATE POLICY "Admin delete access for blog_posts" ON blog_posts
          FOR DELETE USING (true);
    END IF;
END $$;

-- Políticas para agenda (INSERT, UPDATE, DELETE)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'agenda' 
        AND policyname = 'Admin insert access for agenda'
    ) THEN
        CREATE POLICY "Admin insert access for agenda" ON agenda
          FOR INSERT WITH CHECK (true);
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'agenda' 
        AND policyname = 'Admin update access for agenda'
    ) THEN
        CREATE POLICY "Admin update access for agenda" ON agenda
          FOR UPDATE USING (true);
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'agenda' 
        AND policyname = 'Admin delete access for agenda'
    ) THEN
        CREATE POLICY "Admin delete access for agenda" ON agenda
          FOR DELETE USING (true);
    END IF;
END $$;

