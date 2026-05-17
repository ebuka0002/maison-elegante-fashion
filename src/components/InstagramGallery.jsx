import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { instagramImages } from '../data/products';
import { useInView } from '../hooks/useInView';
import TextReveal from './TextReveal';

const InstagramGallery = () => {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-24 md:py-40 bg-luxury-cream-gradient">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <TextReveal
            text="Follow Our Journey"
            tag="h2"
            className="font-display text-4xl md:text-6xl lg:text-7xl text-luxury-black"
          />
          <motion.p
            className="font-serif text-xl md:text-2xl text-luxury-gold-dark italic mt-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            @maisonelegance
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/50 transition-all duration-500 flex items-center justify-center">
                <Instagram
                  size={24}
                  className="text-luxury-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
