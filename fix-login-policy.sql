-- Script para arreglar la política RLS de usuarios y permitir el login
-- Ejecuta este script en el SQL Editor de Supabase si ya ejecutaste el schema principal

-- Primero eliminar la política vieja si existe
DROP POLICY IF EXISTS "Users can read own data" ON users;

-- Crear nueva política que permita leer usuarios para login
CREATE POLICY "Users can read for login" ON users
  FOR SELECT USING (true);

