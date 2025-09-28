'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/hero-office.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Subtle Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Professional chartered accountant office environment"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 tracking-tight">
              Expert <span className="text-accent font-bold">Chartered Accountant</span> Services in India
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Comprehensive financial solutions for your business growth. From tax planning to audit services,
              we ensure compliance and maximize your financial potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300"
              >
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-3 rounded-full mb-2">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-3 rounded-full mb-2">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-3 rounded-full mb-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;