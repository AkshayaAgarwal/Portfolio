import { motion } from 'framer-motion';
import { BentoGrid } from '@/components/BentoGrid';

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-emerald-400 text-sm tracking-wider">04.</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mt-2 mb-4">
          Skills & <span className="text-gradient">Creative Suite</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A blend of engineering excellence and creative design expertise.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto">
        <BentoGrid />
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
