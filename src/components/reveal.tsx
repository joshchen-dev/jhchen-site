"use client";
import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";
export function Reveal({ children, delay = 0, className = "" }: PropsWithChildren<{ delay?: number; className?: string }>) { const reduceMotion = useReducedMotion(); return <motion.div className={className} initial={reduceMotion ? false : { y: 8 }} whileInView={reduceMotion ? undefined : { y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>; }
