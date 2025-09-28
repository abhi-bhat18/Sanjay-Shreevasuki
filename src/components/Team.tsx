import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Award, BookOpen } from "lucide-react";
import Image from "next/image";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "CA Sanjay Ganapati Hegde",
      designation: "Founding Partner & Senior CA",
      experience: "15+ Years",
      specialization: "Tax Planning & Corporate Advisory",
      image: teamMember1,
      qualifications: ["CA", "CPA", "MBA Finance"],
      email: "rajesh@caprofessional.com",
      phone: "+91 98765 43210",
      description: "Expert in tax optimization strategies and corporate restructuring with extensive experience in handling complex financial matters for large enterprises."
    },
    {
      name: "CA Shree Vasuki ",
      designation: "Founding Partner & Audit Head",
      experience: "12+ Years",
      specialization: "Audit & Assurance Services",
      image: teamMember2,
      qualifications: ["CA", "DISA", "LLB"],
      email: "priya@caprofessional.com",
      phone: "+91 98765 43211",
      description: "Specialized in statutory audits and compliance management with a proven track record in risk assessment and internal control systems."
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team of qualified chartered accountants brings decades of combined experience
            in providing comprehensive financial solutions to businesses across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full border-4 border-primary/20 shadow-card-hover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-primary p-2 rounded-full">
                      <Award className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.designation}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex gap-2">
                      {member.qualifications.map((qual, qualIndex) => (
                        <span
                          key={qualIndex}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-3 text-primary" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-3 text-primary" />
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-3xl mx-auto shadow-card-hover">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
              CA Professional Services
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Established with a vision to provide comprehensive chartered accountant services,
              we have grown to become a trusted partner for businesses across various industries.
              Our commitment to excellence and client satisfaction drives everything we do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;