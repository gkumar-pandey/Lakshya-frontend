import { BrainCircuit, ChevronRight, Timer } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Badge
            variant="outline"
            className="px-4 py-1.5 border-violet/30 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-violet mb-6 bg-violet/5"
          >
            The Student's Blade
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-[var(--text-primary)]">
            MASTER YOUR CRAFT.
            <br />
            <span className="text-gradient-violet italic">
              CONQUER YOUR EXAMS.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-lg md:text-xl mb-10 leading-relaxed font-light">
            The all-in-one workspace for students who demand discipline. Stop
            drifting. Start doing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="px-8 py-6 bg-black text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center gap-2 group shadow-lg shadow-black/20 hover:bg-black/80 border border-white/10">
              Start Your Journey For Free
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 border border-[var(--glass-border)] hover:bg-violet/5 text-[var(--text-primary)] text-xs font-bold uppercase tracking-widest transition-all rounded-sm"
            >
              View The Path
            </Button>
          </div>
        </motion.div>

        {/* Mockup Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 w-full max-w-5xl relative"
        >
          <div className="glass rounded-xl overflow-hidden shadow-2xl border-[var(--glass-border)] aspect-video flex flex-col">
            {/* Mockup Header */}
            <div className="h-10 border-b border-[var(--glass-border)] flex items-center px-4 gap-2 bg-[var(--bg-secondary)]/50">
              <div className="w-2.5 h-2.5 rounded-full bg-orange/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-violet/40" />
            </div>
            {/* Mockup Content */}
            <div className="flex-1 grid grid-cols-12 p-6 gap-6 bg-[var(--bg-primary)]/40">
              <div className="col-span-8 flex flex-col gap-6">
                <div className="h-40 glass rounded-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                      Syllabus Tracker
                    </span>
                    <span className="text-[10px] text-violet font-bold">
                      65% Complete
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-violet/10 rounded-full overflow-hidden">
                      <div className="h-full w-[65%] bg-gradient-to-r from-violet to-orange" />
                    </div>
                    <div className="flex justify-between text-[10px] text-[var(--text-secondary)]">
                      <span className="font-medium text-[var(--text-primary)]">
                        Quantum Mechanics
                      </span>
                      <span>12/18 Topics</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 glass rounded-lg p-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-4 block">
                    Daily Intent
                  </span>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-[var(--bg-secondary)]/50 rounded border border-[var(--glass-border)]"
                      >
                        <div className="w-4 h-4 rounded border border-[var(--glass-border)]" />
                        <div className="h-2 w-32 bg-violet/10 rounded" />
                        <div className="ml-auto w-12 h-2 bg-violet/20 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-4 flex flex-col gap-6">
                <div className="flex-1 glass rounded-lg flex flex-col items-center justify-center p-6 border-violet/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-violet/5 animate-pulse" />
                  <Timer className="w-12 h-12 text-violet mb-4 relative z-10" />
                  <span className="text-4xl font-black tracking-tighter relative z-10 text-[var(--text-primary)]">
                    24:59
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mt-2 relative z-10">
                    Pomodoro Active
                  </span>
                </div>
                <div className="h-32 glass rounded-lg p-5 border-[var(--glass-border)]">
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="w-4 h-4 text-orange" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange">
                      AI Mentor
                    </span>
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed">
                    Focus on \"Wave-Particle Duality\". It's a high-probability
                    exam topic based on your progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Accents */}
          <div className="absolute -top-10 -right-10 w-40 h-40 glass rounded-full blur-3xl bg-violet/20 -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 glass rounded-full blur-3xl bg-orange/10 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
