import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useInView } from '../hooks/useInView';
import ProductCard from './ProductCard';
import TextReveal from './TextReveal';

const NewArrivals = () => {
  const [ref, isInView] = useInView();
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <section ref={ref} className="py-24 md:py-40 bg-luxury-cream-gradient">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
          <div>
            <TextReveal
              text="New Arrivals"
              tag="h2"
              className="font-display text-4xl md:text-6xl lg:text-7xl text-luxury-black"
            />
            <motion.p
              className="font-serif text-xl md:text-2xl text-luxury-gold-dark italic mt-2"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Just landed
            </motion.p>
          </div>
          <Link to="/shop">
            <motion.div
              className="group flex items-center gap-3 text-luxury-black hover:text-luxury-gold-dark transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="font-sans text-xs tracking-[0.2em] uppercase">View All</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {newProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
