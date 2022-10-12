import styles from "../../styles/Hospedagem.module.css";
import {useRouter} from 'next/router'

import { motion } from "framer-motion";
import AnimatedButton from "../../components/animatedButton";
import React, { useEffect, useState } from "react";
import axios from "axios";

export async function getStaticPaths(){
    let types = [];
    let paths = [];
    
    await axios.get(`${process.env.API_URL}category`).then((response) => types = response.data.msg)

    types.forEach((t) => { if (!paths.includes({ params: {type: t.type }})) paths.push({ params: {type: t.type }}) });

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const type = context.params.type;
    let avaliableDatacenters = null;   

    await axios.get(`${process.env.API_URL}category/${type}`).then((response) => { avaliableDatacenters = response.data.msg; }).catch((err) => console.log(err));

    return {
        props: {
            avaliableDatacenters: avaliableDatacenters
        }
    }
}

export default function Plan(props) { 
    let categories = props.avaliableDatacenters;
    const dynamicRoute = useRouter().asPath;

    const [datacenter, selectDatacenter] = useState(categories[0]);

    useEffect(() => {
        selectDatacenter(categories[0]);
    }, [dynamicRoute]);

    function handleClick(dataBase) {
        selectDatacenter(dataBase);
    }

    return (
        <>
          <section className={styles.datacenter_selector}>
            <div className="container">
                <div className={styles.datacenter_selector_container}>
                    <div className={styles.datacenter_text_container}>
                        <h1 className={styles.datacenter_title}>Encontre aqui um plano que <strong>atende suas necessidades</strong> e <strong>cabe no seu bolso</strong>!</h1>
                        <h4 className={styles.datacenter_text}>Selecione a localização do datacenter</h4>
                        <div className={`${styles.datacenters_container}`}>
                            {categories.map((dc, index) => {
                            if (dc.id === datacenter.id) {
                                return (         
                                    <button onClick={() => handleClick(dc)} className={`${styles.datacenter_selected}`} key={index}>
                                        <div className={styles.datacenter_icon} style={{background: `url(../../${dc.iconUrl}) 0 no-repeat`}}/> 
                                        <p className={styles.datacenter_name_selected}>{`${dc.displayName}, ${dc.id}`}</p>
                                    </button>
                                );
                             } else {
                                return (       
                                    <a onClick={() => handleClick(dc)} className={`${styles.datacenter}`} key={index}>
                                        <div className={styles.datacenter_icon} style={{background: `url(../../${dc.iconUrl}) 0 no-repeat`}}/> 
                                        <p className={styles.datacenter_name}>{`${dc.displayName}, ${dc.id}`}</p>
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
                {datacenter.plans.map((plan, index) => (
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
                                <AnimatedButton className={styles.price_buy_button} href="#">COMPRAR</AnimatedButton>
                            </div>

                        </motion.div> 
                        ))}
            </div>
        </section>
        </>
    );
}