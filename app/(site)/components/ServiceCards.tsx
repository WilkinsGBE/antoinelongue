'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/lib/data';

export default function ServiceCards(){
  const list = getServices();
  
  // Service images mapping
  const serviceImages = {
    'photography-videography': '/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/46e02892-86b8-4a73-a5cd-c05843de35ab_rw_1920.jpg',
    'graphic-design': '/portfolio/MEDIA DAY SOCCER CVM/c682f22f-b0bf-4be1-8db6-87370104d86e_rw_1920.jpg',
    'lightroom-presets': '/portfolio/CAMP RETOUR À L\'ORIGINE/2dda9cc1-d428-4c0a-b131-b028190b2ac0_rw_1920.jpg'
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {list.map((s, index) => (
        <motion.div 
          key={s.slug} 
          className="a-glass p-8 group service-card"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div 
            className="relative h-64 mb-6 overflow-hidden rounded-2xl"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image 
              src={serviceImages[s.slug as keyof typeof serviceImages]} 
              alt={s.title}
              fill
              className="object-cover"
            />
            <motion.div 
              className="absolute inset-0 service-image-overlay"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-4 left-4 right-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="h2 text-white mb-2">{s.title}</h3>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.7 }}
            viewport={{ once: true }}
          >
            <p className="p text-lg leading-relaxed">{s.summary}</p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-white/90 text-sm uppercase tracking-wider">What&apos;s Included:</h4>
              <motion.ul 
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {s.bullets.map((b:string, bulletIndex) => (
                  <motion.li 
                    key={b} 
                    className="flex items-start gap-3 text-white/80"
                    variants={bulletVariants}
                    custom={bulletIndex}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-sm">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <div className="pt-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href={s.slug==='lightroom-presets'?'/services#presets':'/contact'} 
                  className="btn btn-primary w-full justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                >
                  {s.cta}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
