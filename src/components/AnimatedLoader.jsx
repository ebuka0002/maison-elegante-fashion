import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnimatedLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-luxury-black flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl md:text-6xl text-luxury-white tracking-[0.3em] uppercase">
            Maison
          </h1>
          <motion.div
            className="absolute -bottom-2 left-0 h-[1px] bg-luxury-gold"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
        <motion.p
          className="font-serif text-luxury-beige text-lg md:text-xl mt-6 tracking-[0.2em] italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Élégance
        </motion.p>

        <div className="mt-16 w-48 h-[1px] bg-luxury-gray relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-luxury-gold"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          className="mt-4 font-sans text-xs text-luxury-light-gray tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {Math.min(Math.round(progress), 100)}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLoader;
