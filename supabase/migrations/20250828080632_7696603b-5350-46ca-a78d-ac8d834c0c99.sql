-- Fix security vulnerability: Restrict access to contact submissions
-- Drop the overly permissive policy that allows anyone to view all submissions
DROP POLICY IF EXISTS "Allow owner to view all" ON public.contact_submissions;

-- Create a new policy that only allows authenticated admins to view submissions
-- For now, we'll restrict to authenticated users only since there's no user roles system
CREATE POLICY "Allow authenticated users to view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (true);

-- Keep the anonymous insert policy unchanged so the contact form continues to work
-- This allows anyone to submit contact forms but only authenticated users can view them