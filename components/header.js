import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css'
import { useState } from 'react';

export default function Header() {
    const [activatedMobileNav, setActivatedMobileNav] = useState(false);
    
    function handleClick(activatedMobileNav) {
        setActivatedMobileNav(activatedMobileNav);
    }

    return (
        <header className={styles.header_container}>
            <Image src="/logo/logo-header.png" alt="Logo LoupHost" width={40} height={82}/>
            
            {!activatedMobileNav && (
            <button type="button" onClick={() => handleClick(true)} className={styles.mobile_f_nav}>
                    <div className={styles.mobile_nav_span} style={{background: "#000000"}}/>
                    <div className={styles.mobile_nav_span} style={{background: "#000000"}}/>
                    <div className={styles.mobile_nav_span} style={{background: "#000000"}}/>
            </button>)}

            {activatedMobileNav && (
            <div className={styles.header_container}>
                <div className={styles.mobile_nav}>
                    <button type="button" onClick={() => handleClick(false)} className={styles.mobile_s_nav}>
                        <div className={styles.mobile_nav_span} style={{background: "#FFFFFF"}}/>
                        <div className={styles.mobile_nav_span} style={{background: "#FFFFFF"}}/>
                        <div className={styles.mobile_nav_span} style={{background: "#FFFFFF"}}/>
                    </button>
                    
                    <ul className={styles.mobile_nav_mainlist}>
                        <li className={styles.mobile_nav_list}>
                            <Link href="/" >
                                <a className={styles.mobile_item}>Início</a>
                            </Link>
                        </li>
                        <li className={styles.mobile_nav_list}>
                            <Link href="/plans/site">
                                <a className={styles.mobile_item}>Hospedagem de Site</a>
                            </Link>
                        </li>
                        <li className={styles.mobile_nav_list}>
                            <Link href="/plans/minecraft">
                                <a className={styles.mobile_item}>Hospedagem de Minecraft</a>
                            </Link>
                        </li>
                        <li className={styles.mobile_nav_list}>
                            <Link href="/">
                                <a className={styles.mobile_item}>Área do Cliente</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>)}

            <nav className={styles.desktop_nav}>     
                <ul className={styles.desktop_items}>
                    <li className={styles.desktop_list}>
                        <Link href="/" >
                            <a className={styles.desktop_item}>Início</a>
                        </Link>
                    </li>

                    <li className={styles.desktop_list}>
                        <Link href="/plans/site" >
                            <a className={styles.desktop_item}>Hospedagem de Site</a>
                        </Link>
                    </li>

                    <li className={styles.desktop_list}>
                        <Link href="/plans/minecraft" >
                            <a className={styles.desktop_item}>Hospedagem de Minecraft</a>
                        </Link>
                    </li>

                    <li className={styles.desktop_list}>
                        <Link href="/">
                            <a className={styles.desktop_button}>Área do Cliente</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}