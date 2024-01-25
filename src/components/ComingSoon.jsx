import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-green-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-white text-center p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold">Site Under Progress</h1>
        <p className="mt-4 text-lg">Working hard to bring you something amazing!</p>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
