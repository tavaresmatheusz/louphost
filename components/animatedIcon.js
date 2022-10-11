import { motion } from "framer-motion";
const hover = { scale: 1.2, rotate: 10 };
const tap = {scale: 0.8, rotate: 10};

export  default function AnimatedIcon({children, className}) {
    return (
            <motion.div className={className} whileHover={hover} whileTap={tap}>
                {children}
            </motion.div>
    );
}