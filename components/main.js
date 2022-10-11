
import Head from 'next/head';
import Header from  './header.js';
import Footer from  './footer.js';
import { motion } from 'framer-motion';
const variants = {
    hidden: { opacity: 0, x: -5, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -10 },
}

export default function Main({ children }){ 
    return (
        <>
            <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <meta name="description" content="Compre hospedagens de alta performance com preço acessível"/>
            <link rel="canonical" href="https://loup.host"/>

            <title>LoupHost - Hospedagem sem dor de cabeça</title>
            </Head>
            
            <div className="container">
                <Header/>
            </div>
            <motion.main initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}>
                {children}
            </motion.main>
            
            <Footer/>
        </>
    )
}