'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, MotionProps } from 'framer-motion';

const DEFAULT_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export interface TextScrambleProps extends MotionProps {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  hoverTrigger?: boolean;
  onScrambleComplete?: () => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

export function TextScramble({
  children,
  duration = 0.7,
  speed = 0.03,
  characterSet = DEFAULT_CHARS,
  as: Component = 'span',
  className = '',
  trigger = true,
  hoverTrigger = false,
  onScrambleComplete,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...motionProps
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsScrambling(true);
    const steps = Math.max(1, Math.floor(duration / speed));
    let currentStep = 0;

    intervalRef.current = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      let result = '';
      for (let i = 0; i < children.length; i++) {
        const char = children[i];
        if (char === ' ' || char === '\n' || char === '\t') {
          result += char;
          continue;
        }

        // Once progress passes the char's relative position, reveal target char
        if (i < children.length * progress) {
          result += children[i];
        } else {
          result += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(result);

      if (currentStep >= steps) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setDisplayText(children);
        setIsScrambling(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  }, [children, duration, speed, characterSet, onScrambleComplete]);

  // Handle controlled trigger
  useEffect(() => {
    if (trigger) {
      scramble();
    } else {
      setDisplayText(children);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [trigger, scramble, children]);

  // Keep target text updated if children changes
  useEffect(() => {
    if (!isScrambling) {
      setDisplayText(children);
    }
  }, [children, isScrambling]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverTrigger) {
      scramble();
    }
    onMouseEnter?.(e);
  };

  const MotionComponent = useMemo(() => motion.create(Component), [Component]);

  return (
    <MotionComponent
      className={className}
      aria-label={children}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      {...motionProps}
    >
      {displayText}
    </MotionComponent>
  );
}

export default TextScramble;
