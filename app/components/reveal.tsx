"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { RevealProps } from "@/lib/types";

export default function Reveal({
  children,
  width = "fit-content",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControles = useAnimation();
  const slideControles = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControles.start("visible");
      slideControles.start("visible");
    }
  }, [isInView, mainControles, slideControles]);

  return (
    <div
      ref={ref}
      className="py-2 selection:bg-amber-500 selection:text-zinc-100"
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControles}
        transition={{ duration: 0.5, delay: 0.25, staggerChildren: 0.15 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControles}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="bg-amber-500"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}
