
import Head from 'next/head';
import Header from  './header.js';
import Footer from  './footer.js';
import { Html } from 'next/document.js';

export default function Layout({children, className}){ 
    return (
        <>  
        <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta name="description" content="Compre hospedagens de alta performance com preço acessível"/>
                <link rel="canonical" href="https://loup.host"/>
                <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
             />
            <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
             rel="stylesheet"/>
                <title>LoupHost - Hospedagem sem dor de cabeça</title>
        </Head>
        <div className={className}>
            <div className="container">
                <Header/>
            </div>
                
            <main>
                {children}
            </main>    
                
            <Footer/>
        </div>
        </>
    )
}