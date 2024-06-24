import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, PropsWithChildren } from "react";

export const Reveal = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      //eslint-disable-next-line
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
