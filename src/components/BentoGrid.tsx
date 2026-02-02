import { motion } from 'framer-motion';
import { Cpu, Palette, Award, Sparkles, Layers, Code2 } from 'lucide-react';
import { SkillRadar } from './SkillRadar';
import { skillsData } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

export function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Large item - Radar Chart */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-2 md:row-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Code2 className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">Technical Proficiency</h3>
        </div>
        <SkillRadar skills={skillsData.technical} />
      </motion.div>

      {/* AI/ML Stack */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <Cpu className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">AI/ML Stack</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skillsData.aiStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Creative Design Tools */}
      <motion.div
        variants={itemVariants}
        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 rounded-xl p-5 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-purple-500/10">
            <Palette className="w-5 h-5 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">Creative Suite</h3>
        </div>
        <div className="space-y-3">
          {skillsData.creative.map((tool, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300">{tool.name}</p>
                <p className="text-xs text-slate-500">{tool.type}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  />
                </div>
                <span className="text-xs font-mono text-purple-400">{tool.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <Award className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">Certifications</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {skillsData.certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-amber-500/30 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">{cert.name}</p>
                  <p className="text-xs text-slate-500">{cert.detail}</p>
                  <p className="text-xs font-mono text-slate-600 mt-1">{cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Skills */}
      <motion.div
        variants={itemVariants}
        className="md:col-span-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10">
            <Layers className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-100">Additional Expertise</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
  'Data Visualization',
  'Highcharts',
  'D3.js',
  'Chart.js',
  'Power BI',
  'React.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Material UI (MUI)',
  'Responsive UI Design',
  'REST APIs',
  'FastAPI',
  'Node.js',
  'SQL',
  'PostgreSQL',
  'MySQL',
  'Python',
  'Pandas',
  'NumPy',
  'Machine Learning Basics',
  'Data Analysis',
  'Agile / Scrum',
  'CI/CD',
  'Git & GitHub',
  'Docker (Basics)',
  'AWS (Foundations)',
  'Jupyter Notebook'
].map((skill, i) => (
  <span
              key={i}
              className="px-3 py-1.5 text-sm text-slate-400 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-emerald-500/30 hover:text-emerald-400 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
