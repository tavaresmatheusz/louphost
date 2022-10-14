import styles from "../../styles/Hospedagem.module.css";
import {useRouter} from 'next/router'
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "../../components/animatedButton";
import React, { useEffect, useState } from "react";
import mongoConnect from "../../utils/mongoConnect";
import Datacenter from "../../models/Datacenter";

export async function getStaticPaths(){
    let paths = [];
    
    await mongoConnect();

    await Datacenter.find({}).then((dc) => {
        dc.forEach((d) => {
            paths.push({ params: {type: d.node }})
            
        });
    });
    console.log(paths);
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const type = context.params.type;

    let image = null;
    let imageSize = null;
    let avaliableDatacenters = [];


    await mongoConnect();

    await Datacenter.findOne({ node: type}).then((datacenter) => {

        datacenter.datacenters.forEach(dc => { 
            dc.plans.sort(function (x, y) { return x.price - y.price; })
            avaliableDatacenters.push(JSON.stringify({city: dc.city, country: dc.country, countryFlagUrl: dc.countryFlagUrl, plans: dc.plans}));
        });
        
        image = datacenter.nodeImage.url;
        imageSize = JSON.stringify(datacenter.nodeImage.size);
    });

    return {
        props: {
            avaliableDatacenters: avaliableDatacenters,
            image: image,
            imageSize: imageSize,
            page: "Plan"
        }
    }
}

export function className() {  return "Plan"}
export default function Plan(props) { 
    let avaliableDatacenters = props.avaliableDatacenters;

    let image = props.image;
    let imageSize = JSON.parse(props.imageSize);

    const dynamicRoute = useRouter().asPath;

    const [datacenter, selectDatacenter] = useState(JSON.parse(avaliableDatacenters[0]));

    useEffect(() => {
        let jsonDatacenter = JSON.parse(avaliableDatacenters[0]);
        selectDatacenter(jsonDatacenter);
    }, [dynamicRoute, avaliableDatacenters]);

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
                                    {avaliableDatacenters.map((dc, index) => {
                                    dc = JSON.parse(dc);
                                    if (dc.city === datacenter.city && dc.country === datacenter.country) {
                                        return (         
                                            <button onClick={() => handleClick(dc)} className={`${styles.datacenter_selected}`} key={index}>
                                                <div className={styles.datacenter_icon} style={{background: `url(../../${dc.countryFlagUrl}) 0 no-repeat`}}/> 
                                                <p className={styles.datacenter_name_selected}>{`${dc.city}, ${dc.country}`}</p>
                                            </button>
                                        );
                                    } else {
                                        return (       
                                            <a onClick={() => handleClick(dc)} className={`${styles.datacenter}`} key={index}>
                                                <div className={styles.datacenter_icon} style={{background: `url(../../${dc.countryFlagUrl}) 0 no-repeat`}}/> 
                                                <p className={styles.datacenter_name}>{`${dc.city}, ${dc.country}`}</p>
                                            </a>
                                        );
                                        }
                                    })}	
                                </div>
                        </div>
                        <div className={styles.image_container}>
                                <Image src={`${image}`} alt="Node image" width={imageSize.imageWidth} height={imageSize.imageHeight}/>
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