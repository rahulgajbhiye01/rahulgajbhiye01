"use client";

import { useRef } from "react";

import { useSpring, animated } from "react-spring";

const ParallaxImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [bgProps, bgSet] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { tension: 170, friction: 26 },
  }));

  const [fgProps, fgSet] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transformOrigin: "50% 50%",
    config: { tension: 170, friction: 26 },
  }));

  // Handle mouse movement and update the animation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25; // rotateX (up-down)
      const y = -(e.clientY - top - height / 2) / 25; // rotateY (left-right)

      const MAX_ROTATE_X = 6; // Maximum tilt up/down in degrees
      const MAX_ROTATE_Y = 6; // Maximum tilt left/right in degrees

      const clampedRotateX = Math.max(-MAX_ROTATE_X, Math.min(MAX_ROTATE_X, y));
      const clampedRotateY = Math.max(-MAX_ROTATE_Y, Math.min(MAX_ROTATE_Y, x));

      bgSet({
        rotateX: clampedRotateX * 2,
        rotateY: clampedRotateY * 2,
        scale: 1.4,
      });

      fgSet({
        rotateX: clampedRotateX,
        rotateY: clampedRotateY,
        scale: 1.2,
        transformOrigin: "50% 0%",
      });
    }
  };

  // Reset on mouse leave
  const handleMouseLeave = () => {
    bgSet({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });

    fgSet({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transformOrigin: "50% 50%",
    });
  };
  return (
    <div className="overflow-hidden" style={{ perspective: "1000px" }}>
      <animated.div
        ref={containerRef}
        className="parallax-background"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: bgProps.scale.to((s) => `scale(${s})`),
          rotateX: bgProps.rotateX.to((rx) => `${rx}deg`),
          rotateY: bgProps.rotateY.to((ry) => `${ry}deg`),
        }}
      >
        <animated.div
          className="parallax-foreground"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: fgProps.scale.to((s) => `scale(${s})`),
            rotateX: fgProps.rotateX.to((rx) => `${rx}deg`),
            rotateY: fgProps.rotateY.to((ry) => `${ry}deg`),
            transformOrigin: fgProps.transformOrigin,
          }}
        ></animated.div>
      </animated.div>
    </div>
  );
};

export default ParallaxImage;
