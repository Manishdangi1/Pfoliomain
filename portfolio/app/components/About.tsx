"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Database, Smartphone, Globe } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Code, level: 90 },
  { name: "UI/UX Design", icon: Palette, level: 85 },
  { name: "Backend Development", icon: Database, level: 80 },
  { name: "Mobile Development", icon: Smartphone, level: 75 },
  { name: "Performance Optimization", icon: Zap, level: 88 },
  { name: "Web Technologies", icon: Globe, level: 92 },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Tailwind CSS",
  "Framer Motion", "PostgreSQL", "MongoDB", "Git", "Docker", "AWS"
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating beautiful,
              functional, and user-centered digital experiences. With expertise in modern
              web technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              My journey in development started with curiosity and has evolved into a career
              where I continuously learn and adapt to new technologies. I believe in writing
              maintainable code and building applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new frameworks, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                variants={itemVariants}
                className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary hover:shadow-glow transition-smooth cursor-default"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

