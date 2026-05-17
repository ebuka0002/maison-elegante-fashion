import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-luxury-black/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-display text-xl md:text-2xl text-luxury-white tracking-[0.25em] uppercase">
                  Maison
                </span>
                <span className="font-serif text-xs md:text-sm text-luxury-gold tracking-[0.3em] italic -mt-1">
                  Élégance
                </span>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <motion.span
                    className={`relative font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-luxury-gold'
                        : 'text-luxury-white hover:text-luxury-gold'
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-[1px] bg-luxury-gold"
                        layoutId="nav-underline"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <motion.button
                className="text-luxury-white hover:text-luxury-gold transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={18} strokeWidth={1.5} />
              </motion.button>

              <Link to="/shop">
                <motion.div
                  className="text-luxury-white hover:text-luxury-gold transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingBag size={18} strokeWidth={1.5} />
                </motion.div>
              </Link>

              <motion.button
                className="md:hidden text-luxury-white"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-luxury-black/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-2xl px-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search collections..."
                  className="w-full bg-transparent border-b-2 border-luxury-gray focus:border-luxury-gold text-luxury-white text-2xl md:text-4xl font-display py-4 outline-none placeholder:text-luxury-gray transition-colors"
                  autoFocus
                />
                <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-luxury-gold" size={24} />
              </div>
              <p className="mt-4 text-luxury-light-gray text-sm font-sans">
                Press ESC to close
              </p>
            </motion.div>
            <button
              className="absolute top-8 right-8 text-luxury-white hover:text-luxury-gold"
              onClick={() => setIsSearchOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-luxury-black flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="font-display text-3xl text-luxury-white hover:text-luxury-gold transition-colors tracking-[0.1em]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
