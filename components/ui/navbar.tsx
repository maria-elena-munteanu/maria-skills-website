"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-foreground">
          Maria Elena
        </div>
        <div className="flex space-x-6">
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
