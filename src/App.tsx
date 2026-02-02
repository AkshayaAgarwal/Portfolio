import { Toaster } from 'sonner';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Hero } from '@/sections/Hero';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';
import { Entrepreneurship } from '@/sections/Entrepreneurship';
import { Contact } from '@/sections/Contact';

function App() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
      {/* Toast notifications */}
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#0f172a',
            border: '1px solid #1e293b',
            color: '#f1f5f9'
          }
        }}
      />
      
      {/* Scroll progress bar */}
      <ScrollProgress />
      
      {/* Particle Network Background */}
      <ParticleBackground />
      
      {/* Sections */}
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      {/* <Entrepreneurship /> */}
      <Contact />
    </main>
  );
}

export default App;
