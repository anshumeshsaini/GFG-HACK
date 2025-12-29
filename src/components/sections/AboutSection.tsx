const AboutSection = () => {
  return (
    <section className="relative min-h-screen py-32 px-4 overflow-hidden"
    id="about">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 gsap-fade-up">
          <h2 className="font-stranger text-5xl sm:text-6xl md:text-7xl text-foreground mb-4 text-glow-red">
            THE STORY BEGINS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto" />
        </div>

        {/* Story content */}
        <div className="space-y-12">
          <p className="font-horror text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed text-center gsap-fade-up">
            In the depths of the digital realm, where code meets chaos, 
            a portal has opened...
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="gsap-slide-left">
              <div className="p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-crimson/30 transition-colors duration-500">
                <h3 className="font-stranger text-2xl text-crimson mb-4 tracking-wider">
                  WHAT IS THIS?
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  A 48-hour hackathon experience that pushes you to your limits. 
                  Build innovative projects, collaborate with fellow developers, 
                  and emerge from the darkness with something extraordinary.
                </p>
              </div>
            </div>

            <div className="gsap-slide-right">
              <div className="p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-crimson/30 transition-colors duration-500">
                <h3 className="font-stranger text-2xl text-crimson mb-4 tracking-wider">
                  WHEN & WHERE?
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">March 15-17, 2025</span><br />
                  Virtual event accessible from anywhere in the world. 
                  The Upside Down has no boundaries.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center gsap-fade-up">
            <p className="font-horror text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "Those who dare to enter will discover powers they never knew they had. 
              Those who survive will never be the same."
            </p>
            <span className="block mt-4 font-stranger text-crimson tracking-widest text-sm">
              — THE ORACLE
            </span>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-24 flex items-center justify-center gap-4 gsap-scale-in">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-crimson/50" />
          <div className="w-3 h-3 bg-crimson rotate-45 animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-crimson/50" />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-crimson/20 to-transparent" />
    </section>
  );
};

export default AboutSection;