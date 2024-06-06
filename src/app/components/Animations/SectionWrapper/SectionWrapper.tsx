import React, {ReactNode, useEffect, useRef} from "react";
import {motion, useAnimation} from "framer-motion";

interface SectionWrapperProps {
    children: ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                }
            });
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                hidden: { opacity: 0, y: 50 },
            }}
        >
            {children}
        </motion.div>
    );
};