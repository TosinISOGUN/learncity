import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, useTransform, animate } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
}

const StatCounter = ({ value, label }: StatCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract number and suffix (e.g., "2,000+" -> 2000, "+")
  const numericPart = parseInt(value.replace(/,/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      animate(count, numericPart, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, count, numericPart]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <motion.div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
        {rounded}
      </motion.div>
      <div className="text-sm text-primary-foreground/70">{label}</div>
    </div>
  );
};

export default StatCounter;
