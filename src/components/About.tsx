import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Building2,
      title: "Excellence",
      description: "We maintain the highest standards in all our services, ensuring quality and precision in every interaction."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We leverage cutting-edge solutions and modern approaches to solve complex financial challenges."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We tailor our services to meet your unique business needs and goals."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We operate with complete transparency and ethical practices, building trust through honest communication."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            About <span className="text-primary">Sanjay & Shreevasuki</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Sanjay & Shreevasuki, we're dedicated to transforming the way businesses and individuals approach financial management, taxation, and compliance.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a commitment to excellence, we provide expert guidance and innovative solutions that empower our clients to navigate complex financial and regulatory landscapes with confidence and ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="font-heading font-semibold text-2xl mb-4">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              To be the trusted partner that businesses and individuals rely on for comprehensive financial solutions, 
              ensuring their growth and success through expert guidance and innovative approaches to financial management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
