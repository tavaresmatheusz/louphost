
import styles from '../styles/Footer.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
    <footer>
      <div className="container">
        <div className={styles.footer_container}>
            <div className={`${styles.brand} footer-item`}>
                <div className={styles.brand_container}>
                    <div className={styles.brand_logo}/>
                    <h4 className={styles.brand_name}>loup.host</h4>
                </div>
                <p className={styles.brand_subtitle}>QUALIDADE & SEGURANÇA NO MESMO LUGAR</p>
                <Image src="/payment.png" alt="Payment" width={387} height={142}/>
            </div>

            <div className={`${styles.utils} footer-item`}>
                
                <h4 className={styles.links_title}>Links Úteis</h4>
                <ul>
                    <li className={styles.links_nav}>
                        <Link href="/">
                            <a className={styles.links_item}>Início</a>
                        </Link>
                    </li>
                    <li className={styles.links_nav}>
                        <Link href="/site">
                            <a className={styles.links_item}>Hospedagem de Site</a>
                        </Link>
                    </li>
                    <li className={styles.links_nav}>
                        <Link href="/minecraft">
                            <a className={styles.links_item}>Hospedagem de Minecraft</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={`${styles.utils} footer-item`}>
                
                <h4 className={styles.links_title}>Área do Cliente</h4>
                <ul>
                    <li className={styles.links_nav}>
                        <Link href="/">
                            <a className={styles.links_item}>Página do Cliente</a>
                        </Link>
                    </li>
                    <li className={styles.links_nav}>
                        <Link href="/">
                            <a className={styles.links_item}>Meus serviços</a>
                        </Link>
                    </li>
                    <li className={styles.links_nav}>
                        <Link href="/">
                            <a className={styles.links_item}>Minhas faturas</a>
                        </Link>
                    </li>
                    <li className={styles.links_nav}>
                        <Link href="/">
                            <a className={styles.links_item}>Abrir um ticket</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <Link href={"https://github.com/tavaresmatheusz/louphost"}>
                <div className={`${styles.dev} footer-item`}>
                    <Image src="/matheus.png" alt="Matheus Tavares" width={139} height={54}/>
                </div>
            </Link>
        </div>
       </div>
    </footer>
    );
}