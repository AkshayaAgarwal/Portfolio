import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import type { Skill } from '@/lib/data';

interface SkillRadarProps {
  skills: Skill[];
}

export function SkillRadar({ skills }: SkillRadarProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const size = Math.min(width, 500);
        setDimensions({ width: size, height: size });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Draw radar chart
  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width, height } = dimensions;
    const margin = 60;
    const radius = Math.min(width, height) / 2 - margin;
    const centerX = width / 2;
    const centerY = height / 2;

    // Create gradient
    const defs = svg.append('defs');
    const gradient = defs.append('radialGradient')
      .attr('id', 'skill-gradient')
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', '50%');
    
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#34d399')
      .attr('stop-opacity', 0.8);
    
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#10b981')
      .attr('stop-opacity', 0.3);

    const g = svg.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`);

    // Scales
    const angleScale = d3.scaleLinear()
      .domain([0, skills.length])
      .range([0, 2 * Math.PI]);

    const radiusScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, radius]);

    // Draw grid circles
    const gridLevels = [20, 40, 60, 80, 100];
    gridLevels.forEach(level => {
      g.append('circle')
        .attr('r', radiusScale(level))
        .attr('fill', 'none')
        .attr('stroke', 'rgba(148, 163, 184, 0.1)')
        .attr('stroke-width', 1);
    });

    // Draw axis lines
    skills.forEach((_, i) => {
      const angle = angleScale(i) - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      g.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', x)
        .attr('y2', y)
        .attr('stroke', 'rgba(148, 163, 184, 0.1)')
        .attr('stroke-width', 1);
    });

    // Generate path data for skill area
    const pathData: [number, number][] = skills.map((skill, i) => {
      const angle = angleScale(i) - Math.PI / 2;
      const r = radiusScale(skill.level);
      return [Math.cos(angle) * r, Math.sin(angle) * r];
    });

    // Draw skill area using path string
    const pathString = pathData.map((point, i) => 
      `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`
    ).join(' ') + ' Z';

    g.append('path')
      .attr('d', pathString)
      .attr('fill', 'url(#skill-gradient)')
      .attr('stroke', '#34d399')
      .attr('stroke-width', 2)
      .attr('opacity', 0)
      .transition()
      .duration(1000)
      .attr('opacity', 1);

    // Draw skill points
    skills.forEach((skill, i) => {
      const angle = angleScale(i) - Math.PI / 2;
      const r = radiusScale(skill.level);
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;

      const pointGroup = g.append('g')
        .attr('class', 'skill-point-group')
        .style('cursor', 'pointer');

      pointGroup.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 0)
        .attr('fill', '#34d399')
        .attr('stroke', '#020617')
        .attr('stroke-width', 2)
        .attr('class', `skill-point-${i}`)
        .transition()
        .delay(i * 100)
        .duration(500)
        .attr('r', 6);

      // Invisible hit area for easier hovering
      pointGroup.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 15)
        .attr('fill', 'transparent')
        .on('mouseenter', (event) => {
          setHoveredSkill(skill);
          setMousePos({ x: event.pageX, y: event.pageY });
          
          // Highlight the point
          g.select(`.skill-point-${i}`)
            .transition()
            .duration(200)
            .attr('r', 8);
        })
        .on('mousemove', (event) => {
          setMousePos({ x: event.pageX, y: event.pageY });
        })
        .on('mouseleave', () => {
          setHoveredSkill(null);
          
          // Reset the point
          g.select(`.skill-point-${i}`)
            .transition()
            .duration(200)
            .attr('r', 6);
        });
    });

    // Draw labels
    skills.forEach((skill, i) => {
      const angle = angleScale(i) - Math.PI / 2;
      const labelRadius = radius + 25;
      const x = Math.cos(angle) * labelRadius;
      const y = Math.sin(angle) * labelRadius;

      g.append('text')
        .attr('x', x)
        .attr('y', y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', '#94a3b8')
        .attr('font-size', '11px')
        .attr('font-family', 'JetBrains Mono, monospace')
        .text(skill.name);
    });

  }, [skills, dimensions]);

  // Generate aria-label for accessibility
  const ariaLabel = `Technical skills radar chart showing proficiency levels: ${skills.map(s => `${s.name} at ${s.level} percent`).join(', ')}`;

  return (
    <div ref={containerRef} className="relative w-full flex items-center justify-center">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="overflow-visible"
        aria-label={ariaLabel}
        role="img"
      />
      
      {/* Tooltip */}
      {hoveredSkill && (
        <div
          className="fixed z-50 pointer-events-none bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 shadow-lg"
          style={{
            left: mousePos.x + 10,
            top: mousePos.y - 40
          }}
        >
          <p className="text-sm font-medium text-slate-100">{hoveredSkill.name}</p>
          <p className="text-xs font-mono text-emerald-400">{hoveredSkill.level}%</p>
          <p className="text-xs text-slate-500">{hoveredSkill.category}</p>
        </div>
      )}
    </div>
  );
}
