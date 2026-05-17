import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Share2, MessageCircle, Check } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useInView } from '../hooks/useInView';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [ref, isInView] = useInView();

  useEffect(() => {
    const found = products.find((p) => p.id === parseInt(id));
    if (found) {
      setProduct(found);
      setSelectedSize(found.sizes[0]);
      setSelectedColor(found.colors[0]);
      setSelectedImage(0);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <p className="font-serif text-xl text-luxury-white italic">Loading...</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleWhatsAppOrder = () => {
    const message = `Hi Maison Élégance, I'm interested in ordering the ${product.name} (${selectedColor}, Size: ${selectedSize}). Could you please assist me with this order?`;
    const url = `https://wa.me/+33142605000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <main className="pt-24 md:pt-32 bg-luxury-black min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-3 mb-8 font-sans text-xs tracking-[0.1em] uppercase text-luxury-light-gray"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="hover:text-luxury-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-luxury-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-luxury-white">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Main Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-luxury-charcoal">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {product.images.length > 1 && (
                <>
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-luxury-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-luxury-white hover:bg-luxury-black/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft size={18} />
                  </motion.button>
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-luxury-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-luxury-white hover:bg-luxury-black/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-luxury-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="font-sans text-xs text-luxury-white">
                  {selectedImage + 1} / {product.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square w-20 overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-luxury-gold' : 'opacity-60 hover:opacity-100'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Tag */}
            {product.tag && (
              <span className="inline-block bg-luxury-gold/10 text-luxury-gold text-[10px] font-sans tracking-[0.2em] uppercase px-3 py-1.5 w-fit mb-4">
                {product.tag}
              </span>
            )}

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-luxury-white leading-tight">
              {product.name}
            </h1>

            <p className="font-sans text-2xl md:text-3xl text-luxury-gold mt-4">
              ${product.price.toLocaleString()}
            </p>

            <p className="font-sans text-luxury-light-gray text-sm leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-light-gray mb-3">
                Color: <span className="text-luxury-white">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <motion.button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-xs font-sans tracking-[0.1em] uppercase transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-luxury-gold text-luxury-gold'
                        : 'border-white/10 text-luxury-light-gray hover:border-white/30'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {color}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-light-gray mb-3">
                Size: <span className="text-luxury-white">{selectedSize}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border flex items-center justify-center text-sm font-sans transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-luxury-gold text-luxury-gold bg-luxury-gold/10'
                        : 'border-white/10 text-luxury-light-gray hover:border-white/30'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-luxury-gold text-luxury-black py-5 font-sans text-xs tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 hover:bg-luxury-gold-light transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={18} />
                <span>Order on WhatsApp</span>
              </motion.button>

              <motion.button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-14 h-14 border flex items-center justify-center transition-all duration-300 ${
                  isWishlisted
                    ? 'border-luxury-gold text-luxury-gold bg-luxury-gold/10'
                    : 'border-white/10 text-luxury-light-gray hover:border-luxury-gold hover:text-luxury-gold'
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <Heart size={18} fill={isWishlisted ? '#c9a96e' : 'none'} />
              </motion.button>

              <motion.button
                onClick={handleShare}
                className="w-14 h-14 border border-white/10 text-luxury-light-gray hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center transition-all duration-300 relative"
                whileTap={{ scale: 0.9 }}
              >
                {showCopied ? <Check size={18} className="text-green-400" /> : <Share2 size={18} />}
                {showCopied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-luxury-gold text-luxury-black text-[10px] px-2 py-1 whitespace-nowrap font-sans">
                    Link copied!
                  </span>
                )}
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
              <div className="flex items-start gap-4">
                <Check size={16} className="text-luxury-gold mt-0.5 flex-shrink-0" />
                <p className="font-sans text-sm text-luxury-light-gray">
                  Complimentary shipping on all orders
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Check size={16} className="text-luxury-gold mt-0.5 flex-shrink-0" />
                <p className="font-sans text-sm text-luxury-light-gray">
                  Handcrafted with premium materials
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Check size={16} className="text-luxury-gold mt-0.5 flex-shrink-0" />
                <p className="font-sans text-sm text-luxury-light-gray">
                  Personal shopping assistance via WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div ref={ref} className="mt-24 md:mt-40">
            <motion.h2
              className="font-display text-3xl md:text-4xl text-luxury-white mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              You May Also Like
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-24">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetailsPage;
