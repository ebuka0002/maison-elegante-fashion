import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedButton = ({ children, onClick, variant = 'primary', className = '', to }) => {
  const baseStyles = 'relative overflow-hidden font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-500';

  const variants = {
    primary: 'bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light',
    secondary: 'bg-transparent border border-luxury-white/20 text-luxury-white hover:border-luxury-gold hover:text-luxury-gold',
    outline: 'bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black',
    dark: 'bg-luxury-black text-luxury-white border border-white/10 hover:border-luxury-gold hover:text-luxury-gold',
  };

  const Component = to ? motion.a : motion.button;

  return (
    <Component
      href={to}
      onClick={onClick}
      className={`group ${baseStyles} ${variants[variant]} ${className} inline-flex items-center gap-3`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="relative z-10"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
      </motion.span>
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
    </Component>
  );
};

export default AnimatedButton;
