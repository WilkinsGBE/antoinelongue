'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type F = { name:string; email:string; message:string; service:string };
export default function ContactForm(){
  const {register,handleSubmit,formState:{isSubmitting,isSubmitSuccessful}} = useForm<F>();
  const onSubmit = async (data:F)=>{
    await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)});
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="a-glass p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="mb-6 text-center"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="h2 mb-2">Get Your Quote Today</h3>
        <p className="p text-white/70">Fill out the form below and I&apos;ll get back to you within 24 hours</p>
      </motion.div>
      <motion.form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <motion.input 
            className="w-full a-glass p-3" 
            placeholder="Your full name" 
            {...register('name',{required:true})}
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.input 
            className="w-full a-glass p-3" 
            placeholder="your@email.com" 
            type="email" 
            {...register('email',{required:true})}
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.select 
            className="w-full a-glass p-3" 
            {...register('service')}
            whileFocus="focus"
            variants={inputVariants}
          > 
            <option value="">Select a service</option>
            <option>Photography & Videography</option>
            <option>Graphic Design</option>
            <option>Lightroom Presets</option>
          </motion.select>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.textarea 
            className="w-full a-glass p-3" 
            rows={6} 
            placeholder="Tell me about your project: What's the event/match/campaign? When is it? Where will it take place? What's your vision?" 
            {...register('message',{required:true})}
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.button 
            className="btn btn-primary w-full py-4 text-lg font-semibold" 
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending your message...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                Send My Project Inquiry
              </>
            )}
          </motion.button>
        </motion.div>
        {isSubmitSuccessful && (
          <motion.div 
            className="mt-6 p-6 a-glass border-green-400/30 bg-green-400/5"
            variants={successVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.svg 
                className="w-6 h-6 text-green-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </motion.svg>
              <h4 className="h2 text-green-400">Message Sent Successfully!</h4>
            </div>
            <p className="p mb-4">Thank you for reaching out! I&apos;ve received your project inquiry and will get back to you within 24 hours with:</p>
            <motion.ul 
              className="space-y-2 text-sm text-white/80"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li className="flex items-center gap-2" variants={itemVariants}>
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Detailed project quote and timeline</span>
              </motion.li>
              <motion.li className="flex items-center gap-2" variants={itemVariants}>
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Availability confirmation</span>
              </motion.li>
              <motion.li className="flex items-center gap-2" variants={itemVariants}>
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Next steps for moving forward</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
}
