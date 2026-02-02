import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Neural Network Animation Component
function NeuralNetworkVisual() {
  const nodes = [
    { x: 20, y: 30 }, { x: 20, y: 50 }, { x: 20, y: 70 },
    { x: 50, y: 25 }, { x: 50, y: 45 }, { x: 50, y: 65 }, { x: 50, y: 85 },
    { x: 80, y: 35 }, { x: 80, y: 55 }, { x: 80, y: 75 },
  ];

  const connections = [
    [0, 3], [0, 4], [0, 5],
    [1, 4], [1, 5], [1, 6],
    [2, 5], [2, 6],
    [3, 7], [3, 8], [4, 7], [4, 8], [4, 9],
    [5, 8], [5, 9], [6, 8], [6, 9],
  ];

  return (
    <div className="relative w-full h-32 bg-slate-950/50 rounded-lg overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="rgba(52, 211, 153, 0.2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.05, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="rgba(52, 211, 153, 0.6)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ 
              duration: 2, 
              delay: i * 0.1, 
              repeat: Infinity, 
              repeatDelay: 1 
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Bar Chart Animation Component
function BarChartVisual({ metrics }: { metrics?: { label: string; value: string }[] }) {
  if (!metrics) return null;

  const maxValue = Math.max(...metrics.map(m => parseInt(m.value)));

  return (
    <div className="w-full h-32 bg-slate-950/50 rounded-lg p-4 flex items-end justify-around gap-2">
      {metrics.map((metric, i) => {
        const percentage = (parseInt(metric.value) / maxValue) * 100;
        return (
          <div key={i} className="flex flex-col items-center gap-2 flex-1">
            <motion.div
              className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm"
              initial={{ height: 0 }}
              whileInView={{ height: `${percentage * 0.6}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
            />
            <div className="text-center">
              <p className="text-xs font-mono text-emerald-400">{metric.value}</p>
              <p className="text-[10px] text-slate-500 truncate max-w-[60px]">{metric.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = project.featured;

  return (
    <motion.div
      className={`
        group relative bg-slate-900/50 backdrop-blur-sm 
        border border-slate-800 hover:border-emerald-500/40
        rounded-xl overflow-hidden
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10
        ${isFeatured ? 'col-span-1 md:col-span-1' : 'col-span-1'}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Visual */}
      {project.visualType === 'neural' && <NeuralNetworkVisual />}
      {project.visualType === 'bars' && <BarChartVisual metrics={project.metrics} />}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-slate-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-mono text-slate-500 bg-slate-800/50 rounded lowercase"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project button */}
        {/* <Button
          variant="outline"
          size="sm"
          className="w-full border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:border-emerald-500/50 transition-all"
          onClick={() => {
            // Placeholder for project link
            console.log(`View project: ${project.id}`);
          }}
        >
          View Project
          <ExternalLink className="ml-2 w-4 h-4" />
        </Button> */}
      </div>
    </motion.div>
  );
}
