"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-xl">Explore our latest articles and stay updated with the newest trends.</p>
    </motion.div>
  );
}