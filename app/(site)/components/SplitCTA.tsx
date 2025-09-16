'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SplitCTA(){
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className="a-glass p-8 md:flex items-center justify-between"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 className="h2" variants={itemVariants}>Ready to create?</motion.h3>
        <motion.p className="p" variants={itemVariants}>Bookings for teams, brands, and artists. Worldwide.</motion.p>
      </motion.div>
      <motion.div 
        className="mt-4 md:mt-0 flex gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} whileHover="hover" whileTap="tap">
          <Link href="/contact" className="btn btn-primary">Book Now</Link>
        </motion.div>
        <motion.div variants={itemVariants} whileHover="hover" whileTap="tap">
          <Link href="/services" className="btn btn-ghost">See Services</Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
