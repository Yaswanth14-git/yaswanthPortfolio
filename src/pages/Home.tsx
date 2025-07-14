import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Database, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Python", "Java", "MySQL", "VS Code", "GitHub"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Experienced in both frontend and backend development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating user-friendly and visually appealing interfaces"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in MySQL and data management"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern web development with latest technologies"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-hero-text py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-primary-glow">Yaswanth V</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-hero-text/80 max-w-3xl mx-auto">
              Full Stack Web Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg mb-12 text-hero-text/70 max-w-2xl mx-auto">
              Passionate about creating efficient, scalable applications and beautiful user experiences. 
              Currently pursuing B.Tech in Information Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
              <Button variant="hero" size="xl" asChild>
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of technologies I work with to build modern applications
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-tech-badge text-tech-badge-text hover:shadow-card transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized areas where I excel and deliver outstanding results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="p-6 text-center bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's create something amazing together. I'm always excited to take on new challenges.
          </p>
          <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
            <Link to="/contact">
              Start a Conversation <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;