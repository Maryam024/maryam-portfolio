"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCounter({ value }: { value: string | number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState<string>(
    typeof value === "number" ? "0" : value
  );

  const numeric = typeof value === "number" ? value : parseFloat(value);
  const isNumeric = typeof value === "number";
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (isInView && isNumeric) {
      motionValue.set(numeric);
    }
  }, [isInView, isNumeric, numeric, motionValue]);

  useEffect(() => {
    if (!isNumeric) return;
    const unsub = spring.on("change", (v) => {
      setDisplay(Math.round(v).toString());
    });
    return () => unsub();
  }, [spring, isNumeric]);

  return (
    <span ref={ref}>
      {isInView ? (isNumeric ? display : value) : isNumeric ? "0" : value}
    </span>
  );
}
