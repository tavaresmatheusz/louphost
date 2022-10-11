import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className={`${styles.apresentation} container`}>
        <div className={styles.text_box}>
          <h2 className={`${styles.text} ${styles.apresentation_textspacing}`}>
            O <strong>pontapé</strong> que seu projeto precisa
          </h2>
          <h1 className={`${styles.title} ${styles.titles_spacing}`}>
            Crie seu projeto com <strong>simplicidade</strong>,{" "}
            <strong>potência</strong> e <strong>baixo custo</strong>!
          </h1>
          <p className={`${styles.text} ${styles.titles_spacing}`}>
            Consiga tudo o que é nescessário para mostrar seu projeto para o
            junto da <strong>loup.host</strong>, aqui você encontra hospedagem
            de site apartir de <strong>R$ 3,00</strong> com{" "}
            <strong>99.9% de uptime</strong> e{" "}
            <strong>e-mails ilimitados</strong>!
          </p>

          <div className={styles.text_btns_box}>
            <Link href="#">
              <motion.a
                href="#"
                className={styles.filled_btn}
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                ÁREA DO CLIENTE
              </motion.a>
            </Link>
            <Link href="#">
              <motion.a
                href="#"
                className={styles.unfilled_btn}
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                SAIBA MAIS
              </motion.a>
            </Link>
          </div>
        </div>

        <div className={styles.image_box}>
          <Image
            src="/image-apresentation.svg"
            alt="Servers"
            width={790}
            height={790}
          />
        </div>
      </section>

      <section className={`${styles.reasons}`}>
        <div className="container">
          <div className={styles.reasons_title_box}>
            <h4 className={`${styles.reasons_title} ${styles.title}`}>
              Por que a loup.host
            </h4>
            <div className={styles.reason_why_icon}/>
          </div>

          <div className={styles.reasons_icons}>
            <div className={styles.reason}>
              <motion.div
                className={styles.reason_icon}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 10,
                }}
              >
                <Image
                  src="/icons/Buy.png"
                  alt="Buy"
                  width={35}
                  height={35}
                  className={styles.reason_icon_image}
                />
              </motion.div>
              <p className={styles.reason_title}>Compra rápida e fácil</p>
            </div>

            <div className={`${styles.reason}`}>
              <motion.div
                className={styles.reason_icon}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 10,
                }}
              >
                <Image
                  src="/icons/Unlock.png"
                  alt="Security"
                  width={34}
                  height={40}
                  className={styles.reason_icon_image}
                />
              </motion.div>
              <p className={styles.reason_title}>Segurança e facilidade</p>
            </div>

            <div className={`${styles.reason}`}>
              <motion.div
                className={styles.reason_icon}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 10,
                }}
              >
                <Image
                  src="/icons/Volume-Down.png"
                  alt="Support"
                  width={36}
                  height={36}
                  className={styles.reason_icon_image}
                />
              </motion.div>
              <p className={styles.reason_title}>Suporte 24/7</p>
            </div>
          </div>

          <div className={styles.reasons_icons}>
            <div className={styles.reason}>
              <motion.div
                className={styles.reason_icon}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 10,
                }}
              >
                <Image
                  src="/icons/Calendar.png"
                  alt="Calendar"
                  width={36}
                  height={40}
                  className={styles.reason_icon_image}
                />
              </motion.div>
              <p className={styles.reason_title}>99.9% de uptime</p>
            </div>

            <div className={`${styles.reason}`}>
              <motion.div
                className={styles.reason_icon}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 10,
                }}
              >
                <Image
                  src="/icons/Swap.png"
                  alt="Swap"
                  width={48}
                  height={48}
                  className={styles.reason_icon_image}
                />
              </motion.div>
              <p className={styles.reason_title}>Conexão segura e rápida</p>
            </div>

            <div className={`${styles.reason}`}>
              <motion.div
                className={styles.reason_icon}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 10,
                }}
              >
                <Image
                  src="/icons/Discount.png"
                  alt="Discount"
                  width={48}
                  height={48}
                  className={styles.reason_icon_image}
                />
              </motion.div>
              <p className={styles.reason_title}>Preços acessíveis</p>
            </div>
          </div>
          <div className={styles.ptero_panel}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image
                src="/ptero-panel-image.png"
                alt="Pterodactyl Panel"
                width={702}
                height={410}
                className={styles.ptero_image}
              />
            </motion.div>
            <div className={styles.ptero_text}>
              <h2 className={styles.subtitle}>
                Para hospedagens de <strong>Minecraft</strong>
              </h2>
              <h4
                className={`${styles.title}`}
                style={{ paddingTop: 20 + "px" }}
              >
                Painel <strong>Pterodactyl</strong>
              </h4>
              <p
                className={`${styles.text_panel}`}
                style={{ paddingTop: 20 + "px" }}
              >
                Painel <strong>intuitivo</strong> e <strong>simples</strong>{" "}
                para o maior entendimento e facilidade do usuario
              </p>
            </div>
          </div>
          <div className={styles.cpanel_panel}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image
                src="/cpanel-panel-image.png"
                alt="Cpanel Panel"
                width={702}
                height={410}
                className={styles.cpanel_image}
              />
            </motion.div>
            <div className={styles.cpanel_text}>
              <h2 className={styles.subtitle}>
                Para hospedagens de <strong>Site</strong>
              </h2>
              <h4
                className={`${styles.title}`}
                style={{ paddingTop: 20 + "px" }}
              >
                Painel <strong>Cpanel</strong>
              </h4>
              <p
                className={`${styles.text_panel}`}
                style={{ paddingTop: 20 + "px" }}
              >
                Painel <strong>completo</strong>, <strong>intuitivo</strong> e{" "}
                <strong>simples</strong> para o maior entendimento e facilidade
                do usuario
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.goals}>
        <div className={`${styles.goals_container} container`}>

          <div className={styles.goals_text_container}>
            <div className={styles.goals_title_container}>
              <h4 className={styles.goals_title}>Alcance suas metas</h4> <div className={styles.goals_title_icon} />
            </div>
            <p className={styles.goals_text}>Conosco você pode realizar! Alcance suas metas e tenha um ótimo desempenho juntamente com uma hospedagem com <strong>99.9% de uptime</strong> e <strong>1TB de rede</strong>.</p>
          </div>
          <Image src="/image-goals.svg" alt="Goals" width={797} height={531}/>
          
        </div>
      </section>
      <section className={`${styles.free_trial}`}>
        <div className={`${styles.free_trial_container} container`}>
          <motion.h4 className={styles.free_trial_text} whileHover={{
                  position: "relative",
                  zIndex: 1,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}>Solicite um teste de <strong>7 dias</strong> para comprovar nossa <strong>qualidade</strong>.</motion.h4>
          <Link href="#">
              <motion.a
                href="#"
                className={styles.free_trial_btn}
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
              SOLICITAR
              </motion.a>
          </Link>
        </div>
      </section>
    </>
  );
}
