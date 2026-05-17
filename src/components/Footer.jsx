import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Pin, Youtube, Music, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Footer = () => {
  const [ref, isInView] = useInView();

  const footerLinks = {
    shop: [
      { name: 'Clothing', path: '/shop?category=clothes' },
      { name: 'Fragrances', path: '/shop?category=perfumes' },
      { name: 'Handbags', path: '/shop?category=bags' },
      { name: 'Jewelry', path: '/shop?category=jewelry' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '#' },
      { name: 'Press', path: '#' },
    ],
    support: [
      { name: 'Size Guide', path: '#' },
      { name: 'Shipping', path: '#' },
      { name: 'Returns', path: '#' },
      { name: 'FAQ', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Pin, label: 'Pinterest', url: '#' },
    { icon: Youtube, label: 'YouTube', url: '#' },
    { icon: Music, label: 'TikTok', url: '#' },
  ];

  return (
    <footer ref={ref} className="bg-luxury-black border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl text-luxury-white tracking-[0.25em] uppercase">
                Maison
              </span>
              <span className="font-serif text-sm text-luxury-gold tracking-[0.3em] italic">
                Élégance
              </span>
            </div>
            <p className="mt-6 text-luxury-light-gray text-sm font-sans leading-relaxed max-w-xs">
              A luxury fashion house crafting timeless elegance for the modern woman. 
              Every piece tells a story of artistry and passion.
            </p>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxury-light-gray hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={16} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: catIndex * 0.15 }}
              >
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-white mb-6">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group flex items-center gap-2 text-luxury-light-gray text-sm font-sans hover:text-luxury-gold transition-colors duration-300"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-luxury-light-gray text-xs font-sans">
            © 2026 Ebuka's Maison Élégance. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-luxury-light-gray text-xs font-sans hover:text-luxury-gold cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-luxury-light-gray text-xs font-sans hover:text-luxury-gold cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
