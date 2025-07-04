
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, subject, message } = formData;
    return firstName && lastName && email && subject && message;
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
        duration: 2000
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Supabase database
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      // Send email notification through edge function
      const { error: emailError } = await supabase.functions.invoke('send-notification', {
        body: formData
      });

      if (emailError) {
        console.warn('Email notification failed:', emailError);
        // Continue with success flow even if email fails
      }

      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Hey, your message has been sent to Ankita successfully! She'll get back to you soon.",
        duration: 5000
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ankita-parit-984130157/', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:ankita.parit6@gmail.com';
  };

  const makeCall = () => {
    window.location.href = 'tel:+918975670296';
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Nature Mountain Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/lovable-uploads/bb1677dc-a840-43aa-8b3a-98106fb3d1ed.png")`
        }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-blue-900/30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Let's discuss how I can help drive your next project to success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Let's work together</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm passionate about delivering exceptional project outcomes and creating 
                data-driven solutions that drive business growth. With my interest in AI and emerging 
                technologies, I bring innovative approaches to traditional project management challenges.
              </p>

              <div className="space-y-4">
                <div 
                  className="flex items-center justify-between space-x-3 p-4 rounded-lg bg-blue-50 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors group"
                  onClick={openEmail}
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">ankita.parit6@gmail.com</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard('ankita.parit6@gmail.com', 'Email');
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copiedField === 'Email' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div 
                  className="flex items-center justify-between space-x-3 p-4 rounded-lg bg-blue-50 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors group"
                  onClick={makeCall}
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">+91-8975670296</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard('+91-8975670296', 'Phone');
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {copiedField === 'Phone' ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Thane, India</span>
                </div>
                <div 
                  className="flex items-center space-x-3 p-4 rounded-lg bg-blue-50 border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors"
                  onClick={openLinkedIn}
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">LinkedIn Profile</span>
                </div>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-lg border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Send me a message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700">First Name <span className="text-red-500">*</span></Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700">Last Name <span className="text-red-500">*</span></Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email <span className="text-red-500">*</span></Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700">Subject <span className="text-red-500">*</span></Label>
                    <Input 
                      id="subject" 
                      placeholder="Project Collaboration Opportunity" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">Message <span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project requirements..." 
                      className="min-h-[120px] bg-white border-gray-300"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
