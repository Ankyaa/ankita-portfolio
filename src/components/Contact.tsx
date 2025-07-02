
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Blurred Background Effect */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how I can help drive your next project to success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
            <p className="text-muted-foreground mb-8">
              I'm passionate about delivering exceptional project outcomes and creating 
              data-driven solutions that drive business growth. With my interest in AI and emerging 
              technologies, I bring innovative approaches to traditional project management challenges.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5">
                <Mail className="h-5 w-5 text-primary" />
                <span>ankita.parit6@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91-8975670296</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Thane, India</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5">
                <Linkedin className="h-5 w-5 text-primary" />
                <span>LinkedIn Profile</span>
              </div>
            </div>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Collaboration Opportunity" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project requirements..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
