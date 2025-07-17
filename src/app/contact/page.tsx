"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card, CardContent } from "@/src/components/ui/card";
import FloatingNavigation from "@/src/components/FloatingNavigation";
import CommandPalette from "@/src/components/CommandPalette";
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Linkedin, Users, Code, Zap } from "lucide-react";

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Digital Innovation Hub",
      description: "Global Remote Services"
    },
    {
      icon: Mail,
      title: "You Can Email Here",
      content: "support@templatepro.com",
      description: "24/7 Support Available"
    },
    {
      icon: Phone,
      title: "Call us on",
      content: "+1 (555) 123-4567",
      description: "Business Hours Only"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "9:00 am - 6:00 pm",
      description: "Monday to Friday"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation isScrolled={isScrolled} />
      
      <CommandPalette isCommandOpen={isCommandOpen} setIsCommandOpen={setIsCommandOpen} scrollToSection={scrollToSection} />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  Get in Touch
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  We Would Love to Hear{" "}
                  <span className="text-primary">from You</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Thank you for your interest in our AI templates and digital solutions. We value your 
                  thoughts, questions, and feedback. Please don't hesitate to reach out to us. Our dedicated team 
                  is here to assist you.
                </p>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-20 h-20 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Ready to Transform Your Business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Image */}
              <div className="relative">
                <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-3xl flex items-center justify-center min-h-[500px]">
                  <div className="text-center text-white p-8">
                    <Users className="w-20 h-20 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Partnerships and Collaborations</h3>
                    <p className="text-primary-foreground/90 mb-6">
                      Interested in partnering with us? Let's collaborate to create innovative solutions together.
                    </p>
                    <p className="text-lg font-medium">collaborate@templatepro.com</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter First Name"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter Last Name"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your Email"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter Phone Number"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your Message"
                      className="w-full min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input type="checkbox" id="terms" className="rounded" required />
                    <label htmlFor="terms">
                      I agree with Terms of Use and Privacy Policy
                    </label>
                  </div>

                  <Button type="submit" className="w-full lg:w-auto px-8 py-3">
                    Send your Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Custom Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Interested in custom AI templates and workflow automation? Please visit 
                      our services page for more information and to fill out an application.
                    </p>
                    <Button variant="outline">
                      View Services
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Enterprise Solutions</h3>
                    <p className="text-muted-foreground mb-4">
                      To learn more about our enterprise packages and AI integration options, visit our 
                      enterprise page for detailed information and pricing.
                    </p>
                    <Button variant="outline">
                      Enterprise Page
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-white/10"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using our AI templates and automation workflows to streamline their operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Get Started Today
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    View Templates
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;