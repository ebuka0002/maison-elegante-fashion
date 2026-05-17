import { motion } from 'framer-motion';
import { Gem, Leaf, Sparkles, Crown } from 'lucide-react';
import { brandStory, values, team, milestones } from '../data/aboutData';
import { useInView } from '../hooks/useInView';
import TextReveal from '../components/TextReveal';

const iconMap = {
  Gem,
  Leaf,
  Sparkles,
  Crown,
};

const AboutPage = () => {
  const [storyRef, storyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [teamRef, teamInView] = useInView();
  const [timelineRef, timelineInView] = useInView();

  return (
    <main className="pt-24 md:pt-32 bg-luxury-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Maison Élégance Atelier"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
            <TextReveal
              text="Our Story"
              tag="h1"
              className="font-display text-5xl md:text-7xl lg:text-9xl text-luxury-white"
            />
            <motion.p
              className="font-serif text-xl md:text-3xl text-luxury-gold italic mt-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              A Legacy of Elegance
            </motion.p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section ref={storyRef} className="py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-luxury-gold mb-6">
                Since 2018
              </p>
              <TextReveal
                text="Crafted with Passion, Worn with Pride"
                tag="h2"
                className="font-display text-3xl md:text-5xl text-luxury-white leading-tight mb-8"
              />
              <div className="space-y-6">
                {brandStory.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="font-sans text-luxury-light-gray text-base leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={storyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={brandStory.image}
                  alt="Maison Élégance"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-luxury-gold/30" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-luxury-gold/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 md:py-40 bg-luxury-charcoal">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <TextReveal
              text="Our Values"
              tag="h2"
              className="font-display text-4xl md:text-6xl text-luxury-white"
            />
            <motion.p
              className="font-serif text-xl md:text-2xl text-luxury-gold italic mt-2"
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              The pillars of our brand
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  className="group p-8 border border-white/5 hover:border-luxury-gold/30 transition-all duration-500"
                  initial={{ opacity: 0, y: 40 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  <div className="w-12 h-12 border border-luxury-gold/30 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/10 transition-colors duration-500">
                    <Icon size={20} className="text-luxury-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-luxury-white mb-4">{value.title}</h3>
                  <p className="font-sans text-sm text-luxury-light-gray leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <TextReveal
              text="The Visionaries"
              tag="h2"
              className="font-display text-4xl md:text-6xl text-luxury-white"
            />
            <motion.p
              className="font-serif text-xl md:text-2xl text-luxury-gold italic mt-2"
              initial={{ opacity: 0 }}
              animate={teamInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Behind every masterpiece
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-display text-xl text-luxury-white">{member.name}</h3>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-luxury-gold mt-1">
                  {member.role}
                </p>
                <p className="font-sans text-sm text-luxury-light-gray mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 md:py-40 bg-luxury-charcoal">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <TextReveal
              text="Our Journey"
              tag="h2"
              className="font-display text-4xl md:text-6xl text-luxury-white"
            />
            <motion.p
              className="font-serif text-xl md:text-2xl text-luxury-gold italic mt-2"
              initial={{ opacity: 0 }}
              animate={timelineInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Milestones that define us
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-luxury-gold/20 md:-translate-x-px" />

            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-start md:items-center gap-8 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-luxury-gold rounded-full md:-translate-x-1.5 mt-2 md:mt-0 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}>
                    <span className="font-display text-3xl md:text-4xl text-luxury-gold">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-xl text-luxury-white mt-2">
                      {milestone.title}
                    </h3>
                    <p className="font-sans text-sm text-luxury-light-gray mt-1">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
