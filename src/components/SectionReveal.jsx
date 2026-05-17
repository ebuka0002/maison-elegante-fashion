import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SectionReveal = ({ children, className = '', delay = 0 }) => {
  const [ref, isInView] = useInView();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
