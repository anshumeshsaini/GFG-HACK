import demon from "../../assets/demon1.png";
import User from "../../assets/team.png";
import Trophys from "../../assets/winner.png";
import zaps from "../../assets/loght.png";

const reasons = [
  {
    icon: demon,
    title: "FACE YOUR DEMONS",
    description:
      "Push beyond your comfort zone. The best code is written under pressure.",
  },
  {
    icon: User,
    title: "FIND YOUR PARTY",
    description:
      "Connect with developers who share your passion. Form alliances that last beyond the hackathon.",
  },
  {
    icon: Trophys,
    title: "CLAIM YOUR GLORY",
    description:
      "Win prizes worth $10,000+. But more importantly, prove what you're capable of.",
  },
  {
    icon: zaps,
    title: "LEVEL UP",
    description:
      "Learn from industry experts. Gain skills that will accelerate your career.",
  },
];

const WhyJoinSection = () => {
  return (
    <section className="relative min-h-screen py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-void-deep to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-stranger text-5xl sm:text-6xl md:text-8xl text-foreground mb-4 gsap-fade-up glitch">
            FACE YOUR <span className="text-crimson text-glow-red">FEARS</span>
          </h2>
          <p className="font-horror text-xl text-muted-foreground gsap-fade-up">
            Why should you enter the Upside Down?
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-8 gsap-stagger">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative portal-card p-8 bg-card/30 backdrop-blur-sm
                         border border-border/30 hover:border-crimson/50
                         transition-all duration-500 distort-hover"
            >
              {/* ICON */}
              <div className="mb-6 relative">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="w-14 h-14 object-contain
                             drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]
                             group-hover:scale-125 group-hover:rotate-6
                             transition-all duration-500"
                />

                {/* Glow */}
                <div className="absolute inset-0 w-14 h-14 bg-crimson/30 blur-xl
                                opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* CONTENT */}
              <h3 className="font-stranger text-2xl sm:text-3xl text-foreground mb-4 tracking-wider
                             group-hover:text-glow-red transition-all">
                {reason.title}
              </h3>

              <p className="font-sans text-muted-foreground leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1
                              bg-gradient-to-r from-transparent via-crimson to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Footer Statement */}
        <div className="mt-24 text-center gsap-scale-in">
          <p className="font-stranger text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
            <span className="block flicker">THE DARKNESS CALLS.</span>
            <span className="block text-crimson text-glow-red mt-2">
              WILL YOU ANSWER?
            </span>
          </p>
        </div>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-crimson/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
    </section>
  );
};

export default WhyJoinSection;
