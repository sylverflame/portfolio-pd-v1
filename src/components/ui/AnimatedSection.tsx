import { HTMLMotionProps, motion } from "framer-motion";

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  children: React.ReactNode;
};
function AnimatedSection({ children, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      {...props}
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
