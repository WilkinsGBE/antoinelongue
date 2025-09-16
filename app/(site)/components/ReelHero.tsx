'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getSite } from '@/lib/data';

export default function ReelHero(){
  const site = getSite();
  
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

  const itemVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
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
    <div className="relative h-[80svh] md:h-[88svh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image 
          src="/Antoine.jpg" 
          alt="Antoine Longue - Graphic Designer & Photographer"
          fill
          className="object-cover object-center"
          style={{ objectPosition: 'center 20%' }}
          priority
        />
      </motion.div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-end px-6 md:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="h1 max-w-3xl" variants={itemVariants}>
          Cinematic Photography. Elite Graphic Design.
        </motion.h1>
        <motion.p className="p mt-4 max-w-2xl" variants={itemVariants}>
          {site.tagline}
        </motion.p>
        <motion.div className="mt-6 flex gap-3" variants={itemVariants}>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link href="/portfolio" className="btn btn-primary">View Portfolio</Link>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link href="/services" className="btn btn-ghost">Explore Services</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
