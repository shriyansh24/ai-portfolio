'use client';

import { motion } from 'framer-motion';

export const AnimationTest = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border border-amber-200"
    >
      <h3 className="text-lg font-semibold text-amber-800 mb-2">
        🎯 Animation Test Component
      </h3>
      <p className="text-amber-700">Framer Motion is working correctly! ✨</p>
      <motion.div
        className="mt-3 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};
