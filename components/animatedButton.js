import { motion } from "framer-motion";
const effect = {
    position: "relative",
    zIndex: 1,
    scale: 1.1,
    transition: { duration: 0.2 },
};

export  default function AnimatedButton({children, className}) {
    return (
            <motion.a className={className} whileHover={effect}>
                {children}
            </motion.a>
    );
}