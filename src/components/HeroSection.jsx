import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/products';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-luxury-black">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-luxury-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-luxury-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
              <div className="max-w-2xl">
                <motion.p
                  className="font-sans text-xs tracking-[0.3em] uppercase text-luxury-gold mb-6"
                  custom={0.3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                <motion.h1
                  className="font-display text-5xl md:text-7xl lg:text-8xl text-luxury-white leading-[0.9] mb-2"
                  custom={0.5}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                <motion.h1
                  className="font-display text-5xl md:text-7xl lg:text-8xl text-luxury-white leading-[0.9] italic mb-8"
                  custom={0.7}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.h1>

                <motion.p
                  className="font-sans text-luxury-light-gray text-base md:text-lg leading-relaxed mb-10 max-w-md"
                  custom={0.9}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.div
                  custom={1.1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link to={heroSlides[currentSlide].link}>
                    <motion.button
                      className="group relative overflow-hidden bg-luxury-gold text-luxury-black font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 inline-flex items-center gap-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">{heroSlides[currentSlide].cta}</span>
                      <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      <motion.div
                        className="absolute inset-0 bg-luxury-gold-light"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Slide Indicators */}
          <div className="flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className="group relative"
              >
                <div className={`h-[2px] transition-all duration-500 ${
                  index === currentSlide ? 'w-12 bg-luxury-gold' : 'w-6 bg-white/30 group-hover:bg-white/50'
                }`} />
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-4">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-luxury-white hover:border-luxury-gold hover:text-luxury-gold transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-luxury-white hover:border-luxury-gold hover:text-luxury-gold transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 right-12 z-20 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-luxury-light-gray rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent mt-4" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
