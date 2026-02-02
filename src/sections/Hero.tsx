import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function Hero() {
  const handleScrollToWork = () => {
    const workSection = document.getElementById('experience');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Resume download link - can be updated with actual resume path
    const resumeUrl = '/Akshaya_Resume_2025.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Akshaya_Agarwal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="font-mono text-emerald-400 text-sm sm:text-base tracking-wider">
            Hi, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-4 tracking-tight"
        >
          Akshaya <span className="text-gradient">Agarwal</span>
        </motion.h1>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6"
        >
          Software Engineer <span className="text-emerald-400">|</span> AI & Data-Driven Systems
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I specialize in building scalable web applications with{' '}
          <span className="text-slate-300">React.js</span>,{' '}
          <span className="text-slate-300">FastAPI</span>, and{' '}
          <span className="text-slate-300">Agentic AI</span>. Currently engineering intelligent systems at{' '}
          <span className="text-emerald-400 font-medium">Fractal</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={handleScrollToWork}
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 glow-emerald hover:scale-105"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>

          <Button
            onClick={handleDownloadResume}
            variant="outline"
            size="lg"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100 hover:border-emerald-500/50 px-8 py-6 text-base rounded-lg transition-all duration-300"
          >
            Download Resume
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {['React.js', 'TypeScript', 'FastAPI', 'Python', 'AI/ML', 'Databricks'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-mono text-slate-400 bg-slate-900/80 border border-slate-800 rounded-full hover:border-emerald-500/30 hover:text-emerald-400 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
