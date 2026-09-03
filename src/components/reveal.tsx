"use client";
import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";
export function Reveal({ children, delay = 0, className = "" }: PropsWithChildren<{ delay?: number; className?: string }>) { const reduceMotion = useReducedMotion(); return <motion.div className={`reveal ${className}`} initial={reduceMotion ? false : { opacity: 0.65, y: 6 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}>{children}</motion.div>; }
