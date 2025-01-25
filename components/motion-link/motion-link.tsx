"use client";

import { motion } from "motion/react";
import Link from "next/link";

const AnimatedLink = motion.create(Link);

export const MotionLink = ({ ...props }) => {
  return <AnimatedLink {...props} />;
};
