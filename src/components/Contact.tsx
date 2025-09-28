"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: data.message || "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to take your business to the next level? Contact our expert team today 
            for a free consultation and personalized financial solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 bg-gradient-card shadow-card-hover">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Office Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  3/4-1, 3rd floor, Isiri,<br />
                  6th Cross Amarjyothinagar Nagarabhavi Road,<br />
                  Raghavendra Swamy mutt road,<br />
                  Bangalore, Karnataka
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card shadow-card-hover">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm font-medium">Mobile:</p>
                  <a href="tel:+917022914593" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 7022914593
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium">Mobile:</p>
                  <a href="tel:+918861317885" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8861317885
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card shadow-card-hover">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  Email Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm font-medium">General Inquiries:</p>
                  <a href="mailto:info@caprofessional.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@caprofessional.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium">Business Consultation:</p>
                  <a href="mailto:consult@caprofessional.com" className="text-muted-foreground hover:text-primary transition-colors">
                    consult@caprofessional.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card shadow-card-hover">
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-muted-foreground">
                  <p><span className="font-medium">Monday - Saturday:</span> 10:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-gradient-card shadow-card-hover">
              <CardHeader>
                <CardTitle className="font-heading text-xl flex items-center">
                  <MessageCircle className="h-6 w-6 text-primary mr-2" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="transition-all duration-300 focus:shadow-card-hover"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="transition-all duration-300 focus:shadow-card-hover"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="transition-all duration-300 focus:shadow-card-hover"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter message subject"
                        className="transition-all duration-300 focus:shadow-card-hover"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="transition-all duration-300 focus:shadow-card-hover"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-professional transition-all duration-300 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8">
            <h3 className="font-heading font-semibold text-2xl text-primary-foreground mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              For urgent matters or immediate consultation, call us directly. 
              Our expert team is available during business hours to address your concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917022914593"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now: +91 7022914593
              </a>
              <a 
                href="mailto:consult@caprofessional.com"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;