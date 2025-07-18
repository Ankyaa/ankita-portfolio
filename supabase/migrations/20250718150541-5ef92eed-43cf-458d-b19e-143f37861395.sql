-- Create table for tracking CV downloads
CREATE TABLE public.cv_downloads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  downloaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.cv_downloads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for tracking downloads)
CREATE POLICY "Allow anonymous CV download tracking" 
ON public.cv_downloads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow viewing all downloads (for admin)
CREATE POLICY "Allow viewing all CV downloads" 
ON public.cv_downloads 
FOR SELECT 
USING (true);