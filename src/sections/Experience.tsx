import { motion } from 'framer-motion';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-emerald-400 text-sm tracking-wider">02.</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mt-2 mb-4">
          Where I've <span className="text-gradient">Worked</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          My professional journey building scalable systems and intelligent applications.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Center gradient line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
          <div className="w-full h-full bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-500 opacity-30" />
        </div>

        {/* Mobile line */}
        <div className="absolute left-4 top-0 bottom-0 w-px md:hidden">
          <div className="w-full h-full bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-500 opacity-30" />
        </div>

        {/* Experience cards */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="md:block hidden">
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
          
          {/* Mobile layout - simplified */}
          {experiences.map((experience, index) => (
            <MobileExperienceCard 
              key={`mobile-${experience.id}`} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Mobile-optimized experience card
import { useState } from 'react';
import { ChevronDown, Briefcase, Award } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import type { Experience } from '@/lib/data';

interface MobileExperienceCardProps {
  experience: Experience;
  index: number;
}

const mobileColorMap = {
  emerald: {
    border: 'border-emerald-500/30',
    borderHover: 'hover:border-emerald-500/60',
    glow: 'hover:shadow-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: 'text-emerald-400',
    dot: 'bg-emerald-400'
  },
  blue: {
    border: 'border-blue-500/30',
    borderHover: 'hover:border-blue-500/60',
    glow: 'hover:shadow-blue-500/20',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    icon: 'text-blue-400',
    dot: 'bg-blue-400'
  },
  purple: {
    border: 'border-purple-500/30',
    borderHover: 'hover:border-purple-500/60',
    glow: 'hover:shadow-purple-500/20',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    icon: 'text-purple-400',
    dot: 'bg-purple-400'
  }
};

function MobileExperienceCard({ experience, index }: MobileExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = mobileColorMap[experience.color];

  return (
    <motion.div
      className="md:hidden relative pl-12"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {/* Timeline dot */}
      <div className={`absolute left-2.5 top-6 w-3 h-3 rounded-full ${colors.dot} border-2 border-slate-950`} />

      {/* Card */}
      <motion.div
        className={`
          bg-slate-900/50 backdrop-blur-sm 
          border border-slate-800 ${colors.border} ${colors.borderHover}
          rounded-xl p-5 cursor-pointer
          transition-all duration-300
          hover:scale-[1.02] hover:shadow-lg ${colors.glow}
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg bg-slate-800/50 ${colors.icon}`}>
            <Briefcase className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-100">{experience.role}</h3>
            <p className={`${colors.icon} font-medium`}>{experience.company}</p>
            <p className="text-xs text-slate-500 font-mono mt-0.5">{experience.period}</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mt-3">
          {experience.highlights.map((highlight, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border ${colors.badge}`}
            >
              <Award className="w-3 h-3" />
              {highlight}
            </span>
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-3 mt-3 border-t border-slate-800">
                <ul className="space-y-2">
                  {experience.details.map((detail, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed">
                      {detail.startsWith('Tech Stack:') ? (
                        <span>
                          <span className="text-slate-300 font-medium">Tech Stack: </span>
                          <span className="font-mono text-emerald-400">{detail.replace('Tech Stack: ', '')}</span>
                        </span>
                      ) : (
                        detail
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand indicator */}
        <div className="flex items-center justify-end mt-3">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-500"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
