"use client";
import { useEffect, useRef, useState } from "react";

// Hook for detecting when element enters viewport
export const useOnScreen = (options = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting];
};

// Component for scroll-triggered slide + reveal animations
export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = '',
  duration = 0.8 
}) => {
  const [ref, isVisible] = useOnScreen();

  const getTransformStyle = () => {
    switch (direction) {
      case 'left': return 'translateX(-50px)';
      case 'right': return 'translateX(50px)';
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      default: return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransformStyle(),
        transition: `opacity ${duration}s ${delay}ms ease-out, transform ${duration}s ${delay}ms ease-out`,
      }}
    >
      {children}
    </div>
  );
};
