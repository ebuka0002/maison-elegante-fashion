import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/products';
import { useInView } from '../hooks/useInView';
import TextReveal from './TextReveal';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [ref, isInView] = useInView();

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-24 md:py-40 bg-luxury-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-luxury-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-luxury-gold rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <TextReveal
            text="What They Say"
            tag="h2"
            className="font-display text-4xl md:text-6xl lg:text-7xl text-luxury-white"
          />
          <motion.p
            className="font-serif text-xl md:text-2xl text-luxury-gold italic mt-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Voices of elegance
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-center"
            >
              <Quote size={40} className="text-luxury-gold/30 mx-auto mb-8" />

              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-luxury-white leading-relaxed italic mb-10">
                "{testimonials[current].text}"
              </p>

              <div className="flex flex-col items-center gap-4">
                <motion.img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold/30"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <div>
                  <h4 className="font-display text-lg text-luxury-white">
                    {testimonials[current].name}
                  </h4>
                  <p className="font-sans text-sm text-luxury-gold">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              onClick={prev}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-luxury-white hover:border-luxury-gold hover:text-luxury-gold transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-luxury-gold w-6' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-luxury-white hover:border-luxury-gold hover:text-luxury-gold transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
