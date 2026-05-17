import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Eye } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-luxury-charcoal">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

          {/* Tag */}
          {product.tag && (
            <div className="absolute top-4 left-4">
              <span className="bg-luxury-gold text-luxury-black text-[10px] font-sans tracking-[0.15em] uppercase px-3 py-1.5">
                {product.tag}
              </span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <motion.button
              className="flex-1 bg-luxury-white/90 backdrop-blur-sm text-luxury-black py-3 text-xs font-sans tracking-[0.15em] uppercase hover:bg-luxury-gold transition-colors"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              Quick View
            </motion.button>
          </div>

          {/* Wishlist */}
          <motion.button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-luxury-white hover:text-luxury-gold hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Heart size={16} strokeWidth={1.5} />
          </motion.button>
        </div>

        {/* Info */}
        <div className="mt-5 space-y-2">
          <h3 className="font-display text-lg text-luxury-white group-hover:text-luxury-gold transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-luxury-light-gray">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </p>
          <p className="font-sans text-lg text-luxury-white">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
