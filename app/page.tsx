"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Calendar,
  MessageCircle,
  Linkedin,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Wrench,
  Users,
  Lightbulb,
  MessageSquare,
  Briefcase,
  BarChart3,
  Award,
  BookOpen,
  Waves,
  CalendarIcon,
} from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollAnimation } from "@/components/scroll-animation"
import { StaggeredAnimation } from "@/components/staggered-animation"

export default function Portfolio() {
  const skills = [
    "Google Ads",
    "Facebook Ads",
    "Instagram Marketing",
    "LinkedIn Ads",
    "Google Analytics",
    "SEO/SEM",
    "Content Marketing",
    "Email Marketing",
    "Marketing Automation",
    "CRM Systems",
    "A/B Testing",
    "Conversion Optimization",
    "Social Media Management",
    "Influencer Marketing",
    "Affiliate Marketing",
    "Video Marketing",
    "Podcast Marketing",
    "Webinar Marketing",
  ]

  const competencies = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Strategic Thinking",
      description: "Developing comprehensive marketing strategies aligned with business objectives.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Leadership",
      description: "Leading cross-functional teams to execute successful marketing campaigns.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Creative Problem Solving",
      description: "Finding innovative solutions to complex marketing challenges.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Communication",
      description: "Clear and effective communication with stakeholders at all levels.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Project Management",
      description: "Managing multiple campaigns and deadlines with precision and efficiency.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Analysis",
      description: "Interpreting complex data to drive informed marketing decisions.",
    },
  ]

  const whyChooseMe = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast & Efficient",
      description: "Rapid campaign deployment and optimization for maximum impact and quick results.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "Data-backed strategies that focus on ROI, conversions, and measurable business growth.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Rigorous testing and continuous monitoring ensure campaign excellence and brand safety.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Focused",
      description: "Scalable solutions designed to evolve with your business and market opportunities.",
    },
  ]

  const certifications = [
    {
      title: "Digital Marketing",
      issuer: "Google",
      year: "2024",
      logo: "/images/google-logo.png",
      description: "Comprehensive certification covering digital marketing fundamentals and advanced strategies.",
      skills: ["SEO", "PPC", "Content Marketing", "Social Media Marketing"],
    },
    {
      title: "Virtual Assistant",
      issuer: "ALX",
      year: "2024",
      logo: "/images/alx-logo.png",
      description: "Training in virtual assistance, including administrative tasks, scheduling, and communication.",
      skills: ["Organization", "Communication", "Time Management", "Administrative Support"],
    },
    {
      title: "Software Engineering Degree",
      issuer: "Adama Science and Technology University",
      year: "202X",
      logo: "/images/adama-university.png",
      description:
        "Bachelor's degree in Software Engineering, providing a strong foundation in programming and system design.",
      skills: ["Software Development", "Algorithms", "Data Structures", "System Design"],
    },
    {
      title: "Email Marketing",
      issuer: "Alison",
      year: "2023",
      logo: "/images/alison-logo.png",
      description:
        "Certification focused on building effective email marketing campaigns, list management, and analytics.",
      skills: ["Email Campaigns", "Lead Nurturing", "CRM", "Analytics"],
    },
  ]

  const hobbies = [
    {
      icon: <CalendarIcon className="h-6 w-6" />,
      title: "Attending Events",
      description: "Engaging with industry leaders and learning about new trends at various forums and conferences.",
      image: "/images/events.jpg",
    },
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Swimming",
      description: "A refreshing way to stay active and clear my mind, enjoying the tranquility of the water.",
      image: "/images/swimming.jpg",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Reading Books",
      description:
        "Exploring new ideas and expanding my knowledge through a diverse range of literature and non-fiction.",
      image: "/images/book.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative">
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 px-4 relative">
          <div className="container mx-auto text-center">
            {/* Profile Image */}
            <ScrollAnimation direction="fade" delay={200}>
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 animate-float">
                    <img
                      src="/images/natnael-profile.jpg"
                      alt="Natnael Ayele - Digital Marketing Expert"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Animated ring around image */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-pulse-glow"></div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={400}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Natnael Ayele
              </h1>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={600}>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                I'm a passionate digital marketing expert dedicated to transforming brands through data-driven
                strategies, creative campaigns, and cutting-edge digital solutions that deliver measurable results.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Section Divider */}
        <ScrollAnimation direction="fade">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto max-w-4xl"></div>
        </ScrollAnimation>

        {/* Why Choose Me */}
        <section id="about" className="py-16 px-4 bg-slate-800/30 backdrop-blur-sm">
          <div className="container mx-auto">
            <ScrollAnimation direction="up">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Me</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Delivering exceptional digital marketing solutions with proven methodologies and innovative
                  approaches.
                </p>
              </div>
            </ScrollAnimation>

            <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-0" staggerDelay={150}>
              {whyChooseMe.map((item, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 text-center hover:scale-105"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 text-primary">{item.icon}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredAnimation>
          </div>
        </section>

        {/* Section Divider */}
        <ScrollAnimation direction="fade">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto max-w-4xl"></div>
        </ScrollAnimation>

        {/* Technical Expertise */}
        <section id="skills" className="py-16 px-4">
          <div className="container mx-auto">
            <ScrollAnimation direction="up">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Technical Expertise</h2>
                <p className="text-xl text-muted-foreground">
                  Mastery of cutting-edge digital marketing tools and platforms to drive your success.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={200}>
              <div className="flex flex-wrap gap-3 justify-center mb-16">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:scale-105 transition-transform duration-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </ScrollAnimation>

            {/* Core Competencies */}
            <ScrollAnimation direction="up" delay={400}>
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Core Competencies</h3>
                <p className="text-lg text-muted-foreground">
                  Essential soft skills that enable effective collaboration and project success.
                </p>
              </div>
            </ScrollAnimation>

            <StaggeredAnimation className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={120}>
              {competencies.map((competency, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{competency.icon}</div>
                      <CardTitle className="text-lg">{competency.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{competency.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredAnimation>
          </div>
        </section>

        {/* Section Divider */}
        <ScrollAnimation direction="fade">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto max-w-4xl"></div>
        </ScrollAnimation>

        {/* Professional Certifications */}
        <section className="py-16 px-4 bg-slate-800/30 backdrop-blur-sm">
          <div className="container mx-auto">
            <ScrollAnimation direction="up">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Certifications</h2>
                <p className="text-xl text-muted-foreground">
                  Validated expertise through industry-recognized certifications and continuous learning.
                </p>
              </div>
            </ScrollAnimation>

            <StaggeredAnimation className="grid md:grid-cols-2 gap-6" staggerDelay={200}>
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex-shrink-0">
                          <img
                            src={cert.logo || "/placeholder.svg"}
                            alt={`${cert.issuer} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                          <CardDescription className="text-lg font-medium">{cert.issuer}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{cert.year}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Associated Skills:</div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge variant="default" className="text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        Credential verified
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredAnimation>
          </div>
        </section>

        {/* Section Divider */}
        <ScrollAnimation direction="fade">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto max-w-4xl"></div>
        </ScrollAnimation>

        {/* Hobbies & Interests */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <ScrollAnimation direction="up">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">My Hobbies & Interests</h2>
                <p className="text-xl text-muted-foreground">
                  Beyond work, these activities fuel my creativity and well-being.
                </p>
              </div>
            </ScrollAnimation>

            <StaggeredAnimation className="grid md:grid-cols-3 gap-6" staggerDelay={150}>
              {hobbies.map((hobby, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 text-center overflow-hidden hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hobby.image || "/placeholder.svg"}
                      alt={hobby.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-primary">
                      {hobby.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{hobby.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{hobby.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredAnimation>
          </div>
        </section>

        {/* Section Divider */}
        <ScrollAnimation direction="fade">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto max-w-4xl"></div>
        </ScrollAnimation>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-slate-800/30 backdrop-blur-sm">
          <div className="container mx-auto">
            <ScrollAnimation direction="up">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-xl text-muted-foreground">
                  Ready to elevate your digital presence? Let's connect and discuss how I can help your business thrive.
                </p>
              </div>
            </ScrollAnimation>

            <StaggeredAnimation className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={150}>
              {[
                {
                  id: 1,
                  content: (
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 text-center hover:scale-105">
                      <CardHeader>
                        <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                        <CardTitle>Contact Email</CardTitle>
                        <CardDescription>Reach out directly via email for inquiries.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="text-primary">natnaelayele80@gmail.com</span>
                      </CardContent>
                    </Card>
                  ),
                },
                {
                  id: 2,
                  content: (
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 text-center hover:scale-105">
                      <CardHeader>
                        <Calendar className="h-8 w-8 mx-auto mb-4 text-primary" />
                        <CardTitle>Schedule Meeting</CardTitle>
                        <CardDescription>Book a free consultation to discuss your needs.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link
                          href="https://calendar.google.com/calendar/appointments/AcZssZ2FER0ii_Sf5PvtZhQs5R7Ej5R7Ej5R7Ej5R7E"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25">
                            Schedule Free Consultation
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ),
                },
                {
                  id: 3,
                  content: (
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 text-center hover:scale-105">
                      <CardHeader>
                        <MessageCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
                        <CardTitle>Connect & Chat</CardTitle>
                        <CardDescription>Multiple ways to reach me instantly.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-sm">
                          <strong>Telegram:</strong> @natnael80
                        </div>
                        <div className="text-sm">
                          <strong>Signal:</strong> natnael80.40
                        </div>
                        <Link
                          href="https://www.linkedin.com/in/natnael-ayele-b9652621a/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          <Linkedin className="h-4 w-4 mr-1" />
                          LinkedIn: Natnael Ayele
                        </Link>
                      </CardContent>
                    </Card>
                  ),
                },
              ].map((item) => item.content)}
            </StaggeredAnimation>
          </div>
        </section>

        {/* Footer */}
        <ScrollAnimation direction="fade">
          <footer className="py-8 px-4 border-t">
            <div className="container mx-auto text-center">
              <p className="text-muted-foreground mb-2">© 2025 Digital Marketing Portfolio. All rights reserved.</p>
              <p className="text-sm text-muted-foreground">Made with passion by Natnael Ayele</p>
            </div>
          </footer>
        </ScrollAnimation>
      </div>
    </div>
  )
}
