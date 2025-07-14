import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, GraduationCap, Award, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution: "KSR College of Engineering, Tiruchengode",
      period: "2022 - Present",
      cgpa: "7.99"
    },
    {
      degree: "12th SKV Higher Secondary School",
      institution: "Tiruchengode",
      period: "2020 - 2022",
      percentage: "71.8%"
    },
    {
      degree: "10th SKV Matric Higher Secondary School",
      institution: "Tiruchengode",
      period: "2019 - 2020",
      percentage: "61.2%"
    }
  ];

  const experiences = [
    {
      title: "Full Stack Web Developer Internship",
      company: "Strackit Private Limited",
      period: "March 2024 - May 2024",
      description: "Managed databases using SQL to store, retrieve, and manipulate data effectively with integrity. Created user login and authentication features to prevent user data and privacy to cyber-exploiters."
    },
    {
      title: "UI & UX Internship",
      company: "CodeOne",
      period: "December 2024 - February 2025",
      description: "Designing a user-friendly dashboard Utilizing thefigma frameworks anddesigning"
    }
  ];

  const achievements = [
    "Vice President in the Math & Aptitude club Executive Member & Event Coordinator",
    "Coordinator in a event called Puthulr a school student's orientation programme",
    "A kabbadi sports player participated in many competitions"
  ];

  const strengths = [
    "Hard Work",
    "Perfection over the work",
    "Adaptability",
    "Self Learner"
  ];

  const interests = [
    "Full Stack Web Development",
    "IOT",
    "CYBERSECURITY"
  ];

  const certifications = [
    "Certified Full Stack Developer – Strackit",
    "Certified UI UX Developer – Coder One"
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Yaswanth V</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A passionate Full Stack Developer pursuing B.Tech in Information Technology, 
              dedicated to creating innovative solutions and continuous learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tiruchengode, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary Section */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Professional Summary</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To obtain a Software Developer position and to work with emerging technologies, 
              develop new software skills, troubleshooting, and problem solving skills, and communication skills, 
              passion for technology to build efficient, scalable, and user-centric applications, 
              to continuously learning and growing in a dynamic development environment.
            </p>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-2 md:mb-0">
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="text-primary font-semibold">
                      {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Strengths */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Strengths</h3>
            </div>
            <div className="space-y-2">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{strength}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Interests */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-tech-badge text-tech-badge-text"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Achievements & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Achievements */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-primary text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-lg mb-6 text-white/90">
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;