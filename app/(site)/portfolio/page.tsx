'use client';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import PortfolioGrid from '../components/PortfolioGrid';
import SplitCTA from '../components/SplitCTA';
import Link from 'next/link';

export default function PortfolioPage(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Section>
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.h1 
            className="h1 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.h1>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Explore my latest work featuring sports photography, concert coverage, and brand campaigns. 
            See the difference between original shots and my signature presets.
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="btn btn-primary">Book a Session</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services" className="btn btn-ghost">View Services</Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <PortfolioGrid />
      </Section>

      <motion.div variants={itemVariants}>
        <Section>
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="h2 mb-4">Preset Showcase</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              Toggle between original and preset versions to see how my editing style transforms each image. 
              Each preset is carefully crafted to enhance mood, color, and storytelling.
            </p>
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-white/80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Click any image to compare original vs preset
            </motion.div>
          </motion.div>
        </Section>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Section>
          <SplitCTA />
        </Section>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Section>
          <motion.div 
            className="a-glass p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="h2 mb-4">Love These Presets?</h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Get the same professional editing treatment for your photos. 
              Available for individual projects or as part of full photography packages.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn btn-primary">Request Preset Editing</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services" className="btn btn-ghost">View All Services</Link>
              </motion.div>
            </div>
          </motion.div>
        </Section>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Section>
          <motion.div 
            className="a-glass p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="h2 mb-4">Ready to Work Together?</h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              From sports events to concerts, brand campaigns to personal projects - 
              let&apos;s create something amazing together.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn btn-primary">Get Started</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/portfolio" className="btn btn-ghost">View Full Portfolio</Link>
              </motion.div>
            </div>
          </motion.div>
        </Section>
      </motion.div>
    </motion.div>
  );
}
