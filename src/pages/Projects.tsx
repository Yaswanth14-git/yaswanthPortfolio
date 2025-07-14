import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, Globe, Shield, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "User Authentication System",
      description: "Mini project that user-authenticated login page with database. Implemented secure login and authentication features to protect user data and privacy from cyber threats.",
      technologies: ["HTML", "CSS", "JavaScript", "SQL", "Database Management"],
      category: "Full Stack",
      icon: Shield,
      features: [
        "Secure user authentication",
        "Database integration",
        "Password encryption",
        "Session management"
      ]
    },
    {
      title: "State India Hackathon Website",
      description: "Project implemented in State India Hackathon for creating a website for local sellers. Focused on providing a platform for small businesses to reach customers online.",
      technologies: ["React", "JavaScript", "CSS", "Web Development"],
      category: "Web Development",
      icon: Globe,
      features: [
        "Local seller marketplace",
        "Responsive design",
        "User-friendly interface",
        "Business listings"
      ]
    },
    {
      title: "React JS Canteen Project",
      description: "Currently working on canteen project using React JS. Building a comprehensive system for canteen management with modern web technologies.",
      technologies: ["React", "JavaScript", "CSS", "Component Architecture"],
      category: "Frontend",
      icon: Code,
      features: [
        "Menu management",
        "Order tracking",
        "Modern UI/UX",
        "Real-time updates"
      ],
      status: "In Progress"
    },
    {
      title: "UI/UX Dashboard Design",
      description: "Designed user-friendly dashboard utilizing Figma frameworks. Focused on creating intuitive and accessible interface designs.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      category: "Design",
      icon: Database,
      features: [
        "Interactive prototypes",
        "User-centered design",
        "Responsive layouts",
        "Design systems"
      ]
    }
  ];

  const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "UI/UX Design"],
    "Backend": ["Python", "Java", "Database Management"],
    "Tools": ["VS Code", "GitHub", "Figma"],
    "Databases": ["MySQL", "SQL"]
  };

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A collection of projects showcasing my skills in full-stack development,
              UI/UX design, and modern web technologies.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      <Badge variant="secondary" className="mt-1 bg-tech-badge text-tech-badge-text">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  {project.status && (
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.status}
                    </Badge>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-tech-badge text-tech-badge-text">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div> */}
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Overview */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Technologies I Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the tools and technologies I use to build amazing projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, techs], index) => (
              <Card
                key={category}
                className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  {category}
                </h3>
                <div className="space-y-2">
                  {techs.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* GitHub Stats */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-primary text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
            <p className="text-xl mb-6 text-white/90">
              Check out my GitHub profile for more projects and contributions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Yaswanth14-git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub Profile
                </Button>
              </a>

              {/* <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ExternalLink className="w-5 h-5 mr-2" />
                Download Resume
              </Button> */}
            </div>
          </Card>
        </section>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects.
            Let's create something amazing together!
          </p>
          <Button variant="hero" size="lg">
            <a href="/contact" className="flex items-center">
              Get In Touch <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;