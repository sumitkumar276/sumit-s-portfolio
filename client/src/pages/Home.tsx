import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Mail, Download, Code2, Database, Zap, GitBranch } from "lucide-react";
import { useState } from "react";

/**
 * Marcus Chen Portfolio - Cyberpunk Minimalist Design
 * 
 * Design Philosophy:
 * - Pure black background (#000000) with neon green (#00FF41) accents
 * - Monospace typography (IBM Plex Mono) for headings—technical aesthetic
 * - Asymmetric layout with geometric elements
 * - High contrast and minimal whitespace for premium feel
 * - Neon glow effects on interactive elements
 */

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const projects = [
    {
      title: "DevFlow",
      description: "Real-time collaborative code editor with WebSocket integration",
      tech: ["React", "Node.js", "WebSocket", "MongoDB"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      title: "DataViz Pro",
      description: "Interactive data visualization dashboard with D3.js",
      tech: ["React", "D3.js", "TypeScript", "Tailwind"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      title: "API Gateway",
      description: "Microservices API gateway with rate limiting and auth",
      tech: ["Node.js", "Express", "Redis", "PostgreSQL"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false,
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile app with React Native",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false,
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"], proficiency: 95 },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"], proficiency: 90 },
    { category: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "AWS"], proficiency: 80 },
    { category: "Tools", items: ["Git", "Webpack", "GraphQL", "REST APIs"], proficiency: 85 },
  ];

  const blogPosts = [
    {
      title: "Building Scalable APIs with Node.js",
      date: "Dec 15, 2024",
      excerpt: "Deep dive into architectural patterns for building production-ready APIs",
      tags: ["Backend", "Node.js", "Architecture"],
    },
    {
      title: "React Performance Optimization Techniques",
      date: "Dec 8, 2024",
      excerpt: "Practical strategies to optimize React applications for production",
      tags: ["React", "Performance", "Frontend"],
    },
    {
      title: "Microservices: From Monolith to Distributed",
      date: "Nov 30, 2024",
      excerpt: "A comprehensive guide to transitioning from monolithic to microservices architecture",
      tags: ["Architecture", "DevOps", "Scaling"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with geometric pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/hero-bg-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-mono font-bold mb-2 neon-glow">
                  Marcus Chen
                </h1>
                <div className="h-1 w-32 bg-primary mb-6" />
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  Full-Stack Developer & Open-Source Enthusiast
                </p>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                I build high-performance web applications with modern technologies. Passionate about clean code,
                scalable architecture, and open-source contribution.
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 border border-primary/30 bg-black/50">
                  <Code2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-mono">React</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 border border-primary/30 bg-black/50">
                  <Database className="w-5 h-5 text-primary" />
                  <span className="text-sm font-mono">Node.js</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 border border-primary/30 bg-black/50">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-mono">TypeScript</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 border border-primary/30 bg-black/50">
                  <GitBranch className="w-5 h-5 text-primary" />
                  <span className="text-sm font-mono">DevOps</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-neon gap-2">
                    <Github className="w-5 h-5" />
                    GitHub
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Decorative element */}
            <div className="hidden md:block relative h-96">
              <div className="absolute inset-0 border border-primary/20 rounded-lg" />
              <div className="absolute top-8 right-8 w-24 h-24 border-2 border-primary/40" />
              <div className="absolute bottom-12 left-12 w-32 h-32 border border-primary/30" />
              <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-2">Featured Projects</h2>
            <div className="h-1 w-48 bg-primary" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className={`bg-slate-900/50 border-slate-700 hover:border-primary/50 transition-all duration-300 ${
                  project.featured ? "md:col-span-1" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-primary font-mono">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-primary/10 border border-primary/30 text-primary font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a href={project.liveUrl} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-mono">Live Demo</span>
                    </a>
                    <a href={project.repoUrl} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-mono">Repository</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-2">Technical Skills</h2>
            <div className="h-1 w-48 bg-primary" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-mono font-semibold text-primary">{skill.category}</h3>
                  <span className="text-sm font-mono text-gray-400">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-sm h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-slate-800 text-gray-300 font-mono border border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-2">Latest Articles</h2>
            <div className="h-1 w-48 bg-primary" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <Card key={idx} className="bg-slate-900/50 border-slate-700 hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-gray-500 text-sm">{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary/80 font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-2">Get in Touch</h2>
            <div className="h-1 w-48 bg-primary" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-mono font-semibold text-gray-300 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono font-semibold text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono font-semibold text-gray-300 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none h-32"
                placeholder="Your message..."
                required
              />
            </div>
            <Button type="submit" className="btn-neon w-full">
              {submitted ? "Message Sent!" : "Send Message"}
            </Button>
          </form>

          <div className="mt-12 pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm font-mono">Or reach out directly:</p>
              <a href="mailto:marcus@example.com" className="text-primary hover:text-primary/80 transition-colors font-mono">
                marcus@example.com
              </a>
            </div>
            <a href="#" download className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm font-mono">© 2024 Marcus Chen. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.547 4.251 4.875v5.096zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.916-1.715.99 0 1.914.76 1.914 1.715 0 .953-.925 1.715-1.914 1.715zm1.6 11.597H3.738V9.859h3.199v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.836.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
