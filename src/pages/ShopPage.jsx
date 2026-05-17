import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import TextReveal from '../components/TextReveal';
import { useInView } from '../hooks/useInView';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [ref, isInView] = useInView();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'newest': return b.id - a.id;
      default: return 0;
    }
  });

  return (
    <main className="pt-24 md:pt-32 bg-luxury-black min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={ref} className="mb-12 md:mb-20">
          <TextReveal
            text="The Collection"
            tag="h1"
            className="font-display text-4xl md:text-6xl lg:text-7xl text-luxury-white"
          />
          <motion.p
            className="font-serif text-xl md:text-2xl text-luxury-gold italic mt-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Curated luxury for the discerning
          </motion.p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/5">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-5 py-2.5 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-luxury-gold text-luxury-black'
                    : 'bg-transparent border border-white/10 text-luxury-light-gray hover:border-luxury-gold hover:text-luxury-gold'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-luxury-light-gray" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent border border-white/10 rounded-none pl-10 pr-4 py-2.5 text-sm text-luxury-white placeholder:text-luxury-gray outline-none focus:border-luxury-gold transition-colors w-48 md:w-64 font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-luxury-light-gray hover:text-luxury-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <motion.button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 border border-white/10 text-luxury-light-gray hover:border-luxury-gold hover:text-luxury-gold transition-colors font-sans text-xs tracking-[0.15em] uppercase"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SlidersHorizontal size={14} />
              <span className="hidden md:inline">Sort</span>
            </motion.button>
          </div>
        </div>

        {/* Sort Options */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {[
                { value: 'featured', label: 'Featured' },
                { value: 'newest', label: 'Newest' },
                { value: 'price-low', label: 'Price: Low to High' },
                { value: 'price-high', label: 'Price: High to Low' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={`px-4 py-2 font-sans text-xs tracking-[0.1em] uppercase transition-colors ${
                    sortBy === option.value
                      ? 'text-luxury-gold'
                      : 'text-luxury-light-gray hover:text-luxury-white'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <p className="font-sans text-sm text-luxury-light-gray mb-8">
          {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'} found
        </p>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery + sortBy}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {sortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {sortedProducts.length === 0 && (
          <motion.div
            className="text-center py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="font-serif text-2xl text-luxury-white italic mb-4">No pieces found</p>
            <p className="font-sans text-luxury-light-gray">Try adjusting your search or filters.</p>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default ShopPage;
