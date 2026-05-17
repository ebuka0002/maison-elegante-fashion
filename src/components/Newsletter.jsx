import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import TextReveal from './TextReveal';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, isInView] = useInView();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section ref={ref} className="py-24 md:py-40 bg-luxury-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <TextReveal
            text="Join the Inner Circle"
            tag="h2"
            className="font-display text-4xl md:text-6xl lg:text-7xl text-luxury-white"
          />
          <motion.p
            className="font-serif text-xl md:text-2xl text-luxury-gold italic mt-2 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Exclusive access awaits
          </motion.p>
          <motion.p
            className="font-sans text-luxury-light-gray text-base leading-relaxed mb-12 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Be the first to discover new collections, exclusive offers, and behind-the-scenes stories from Maison Élégance.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-transparent border-b-2 border-luxury-gray focus:border-luxury-gold text-luxury-white py-4 outline-none placeholder:text-luxury-gray transition-colors font-sans"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="bg-luxury-gold text-luxury-black px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase inline-flex items-center gap-3 hover:bg-luxury-gold-light transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <Check size={16} />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.p
            className="font-sans text-xs text-luxury-light-gray mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            By subscribing, you agree to our Privacy Policy.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
