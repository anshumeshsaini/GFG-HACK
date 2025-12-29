import { Brain, Cpu, Gamepad2, Globe } from 'lucide-react';

const tracks = [
  {
    icon: Brain,
    name: "AI & MACHINE LEARNING",
    description: "Build intelligent systems that learn and adapt. Create something that thinks.",
    color: "hsl(0 100% 50%)",
  },
  {
    icon: Cpu,
    name: "WEB3 & BLOCKCHAIN",
    description: "Decentralize the future. Build on the next generation of the internet.",
    color: "hsl(185 100% 50%)",
  },
  {
    icon: Gamepad2,
    name: "GAMING & INTERACTIVE",
    description: "Create experiences that captivate. Games, simulations, immersive worlds.",
    color: "hsl(280 100% 60%)",
  },
  {
    icon: Globe,
    name: "SOCIAL IMPACT",
    description: "Technology for good. Solve real problems affecting real people.",
    color: "hsl(120 100% 40%)",
  },
];

const TracksSection = () => {
  return (
    <section className="relative min-h-screen py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-stranger text-5xl sm:text-6xl md:text-8xl text-foreground mb-4 gsap-fade-up">
            CHOOSE YOUR <span className="text-crimson text-glow-red">PATH</span>
          </h2>
          <p className="font-horror text-xl text-muted-foreground gsap-fade-up">
            Four dimensions. Infinite possibilities.
          </p>
        </div>

        {/* Track cards */}
        <div className="grid sm:grid-cols-2 gap-6 gsap-stagger">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/30 overflow-hidden transition-all duration-500 hover:scale-[1.02] hoverable"
              style={{
                boxShadow: `0 0 0 0 ${track.color}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px ${track.color}30, inset 0 0 40px ${track.color}10`;
                e.currentTarget.style.borderColor = track.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 transparent';
                e.currentTarget.style.borderColor = 'hsl(var(--border) / 0.3)';
              }}
            >
              {/* Portal crack effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${track.color}10 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <track.icon 
                  size={56} 
                  className="transition-all duration-300"
                  style={{ color: track.color }}
                />
              </div>

              {/* Content */}
              <h3 
                className="font-stranger text-2xl sm:text-3xl text-foreground mb-4 tracking-wider transition-all duration-300"
                style={{ textShadow: `0 0 0 transparent` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = `0 0 20px ${track.color}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = `0 0 0 transparent`;
                }}
              >
                {track.name}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed relative z-10">
                {track.description}
              </p>

              {/* Bottom line */}
              <div 
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                style={{ background: track.color }}
              />
            </div>
          ))}
        </div>

        {/* Info note */}
        <p className="text-center font-horror text-muted-foreground mt-12 gsap-fade-up">
          Can't decide? Enter the Open Track — build anything your heart desires.
        </p>
      </div>
    </section>
  );
};

export default TracksSection;