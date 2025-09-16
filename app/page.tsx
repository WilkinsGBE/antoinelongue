"use client";

import { motion } from 'framer-motion';
import ReelHero from './(site)/components/ReelHero';
import CredMarquee from './(site)/components/CredMarquee';
import Section from './(site)/components/Section';
import ServiceCards from './(site)/components/ServiceCards';
import PortfolioGrid from './(site)/components/PortfolioGrid';
import SplitCTA from './(site)/components/SplitCTA';

export default function HomePage(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      <ReelHero />
      <CredMarquee />
      <motion.div variants={sectionVariants}>
        <Section>
          <motion.h2 
            className="h2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Selected Work
          </motion.h2>
          <PortfolioGrid />
        </Section>
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Section>
          <motion.h2 
            className="h2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>
          <ServiceCards />
        </Section>
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Section>
          <SplitCTA />
        </Section>
      </motion.div>
    </motion.div>
  );
}
