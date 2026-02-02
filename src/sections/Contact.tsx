import { motion } from 'framer-motion';
import { Linkedin, Github, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { CopyButton } from '@/components/CopyButton';
import { contactData } from '@/lib/data';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-emerald-400 text-sm tracking-wider">05.</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mt-2 mb-4">
            Let's Build Something <span className="text-gradient">Intelligent</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12">
            Open to collaborations in AI, data engineering, and creative tech. 
            Let's create something impactful together.
          </p>
        </motion.div>

        {/* Email Display */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-emerald-500/50 transition-colors">
            <Mail className="w-5 h-5 text-emerald-400" />
            <a 
              href={`mailto:${contactData.email}`}
              className="text-lg md:text-xl font-mono text-slate-200 hover:text-emerald-400 transition-colors"
            >
              {contactData.email}
            </a>
            <CopyButton 
              text={contactData.email}
              label="email"
              toastMessage="Email copied to clipboard!"
              className="ml-2"
            />
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-slate-300 group-hover:text-slate-100 transition-colors">LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
          </a>

          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-all duration-300"
          >
            <Github className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
            <span className="text-slate-300 group-hover:text-slate-100 transition-colors">GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          className="flex items-center justify-center gap-2 text-slate-500 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{contactData.location}</span>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="pt-8 border-t border-slate-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Akshaya Agarwal. Built with{' '}
            <span className="text-emerald-400">React</span>,{' '}
            <span className="text-blue-400">TypeScript</span> &{' '}
            <span className="text-purple-400">Framer Motion</span>.
          </p>
        </motion.footer>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
