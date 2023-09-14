import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };
  
  const MotionPage = ({ children }) => {
    return (
      <motion.div 
        initial="initial" 
        animate="in" 
        exit="out" 
        variants={pageVariants} 
        transition={pageTransition}
        layout
      >
        {children}
      </motion.div>
    );
  }
  
  export default MotionPage;