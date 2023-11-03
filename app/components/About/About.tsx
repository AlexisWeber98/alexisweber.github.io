import Image from "next/image";
import Ale from "../../assets/Ale.png";
import styles from "./About.module.css";
export default function About() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.photo}>
          <Image
            src={Ale}
            alt="Alexis Weber"
            width={300}
            height={300}
            style={{ borderRadius: "1em" }}
          />
        </div>
        <article className={styles.article}>
          <h2 className="title">¿Quien Soy?</h2>
          <br />

          <p className={styles.description}>
            Soy desarrollador full stack, con gran interés en aprender cosas
            nuevas, curiosidad y trabajo en quipo, apasionado de los nuevos
            desafíos. <br />
            Con Experiencia en Javascript, Typescript, Redux, css, HTML, así
            como frameworks como Vite, Next.js, React, React Native, entornos y
            tecnologías como Node.js, Express, Sequelize, y bases de datos
            relacionales como PostgreSQL, y metodologías ágiles como SCRUM
          </p>
        </article>
      </div>
      <hr />
    </main>
  );
}
