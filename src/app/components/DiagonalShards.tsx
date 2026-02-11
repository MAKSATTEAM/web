import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function DiagonalShards() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden opacity-40">
      {/* Shard 1 */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-12%] right-[-12%] w-[65%] h-[55%] sm:top-[-10%] sm:right-[-5%] sm:w-[45%] sm:h-[70%] rotate-[-15deg] rounded-[24px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div 
          className="w-full h-full rounded-[24px]"
          style={{
            background: 'linear-gradient(135deg, rgba(45, 48, 58, 0.4) 0%, rgba(25, 28, 36, 0.6) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.3)',
          }}
        />
      </motion.div>
      
      {/* Shard 2 */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-18%] right-[5%] w-[70%] h-[50%] sm:bottom-[-15%] sm:right-[15%] sm:w-[50%] sm:h-[60%] rotate-[25deg] rounded-[24px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div 
          className="w-full h-full rounded-[24px]"
          style={{
            background: 'linear-gradient(120deg, rgba(42, 45, 55, 0.35) 0%, rgba(28, 31, 40, 0.55) 50%, rgba(35, 38, 50, 0.4) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.3)',
          }}
        />
      </motion.div>
      
      {/* Shard 3 */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute top-[25%] left-[-18%] w-[60%] h-[50%] sm:top-[20%] sm:left-[-8%] sm:w-[40%] sm:h-[65%] rotate-[35deg] rounded-[24px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div 
          className="w-full h-full rounded-[24px]"
          style={{
            background: 'linear-gradient(140deg, rgba(38, 41, 52, 0.38) 0%, rgba(22, 25, 33, 0.58) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 8px 32px rgba(0,0,0,0.3)',
          }}
        />
      </motion.div>

      {/* Subtle highlight overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.02) 0%, transparent 50%)',
        }}
      />
    </div>
  );
}
