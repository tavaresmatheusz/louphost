import styles from "../styles/Hospedagem.module.css";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "../components/animatedButton";

const databases = [{ 
    displayName: "SP - BR", id: "BR", icon: styles.database_br_icon, plans: [
    { 
       price: 150, 
       ram: "3GB",
       panel: "Pterodactyl",
       disk: "10 GB SSD",
       processor: "XEON E5" 
    },
    {   
        price: 200, 
        ram: "4GB",
        panel: "Pterodactyl",
        disk: "10 GB SSD",
        processor: "XEON E5"  
    },
    {   
        price: 250, 
        ram: "5GB",
        panel: "Pterodactyl",
        disk: "10 GB SSD",
        processor: "XEON E5"  
    }]
    
    }, 
    {displayName: "TX - USA", id: "USA", icon: styles.database_usa_icon, plans: [
        { 
           price: 100, 
           ram: "3GB",
           panel: "Pterodactyl",
           disk: "10 GB SSD",
           processor: "XEON E5" 
        },
        {   
            price: 150, 
            ram: "4GB",
            panel: "Pterodactyl",
            disk: "10 GB SSD",
            processor: "XEON E5"  
        },
        {   
            price: 200, 
            ram: "5GB",
            panel: "Pterodactyl",
            disk: "10 GB SSD",
            processor: "XEON E5" 
        }]
}];

export default function Site() {
    const [dbase, selectDatabase] = React.useState(databases[0]);
    

    function handleClick(dataBase) {
        selectDatabase(dataBase);
    }

    return (
        <>
        <section className={styles.database_selector}>
            <div className="container">
                <div className={styles.database_selector_container}>
                    <div className={styles.database_text_container}>
                        <h1 className={styles.database_title}>Encontre aqui um plano que <strong>atende suas necessidades</strong> e <strong>cabe no seu bolso</strong>!</h1>
                        <h4 className={styles.database_text}>Selecione a localização do datacenter</h4>
                        <div className={`${styles.databases_container}`} id="database_container">
                            {databases.map((db, index) => {
                            if (db.id === dbase.id) {
                                return (         
                                    <button onClick={() => handleClick(db)} className={`${styles.database_selected}`} id={`${db.id}-button`} key={index}>
                                        <div className={db.icon}/> 
                                        <p className={styles.database_name_selected}>{db.displayName}</p>
                                    </button>
                                );
                                } else {
                                return (       
                                    <a onClick={() => handleClick(db)} id={`${db.id}-button`} className={`${styles.database}`} key={index}>
                                        <div className={db.icon}/> 
                                        <p className={styles.database_name}>{db.displayName}</p>
                                    </a>
                                );
                                }
                            })}	
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={`${styles.prices} container`}>
            <div className={styles.prices_box_container}>
                {dbase.plans.map((plan, index) => (
                    <motion.div className={styles.price_box} key={`${index}-plan`} whileHover={{
                        position: "relative",
                        zIndex: 1,
                        scale: 1.1,
                        boxShadow: "0px 4px 3px 4px rgba(0,0,0,0.6)",
                        transition: { duration: 0.2 },
                      }}>
                        <div className={styles.price}>
                            <h4 className={styles.price_title}>R$</h4>
                            <p className={styles.price_title_price}>{plan.price}</p>
                        </div>

                        <div className={styles.price_waves}/>

                        <div className={styles.price_spec}>
                            <div className={styles.browser_icon}/>
                            <p className={styles.price_spec_text}>Painel: <strong>{plan.panel}</strong></p>
                        </div>

                        <div className={styles.price_spec}>
                            <div className={styles.storage_icon}/>
                                <p className={styles.price_spec_text}>Disco: <strong>{plan.disk}</strong></p>
                            </div>

                            <div className={styles.price_spec}>
                                <div className={styles.processor_icon}/>
                                <p className={styles.price_spec_text}>Processador: <strong>{plan.processor}</strong></p>
                            </div>

                            <div className={styles.price_spec}>
                                <div className={styles.disk_icon}/>
                                <p className={styles.price_spec_text}>Memória RAM: <strong>{plan.ram}</strong></p>
                            </div>

                            <div className={styles.price_button_container}>
                                <Link href="#">
                                    <AnimatedButton className={styles.price_buy_button}>COMPRAR</AnimatedButton>
                                </Link>
                            </div>

                        </motion.div> 
                        ))}
            </div>
        </section>
        </>
    );
}