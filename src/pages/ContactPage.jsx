import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import { contactInfo, boutiques } from '../data/contactData';
import { useInView } from '../hooks/useInView';
import TextReveal from '../components/TextReveal';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formRef, formInView] = useInView();
  const [infoRef, infoInView] = useInView();
  const [boutiquesRef, boutiquesInView] = useInView();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = "Hello Maison Élégance, I'd like to get in touch with your team.";
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="pt-24 md:pt-32 bg-luxury-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="Maison Élégance Boutique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <TextReveal
              text="Get in Touch"
              tag="h1"
              className="font-display text-5xl md:text-7xl lg:text-9xl text-luxury-white"
            />
            <motion.p
              className="font-serif text-xl md:text-3xl text-luxury-gold italic mt-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              We would love to hear from you
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div ref={infoRef}>
              <TextReveal
                text="Let's Connect"
                tag="h2"
                className="font-display text-3xl md:text-5xl text-luxury-white mb-8"
              />
              <motion.p
                className="font-sans text-luxury-light-gray text-base leading-relaxed mb-12"
                initial={{ opacity: 0 }}
                animate={infoInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Whether you have a question about our collections, need styling advice, or want to discuss a custom order, our team is here to assist you.
              </motion.p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: contactInfo.email },
                  { icon: Phone, label: 'Phone', value: contactInfo.phone },
                  { icon: MapPin, label: 'Address', value: contactInfo.address },
                  { icon: Clock, label: 'Hours', value: contactInfo.hours },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={infoInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-luxury-gold transition-colors duration-300">
                      <item.icon size={18} className="text-luxury-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-light-gray mb-1">
                        {item.label}
                      </p>
                      <p className="font-sans text-sm text-luxury-white">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                className="mt-12 p-8 border border-luxury-gold/20 bg-luxury-gold/5"
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={24} className="text-luxury-gold" />
                  <h3 className="font-display text-xl text-luxury-white">Order via WhatsApp</h3>
                </div>
                <p className="font-sans text-sm text-luxury-light-gray mb-6 leading-relaxed">
                  Prefer to chat? Connect with us directly on WhatsApp for personalized shopping assistance and instant order placement.
                </p>
                <motion.button
                  onClick={handleWhatsApp}
                  className="bg-luxury-gold text-luxury-black px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase inline-flex items-center gap-3 hover:bg-luxury-gold-light transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              className="p-8 md:p-12 border border-white/5"
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              <h3 className="font-display text-2xl text-luxury-white mb-8">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-4">
                    <Check size={32} className="text-luxury-gold" />
                  </div>
                  <h4 className="font-display text-xl text-luxury-white mb-2">Message Sent</h4>
                  <p className="font-sans text-sm text-luxury-light-gray">We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs tracking-[0.2em] uppercase text-luxury-light-gray mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold text-luxury-white py-3 outline-none placeholder:text-luxury-gray transition-colors font-sans"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-[0.2em] uppercase text-luxury-light-gray mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold text-luxury-white py-3 outline-none placeholder:text-luxury-gray transition-colors font-sans"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs tracking-[0.2em] uppercase text-luxury-light-gray mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold text-luxury-white py-3 outline-none placeholder:text-luxury-gray transition-colors font-sans"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs tracking-[0.2em] uppercase text-luxury-light-gray mb-3">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold text-luxury-white py-3 outline-none placeholder:text-luxury-gray transition-colors font-sans resize-none"
                      placeholder="Tell us more..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-luxury-gold text-luxury-black py-5 font-sans text-xs tracking-[0.2em] uppercase inline-flex items-center justify-center gap-3 hover:bg-luxury-gold-light transition-colors"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Boutiques */}
      <section ref={boutiquesRef} className="py-24 md:py-40 bg-luxury-charcoal">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <TextReveal
              text="Our Boutiques"
              tag="h2"
              className="font-display text-4xl md:text-6xl text-luxury-white"
            />
            <motion.p
              className="font-serif text-xl md:text-2xl text-luxury-gold italic mt-2"
              initial={{ opacity: 0 }}
              animate={boutiquesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Visiting us in person
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boutiques.map((boutique, index) => (
              <motion.div
                key={boutique.city}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                animate={boutiquesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <motion.img
                    src={boutique.image}
                    alt={`Maison Élégance ${boutique.city}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-luxury-black/30 group-hover:bg-luxury-black/10 transition-colors duration-500" />
                </div>
                <h3 className="font-display text-2xl text-luxury-white">{boutique.city}</h3>
                <p className="font-sans text-sm text-luxury-light-gray mt-2">{boutique.address}</p>
                <p className="font-sans text-sm text-luxury-gold mt-1">{boutique.phone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
