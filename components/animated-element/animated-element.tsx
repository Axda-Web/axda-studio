// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import { motion, MotionProps } from "motion/react";
import React, { ElementType } from "react";

interface AnimatedElementProps extends MotionProps {
  as?: ElementType;
  className?: string;
}

export function AnimatedElement({
  as = "div",
  children,
  initial,
  animate,
  transition,
  className,
}: AnimatedElementProps) {
  const MotionComponent = motion[as as keyof typeof motion] || motion.div;
  return (
    <MotionComponent
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </MotionComponent>
  );
}

// TODO: Find appropriate types
