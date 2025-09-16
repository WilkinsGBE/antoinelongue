'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getSite } from '@/lib/data';

export default function Header(){
  const [scrolled,setScrolled]=useState(false);
  const site = getSite();
  
  useEffect(()=>{ const onScroll=()=>setScrolled(window.scrollY>10); window.addEventListener('scroll',onScroll); return ()=>window.removeEventListener('scroll',onScroll); },[]);
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
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
    <motion.header 
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled?'bg-black/50 backdrop-blur border-b border-white/10':'bg-transparent'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.nav 
        className="container-soft py-4 flex items-center justify-between"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex flex-col"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="font-display text-xl">{site.name}</Link>
          <span className="text-xs text-white/60 hidden md:block">{site.bio.title}</span>
        </motion.div>
        <div className="flex gap-6 text-sm items-center">
          <motion.div variants={linkVariants} whileHover="hover">
            <Link href="/portfolio">Portfolio</Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover">
            <Link href="/services">Services</Link>
          </motion.div>
          <div className="hidden md:flex items-center gap-3 text-xs text-white/60">
            <motion.div 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{site.locations.join('/')}</span>
            </motion.div>
            <span>•</span>
            <motion.div 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>{site.bio.clients}</span>
            </motion.div>
          </div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link href="/contact" className="btn btn-primary">Book Now</Link>
          </motion.div>
        </div>
      </motion.nav>
    </motion.header>
  );
}
