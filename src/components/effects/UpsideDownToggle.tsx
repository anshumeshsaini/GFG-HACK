import { useState, useEffect } from 'react';

interface UpsideDownToggleProps {
  onToggle?: (isUpsideDown: boolean) => void;
}

const UpsideDownToggle = ({ onToggle }: UpsideDownToggleProps) => {
  const [isUpsideDown, setIsUpsideDown] = useState(false);

  useEffect(() => {
    if (isUpsideDown) {
      document.body.classList.add('upside-down');
    } else {
      document.body.classList.remove('upside-down');
    }

    onToggle?.(isUpsideDown);
  }, [isUpsideDown, onToggle]);

  return (
    <button
      onClick={() => setIsUpsideDown(!isUpsideDown)}
      className={`fixed top-6 right-6 z-[10000] px-4 py-2 font-stranger text-sm tracking-wider transition-all duration-300 border hoverable ${
        isUpsideDown 
          ? 'bg-electric text-background border-electric glow-red-intense' 
          : 'bg-transparent text-foreground border-crimson/50 hover:border-crimson hover:bg-crimson/10'
      }`}
      style={{
        boxShadow: isUpsideDown 
          ? '0 0 30px hsl(185 100% 50% / 0.5)' 
          : 'none',
      }}
    >
      {isUpsideDown ? 'EXIT UPSIDE DOWN' : 'UPSIDE DOWN'}
    </button>
  );
};

export default UpsideDownToggle;