'use client'
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              CA Professional Services
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Leading chartered accountant firm providing comprehensive financial solutions
              for businesses across India.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>3/4-1, 3rd floor, Isiri, 6th Cross Amarjyothinagar Nagarabhavi Road, Raghavendra Swamy mutt road, Bangalore</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <span>+91 7022914593</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <span>info@caprofessional.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Tax Planning & Compliance</li>
              <li>GST Services</li>
              <li>Audit & Assurance</li>
              <li>Financial Advisory</li>
              <li>Company Law Compliance</li>
              <li>Accounting & Bookkeeping</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-accent" />
              Business Hours
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>
                <p className="font-medium">Monday - Saturday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <p>
              © 2025 CA Professional Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;