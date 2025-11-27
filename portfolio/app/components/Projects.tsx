"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration",
    longDescription: "Built a complete e-commerce solution with user authentication, product management, shopping cart, and secure payment processing using Stripe.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription: "A modern task management application with real-time collaboration features, drag-and-drop functionality, and team workspaces.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts",
    longDescription: "An elegant weather application with interactive maps, detailed forecasts, and beautiful data visualizations using Chart.js.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media insights",
    longDescription: "A comprehensive analytics platform that aggregates data from multiple social media platforms and provides actionable insights.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Django", "React", "PostgreSQL", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations",
    longDescription: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Frontend",
  },
  {
    id: 6,
    title: "API Gateway",
    description: "Microservices API gateway with rate limiting",
    longDescription: "A robust API gateway solution for managing microservices with authentication, rate limiting, and request routing.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Backend",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and experience
            in various technologies and domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-muted/50 rounded-2xl overflow-hidden border border-border hover:border-primary transition-smooth"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-primary/30" />
                </div>
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  animate={{
                    opacity: hoveredProject === project.id ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-background border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-background border border-border">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-smooth"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-smooth"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 pointer-events-none"
                animate={{
                  opacity: hoveredProject === project.id ? 0.5 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

