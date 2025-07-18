import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";

interface CVDownloadDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVDownloadDialog = ({ isOpen, onClose }: CVDownloadDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Required fields",
        description: "Please enter both your name and email address.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Track the download
      const { error } = await supabase.functions.invoke('track-cv-download', {
        body: { name: name.trim(), email: email.trim() }
      });

      if (error) {
        console.error('Error tracking download:', error);
        throw error;
      }

      // Trigger the actual download
      const link = document.createElement('a');
      link.href = '/Ankita Parit_CV.pdf';
      link.download = 'Ankita_Parit_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download started",
        description: "Thank you! Your CV download has been tracked and the file should start downloading.",
      });

      // Reset form and close dialog
      setName("");
      setEmail("");
      onClose();
    } catch (error: any) {
      console.error('Download error:', error);
      toast({
        title: "Download failed",
        description: "There was an error processing your download. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download CV
          </DialogTitle>
          <DialogDescription>
            Please provide your details to download Ankita's CV. This helps track download analytics.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button 
              variant="outline" 
              onClick={onClose}
              disabled={isLoading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleDownload}
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? "Processing..." : "Download CV"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};