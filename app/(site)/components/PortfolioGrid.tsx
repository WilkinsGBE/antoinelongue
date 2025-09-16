'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/lib/data';
import PresetComparison from './PresetComparison';

export default function PortfolioGrid(){
  const projects = getProjects();
  
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

  const cardVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((p, index) => (
        <motion.div 
          key={p.slug} 
          className="group"
          variants={itemVariants}
        >
          {p.presetComparison ? (
            <PresetComparison
              original={p.presetComparison.original}
              preset={p.presetComparison.preset}
              title={p.title}
            />
          ) : (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative"
            >
              <Link href={`/portfolio/${p.slug}`} className="relative block overflow-hidden rounded-2xl border border-white/10">
                {p.hero && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <Image src={p.hero} alt={p.title} width={1200} height={800} className="h-64 w-full object-cover"/>
                  </motion.div>
                )}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          )}
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            <Link href={`/portfolio/${p.slug}`} className="block">
              <motion.div 
                className="font-medium hover:text-white/80 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {p.title}
              </motion.div>
              <div className="text-xs text-white/70">{p.location}</div>
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
