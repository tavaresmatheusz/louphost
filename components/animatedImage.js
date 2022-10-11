import { motion } from "framer-motion";
const hover = { scale: 1.1 };

export  default function AnimatedImage({children, className}) {
    return (
            <motion.div className={className} whileHover={hover}>
                {children}
            </motion.div>
    );
}