import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const TextReveal = ({ text, className = '', delay = 0, tag = 'h2' }) => {
  const [ref, isInView] = useInView();
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const Tag = tag;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <Tag className="overflow-hidden">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-[0.25em]"
            variants={child}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
};

export default TextReveal;
