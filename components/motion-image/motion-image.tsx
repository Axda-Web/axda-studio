"use client";

import { motion } from "motion/react";
import Image from "next/image";

const AnimatedImage = motion.create(Image);

export const MotionImage = ({ ...props }) => {
  return <AnimatedImage {...props} />;
};
