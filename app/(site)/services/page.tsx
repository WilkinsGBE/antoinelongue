'use client';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ServiceCards from '../components/ServiceCards';

export default function ServicesPage(){
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
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Section className="text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="h1 mb-6">Professional Creative Services</h1>
            <p className="p text-xl max-w-2xl mx-auto">
              Elevating sports photography, graphic design, and visual storytelling with cinematic quality and professional expertise.
            </p>
          </motion.div>
        </Section>
      </motion.div>

      {/* Services Section */}
      <motion.div variants={itemVariants}>
        <Section>
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="h2 mb-4">What We Offer</h2>
              <p className="p text-lg max-w-2xl mx-auto">
                From matchday coverage to brand campaigns, we deliver exceptional visual content that captures the essence of your story.
              </p>
            </motion.div>
            <ServiceCards />
          </div>
        </Section>
      </motion.div>

      {/* Presets Section */}
      <motion.div variants={itemVariants}>
        <Section>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              id="presets" 
              className="a-glass p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="max-w-2xl mx-auto">
                <h3 className="h2 mb-4">Lightroom Presets</h3>
                <p className="p text-lg mb-6">
                  Film‑inspired color science for speed and consistency across your photography projects. 
                  Professional-grade presets that bring cinematic quality to your workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Shop Presets
                  </motion.button>
                  <motion.button 
                    className="btn btn-ghost"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Samples
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </motion.div>
    </motion.div>
  );
}
