import dimag from "../../assets/mind.png";
import circut from "../../assets/circut.png";
import globeImg from "../../assets/globe.png";
import game from "../../assets/gameing.png"; // ⚠️ add a gaming image

const tracks = [
  {
    icon: dimag,
    name: "AI & MACHINE LEARNING",
    description:
      "Build intelligent systems that learn and adapt. Create something that thinks.",
    color: "hsl(0 100% 50%)",
  },
  {
    icon: circut,
    name: "WEB3 & BLOCKCHAIN",
    description:
      "Decentralize the future. Build on the next generation of the internet.",
    color: "hsl(185 100% 50%)",
  },
  {
    icon: game,
    name: "GAMING & INTERACTIVE",
    description:
      "Create experiences that captivate. Games, simulations, immersive worlds.",
    color: "hsl(280 100% 60%)",
  },
  {
    icon: globeImg,
    name: "SOCIAL IMPACT",
    description:
      "Technology for good. Solve real problems affecting real people.",
    color: "hsl(120 100% 40%)",
  },
];

const TracksSection = () => {
  return (
    <section className="relative min-h-screen py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-stranger text-5xl sm:text-6xl md:text-8xl text-foreground mb-4 gsap-fade-up">
            CHOOSE YOUR <span className="text-crimson text-glow-red">PATH</span>
          </h2>
          <p className="font-horror text-xl text-muted-foreground gsap-fade-up">
            Four dimensions. Infinite possibilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 gsap-stagger">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm
                         border border-border/30 overflow-hidden
                         transition-all duration-500 hover:scale-[1.02]"
              style={{ boxShadow: "0 0 0 transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px ${track.color}40, inset 0 0 40px ${track.color}15`;
                e.currentTarget.style.borderColor = track.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 transparent";
                e.currentTarget.style.borderColor =
                  "hsl(var(--border) / 0.3)";
              }}
            >
              {/* Portal glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${track.color}15 0%, transparent 70%)`,
                }}
              />

              {/* ICON */}
              <div className="relative mb-6">
                <img
                  src={track.icon}
                  alt={track.name}
                  className="w-14 h-14 object-contain
                             transition-all duration-500
                             group-hover:scale-125 group-hover:rotate-6"
                  style={{
                    filter: `drop-shadow(0 0 18px ${track.color})`,
                  }}
                />
              </div>

              {/* CONTENT */}
              <h3
                className="font-stranger text-2xl sm:text-3xl text-foreground mb-4 tracking-wider transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = `0 0 20px ${track.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = "none";
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

        {/* Footer note */}
        <p className="text-center font-horror text-muted-foreground mt-12 gsap-fade-up">
          Can't decide? Enter the Open Track — build anything your heart desires.
        </p>
      </div>
    </section>
  );
};

export default TracksSection;
