import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header>
            <Image src="/logo/logo-header.png" alt="Logo LoupHost" width={40} height={82}/>

            <nav className={styles.desktop_nav}>     
                <ul className={styles.desktop_items}>
                    <li className={styles.desktop_list}>
                        <Link href="/" >
                            <a className={styles.desktop_item}>Início</a>
                        </Link>
                    </li>

                    <li className={styles.desktop_list}>
                        <Link href="/site" >
                            <a className={styles.desktop_item}>Hospedagem de Site</a>
                        </Link>
                    </li>

                    <li className={styles.desktop_list}>
                        <Link href="/minecraft" >
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