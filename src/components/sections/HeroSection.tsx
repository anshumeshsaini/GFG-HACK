import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => setLoaded(true), 500);

    if (!titleRef.current || !subtitleRef.current || !ctaRef.current) return;

    const tl = gsap.timeline({ delay: 0.8 });

    // Title animation - Stranger Things style letter reveal
    const letters = titleRef.current.querySelectorAll('.letter');
    tl.fromTo(letters,
      { opacity: 0, y: 100, rotateX: -90 },
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
      }
    );

    // Subtitle fade in
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' },
      '-=0.3'
    );

    // CTA button
    tl.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.5'
    );

    return () => {
      clearTimeout(timer);
      tl.kill();
    };
  }, []);

  const handleCtaHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleCtaLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const titleText = "UPSIDE DOWN";
  const subtitleText = "HACKATHON";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-deep via-background to-background" />
      
      {/* Animated background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, hsl(0 100% 50% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, hsl(0 100% 50% / 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Main title */}
        <h1 
          ref={titleRef}
          className="font-stranger text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] text-foreground mb-4 leading-none"
          style={{ perspective: '1000px' }}
        >
          {titleText.split('').map((letter, index) => (
            <span 
              key={index} 
              className="letter inline-block text-glow-red"
              style={{ 
                textShadow: '0 0 20px hsl(0 100% 50% / 0.8), 0 0 40px hsl(0 100% 50% / 0.4)',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <h2 
          ref={subtitleRef}
          className="font-stranger text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-crimson mb-8 tracking-[0.3em]"
        >
          {subtitleText}
        </h2>

        {/* Tagline */}
        <p 
          className="font-horror text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto gsap-fade-up"
        >
          48 hours of coding in the darkest dimension. <br />
          Will you survive?
        </p>

        {/* CTA Button */}
        <button
          ref={ctaRef}
          onMouseEnter={handleCtaHover}
          onMouseLeave={handleCtaLeave}
          className="magnetic-btn hoverable group relative px-12 py-5 font-stranger text-xl sm:text-2xl tracking-widest text-primary-foreground bg-crimson border-2 border-crimson overflow-hidden transition-colors duration-300"
          style={{
            boxShadow: '0 0 30px hsl(0 100% 50% / 0.4), 0 0 60px hsl(0 100% 50% / 0.2)',
          }}
        >
          {/* Button background animation */}
          <span className="absolute inset-0 bg-gradient-to-r from-crimson-dark via-crimson to-crimson-dark bg-[length:200%_100%] animate-pulse-red opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <span className="relative z-10">ENTER THE UPSIDE DOWN</span>

          {/* Shockwave effect on hover */}
          <span className="absolute inset-0 border-2 border-crimson scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
        </button>

        {/* Scroll indicator */}
       
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-crimson/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-crimson/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;