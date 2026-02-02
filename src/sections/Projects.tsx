import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const compactProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-emerald-400 text-sm tracking-wider">03.</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mt-2 mb-4">
          The Intelligence <span className="text-gradient">Lab</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A collection of projects exploring AI, data systems, and full-stack development.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto">
        {/* Top Row - Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Row - Compact Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {compactProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index + featuredProjects.length} 
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
}
