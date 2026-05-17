import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { featuredCollections } from '../data/products';
import { useInView } from '../hooks/useInView';
import TextReveal from './TextReveal';

const FeaturedCollections = () => {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-24 md:py-40 bg-luxury-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
          <div>
            <TextReveal
              text="Featured Collections"
              tag="h2"
              className="font-display text-4xl md:text-6xl lg:text-7xl text-luxury-white"
            />
            <motion.p
              className="font-serif text-xl md:text-2xl text-luxury-gold italic mt-2"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Curated for you
            </motion.p>
          </div>
          <motion.p
            className="font-sans text-luxury-light-gray text-sm max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Discover our handpicked selections, each piece telling a unique story of craftsmanship and elegance.
          </motion.p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link to={collection.link}>
                <motion.img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <motion.div
                    className="overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-luxury-gold mb-2">
                      {collection.subtitle}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl text-luxury-white group-hover:text-luxury-gold transition-colors duration-300">
                      {collection.title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                  >
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-gold">
                      Explore
                    </span>
                    <ArrowUpRight size={14} className="text-luxury-gold" />
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
