import { motion } from "framer-motion";
import Link from "next/link";
const effect = {
    position: "relative",
    zIndex: 1,
    scale: 1.1,
    transition: { duration: 0.2 },
};

export  default function AnimatedButton({children, className, href}) {
    return (
        <Link href={href}>
            <motion.a className={className} whileHover={effect} href={href}>
                {children}
            </motion.a>
        </Link>
    );
}