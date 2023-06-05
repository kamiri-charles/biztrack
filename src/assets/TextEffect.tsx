import React, { useEffect, useRef, useState } from "react";

interface TextEffectProps {
  text: string;
  interval: number;
}


// Works best with capitalized letters
const TextEffect: React.FC<TextEffectProps> = ({ text, interval }) => {
  const effectRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const target = effectRef.current;

    if (!target) return;

    let effectInterval: NodeJS.Timeout | null = null;
    let iterations = 0;
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#";

    const applyEffect = () => {
      target.innerText = text
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iterations >= text.length) {
        clearInterval(effectInterval as NodeJS.Timeout);
      }

      iterations += 1 / 3;
    };

    const startEffect = () => {
      effectInterval = setInterval(applyEffect, interval);
    };

    const stopEffect = () => {
      clearInterval(effectInterval as NodeJS.Timeout);
      target.innerText = text;
      iterations = 0;
    };

    if (isHovered) {
      startEffect();
    } else {
      stopEffect();
    }

    return () => {
      clearInterval(effectInterval as NodeJS.Timeout);
    };
  }, [text, interval, isHovered]);

  return (
    <div
      // fos - 5rem, color - var(ui-primary)
      style={{ fontSize: 5 + "rem", color: "var(--ui-primary)"  }}
      ref={effectRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </div>
  );
};

export default TextEffect;
