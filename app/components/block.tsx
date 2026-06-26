"use client";
import { BlockProps } from "@/lib/types";
import { motion } from "motion/react";

import React from "react";
import { twMerge } from "tailwind-merge";

export default function block({ className, ...rest }: BlockProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      className={twMerge(
        "w-full rounded-lg border border-zinc-700 p-16 shadow-lg",
        className,
      )}
      {...rest}
    />
  );
}
