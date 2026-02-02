import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Gift, Fingerprint } from 'lucide-react';
import { entrepreneurshipData } from '@/lib/data';

export function Entrepreneurship() {
  const [hoveredColor, setHoveredColor] = useState<{ name: string; hex: string } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section id="entrepreneurship" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Content - 60% */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-emerald-400 text-sm tracking-wider">05.</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mt-2 mb-6">
              Beyond <span className="text-gradient">Engineering</span>
            </h2>

            <div className="mb-6">
              <p className="font-mono text-emerald-400 text-lg">{entrepreneurshipData.company}</p>
              <p className="text-slate-400">{entrepreneurshipData.role}</p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8">
              {entrepreneurshipData.narrative}
            </p>

            {/* Services */}
            <div className="flex flex-wrap gap-3 mb-8">
              {entrepreneurshipData.services.map((service, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-300 bg-slate-900/50 border border-slate-800 rounded-lg"
                >
                  {i === 0 && <Palette className="w-4 h-4 text-emerald-400" />}
                  {i === 1 && <Gift className="w-4 h-4 text-blue-400" />}
                  {i === 2 && <Fingerprint className="w-4 h-4 text-purple-400" />}
                  {service}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {entrepreneurshipData.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  className="text-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-emerald-400">{metric.value}</p>
                  <p className="text-sm text-slate-500">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual - 40% */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <p className="text-sm text-slate-500 mb-4 font-mono">Brand Color Palettes</p>
              
              {/* Color Grid */}
              <div className="grid grid-cols-2 gap-4">
                {entrepreneurshipData.brandColors.map((color, i) => (
                  <motion.div
                    key={i}
                    className={`
                      relative aspect-square rounded-xl bg-gradient-to-br ${color.gradient}
                      cursor-pointer overflow-hidden
                      shadow-lg hover:shadow-xl transition-all duration-300
                    `}
                    whileHover={{ scale: 1.05 }}
                    onMouseEnter={(e) => {
                      setHoveredColor(color);
                      setMousePos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseMove={(e) => {
                      setMousePos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseLeave={() => setHoveredColor(null)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  >
                    {/* Overlay with name */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white font-medium text-sm">{color.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Color tooltip */}
      {hoveredColor && (
        <div
          className="fixed z-50 pointer-events-none bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 shadow-lg"
          style={{
            left: mousePos.x + 10,
            top: mousePos.y - 50
          }}
        >
          <p className="text-sm font-medium text-slate-100">{hoveredColor.name}</p>
          <p className="text-xs font-mono text-emerald-400">{hoveredColor.hex}</p>
        </div>
      )}

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
