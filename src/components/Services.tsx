'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  FileText, 
  Shield, 
  TrendingUp, 
  Building, 
  BookOpen,
  Briefcase,
  Users
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Compliance",
      description: "Strategic tax planning to minimize liabilities and ensure full compliance with Income Tax Act and regulations.",
      features: ["Income Tax Return Filing", "Tax Optimization Strategies", "Advance Tax Planning", "Tax Appeals & Litigation"]
    },
    {
      icon: FileText,
      title: "GST Services",
      description: "Complete GST solutions from registration to filing, ensuring seamless compliance with GST regulations.",
      features: ["GST Registration", "Monthly/Quarterly Returns", "GST Audit", "Input Tax Credit Optimization"]
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Independent audit services to ensure accuracy, compliance, and reliability of your financial statements.",
      features: ["Statutory Audit", "Internal Audit", "Stock Audit", "Management Audit"]
    },
    {
      icon: TrendingUp,
      title: "Financial Advisory",
      description: "Expert financial guidance to help your business grow and make informed strategic decisions.",
      features: ["Investment Planning", "Financial Analysis", "Cash Flow Management", "Risk Assessment"]
    },
    {
      icon: Building,
      title: "Company Law Compliance",
      description: "Comprehensive company law services ensuring your business meets all regulatory requirements.",
      features: ["Company Registration", "ROC Compliance", "Board Meetings", "Annual Filing"]
    },
    {
      icon: BookOpen,
      title: "Accounting & Bookkeeping",
      description: "Professional accounting services to maintain accurate financial records and streamline operations.",
      features: ["Books of Accounts", "Financial Statements", "Management Reports", "Payroll Processing"]
    },
    {
      icon: Briefcase,
      title: "Business Setup",
      description: "End-to-end support for starting your business in India with proper legal and financial structure.",
      features: ["Business Structure Advice", "License & Registration", "Bank Account Opening", "Compliance Setup"]
    },
    {
      icon: Users,
      title: "Corporate Advisory",
      description: "Strategic business advisory services to help enterprises optimize operations and achieve growth.",
      features: ["Due Diligence", "Valuation Services", "Merger & Acquisition", "Corporate Restructuring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive chartered accountant services tailored for Indian businesses. 
            From startups to enterprises, we provide expert financial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-primary p-3 rounded-full w-fit mb-4 group-hover:shadow-professional transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;