"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "slideUp"
  | "slideDown"
  | "scaleUp"
  | "blurIn"
  | "blurInUp"
  | "popIn"
  | "rollIn";

export type SegmentType = "character" | "word" | "line";

export interface TextAnimateProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  by?: SegmentType;
  animation?: AnimationType;
  as?: React.ElementType;
  once?: boolean;
}

const animationVariants: Record<
  AnimationType,
  { hidden: any; visible: any }
> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  blurInUp: {
    hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  popIn: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
  rollIn: {
    hidden: { opacity: 0, rotateX: 90, y: 20 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
};

export function TextAnimate({
  children,
  className,
  delay = 0,
  duration = 0.4,
  stagger = 0.04,
  by = "word",
  animation = "fadeInUp",
  as: Component = "span",
  once = true,
}: TextAnimateProps) {
  const text = typeof children === "string" ? children : String(children);

  let segments: string[] = [];
  if (by === "character") {
    segments = text.split("");
  } else if (by === "line") {
    segments = text.split("\n");
  } else {
    // default: word
    segments = text.split(" ");
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariant = animationVariants[animation] || animationVariants.fadeInUp;

  const Comp = Component as any;

  return (
    <Comp className={cn("inline-block", className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={containerVariants}
        className="inline"
      >
        {segments.map((segment, i) => (
          <motion.span
            key={i}
            variants={itemVariant}
            transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {segment}
            {by === "word" && i < segments.length - 1 && "\u00A0"}
          </motion.span>
        ))}
      </motion.span>
    </Comp>
  );
}

export default TextAnimate;
