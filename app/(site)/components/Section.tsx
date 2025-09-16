'use client';
import { motion } from 'framer-motion';

export default function Section({id,children, className}:{id?:string; children:React.ReactNode; className?:string}){
  return (
    <motion.section 
      id={id} 
      className={`section ${className||''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}
