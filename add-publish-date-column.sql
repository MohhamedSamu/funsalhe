-- Script para agregar la columna publish_date a la tabla blog_posts
-- Ejecuta este script en el SQL Editor de Supabase si ya tienes la tabla creada

ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS publish_date DATE;





