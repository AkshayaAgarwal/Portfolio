import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Award } from 'lucide-react';
import type { Experience } from '@/lib/data';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const colorMap = {
  emerald: {
    border: 'border-emerald-500/30',
    borderHover: 'hover:border-emerald-500/60',
    glow: 'hover:shadow-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    icon: 'text-emerald-400',
    line: 'bg-emerald-400'
  },
  blue: {
    border: 'border-blue-500/30',
    borderHover: 'hover:border-blue-500/60',
    glow: 'hover:shadow-blue-500/20',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    icon: 'text-blue-400',
    line: 'bg-blue-400'
  },
  purple: {
    border: 'border-purple-500/30',
    borderHover: 'hover:border-purple-500/60',
    glow: 'hover:shadow-purple-500/20',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    icon: 'text-purple-400',
    line: 'bg-purple-400'
  }
};

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = colorMap[experience.color];
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-start gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <motion.div
          className={`w-4 h-4 rounded-full ${colors.line} border-4 border-slate-950`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.4 }}
        />
      </div>

      {/* Content card */}
      <motion.div
        className={`w-[calc(50%-2rem)] ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
      >
        <motion.div
          className={`
            relative bg-slate-900/50 backdrop-blur-sm 
            border border-slate-800 ${colors.border} ${colors.borderHover}
            rounded-xl p-6 cursor-pointer
            transition-all duration-300
            hover:scale-[1.02] hover:shadow-lg ${colors.glow}
          `}
          onClick={() => setIsExpanded(!isExpanded)}
          layout
        >
          {/* Header */}
          <div className={`flex items-start gap-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`p-3 rounded-lg bg-slate-800/50 ${colors.icon}`}>
              <Briefcase className="w-5 h-5" />
            </div>
            <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl font-semibold text-slate-100">{experience.role}</h3>
              <p className={`text-lg ${colors.icon} font-medium`}>{experience.company}</p>
              <p className="text-sm text-slate-500 font-mono mt-1">{experience.period}</p>
            </div>
          </div>

          {/* Highlights */}
          <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            {experience.highlights.map((highlight, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${colors.badge}`}
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
                <div className={`pt-4 mt-4 border-t border-slate-800 ${isLeft ? 'text-right' : 'text-left'}`}>
                  <ul className="space-y-3">
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
          <div className={`flex items-center mt-4 ${isLeft ? 'justify-start' : 'justify-end'}`}>
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

      {/* Empty space for timeline alignment */}
      <div className="w-[calc(50%-2rem)]" />
    </div>
  );
}
