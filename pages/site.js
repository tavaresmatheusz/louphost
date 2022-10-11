import styles from "../styles/Hospedagem.module.css";
import React from "react";

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
    const [dbase, selectDatabase] = React.useState("BR");
    let puta = databases.find(({ id }) => id === dbase);
    

    function handleClick(dataBase) {
        selectDatabase(dataBase);
    }

    return (
        <section className={styles.database_selector}>
            <div className="container">
                <div className={styles.database_text_container}>
                    <h1 className={styles.database_title}>Encontre aqui um plano que <strong>atende suas necessidades</strong> e <strong>cabe no seu bolso</strong>!</h1>
                    <h4 className={styles.database_text}>Selecione a localização do datacenter</h4>
                    <div className={`${styles.databases_container}`} id="database_container">
                        {databases.map((db, index) => {
                        if (db.id === dbase) {
                            return (         
                                <button onClick={() => handleClick(db.id)} className={`${styles.database_selected}`} id={`${db.id}-button`} key={index}>
                                    <div className={db.icon}/> 
                                    <p className={styles.database_name_selected}>{db.displayName}</p>
                                </button>
                            );
                            } else {
                            return (       
                                <a onClick={() => handleClick(db.id)} id={`${db.id}-button`} className={`${styles.database}`} key={index}>
                                    <div className={db.icon}/> 
                                    <p className={styles.database_name}>{db.displayName}</p>
                                </a>
                            );
                            }
                        })}	
                    </div>
                </div>
                <div className={styles.prices}>         

                    <div className={styles.prices_box_container}>

                        {puta.plans.map((plan) => (
                        <div className={styles.price_box}>
                            <h4 className={styles.price_title}><strong>R$</strong> {plan.price}</h4>
                            <div className={styles.price_waves}/>

                            <div className={styles.price_spec}>
                                <div className={styles.browser_icon}/>
                                <p>Painel: <strong>{plan.panel}</strong></p>
                            </div>

                            <div className={styles.price_spec}>
                                <div className={styles.storage_icon}/>
                                <p>Disco: <strong>{plan.disk}</strong></p>
                            </div>

                            <div className={styles.price_spec}>
                                <div className={styles.processor_icon}/>
                                <p>Processador: <strong>{plan.processor}</strong></p>
                            </div>

                            <div className={styles.price_spec}>
                                <div className={styles.disk_icon}/>
                                <p>Memória RAM: <strong>{plan.ram}</strong></p>
                            </div>

                        </div> ))}

                    </div>

                </div>
            </div>
        </section>
    );
}