
import Head from 'next/head';
import Header from  './header.js';
import Footer from  './footer.js';

export default function Layout({children}){ 
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
            
            <main>
                {children}
            </main>    
            
            <Footer/>
        </>
    )
}