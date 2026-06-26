import { MotionProps } from "motion/react";
import React from "react";

export type RevealProps = {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
};
export type BlockProps = {
  className?: string;
} & MotionProps;
