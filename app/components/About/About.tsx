import Image from "next/image";
import Ale from "../../assets/Ale.png";
import styles from "./About.module.css";
import Link from "next/link";
export default function About() {
  const github = {
    image:
      "https://imgs.search.brave.com/7OH5gjdC_ib9rIl6KA7rczFVCfU96koDIvzb_vhq8Vg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2l0aHViL3Nt/YWxsL2dpdGh1Yl9Q/Tkc4NS5wbmc",
    name: "GitHub",
    url: "https://github.com/alexisweber98",
  };

  const linkedin = {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aleweber",
    image:
      "https://imgs.search.brave.com/6o1uHlWZtKkStyHClxQqDzeNIhL3lvmf2iKi_XF70EY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvcG9wdWxhci1z/b2NpYWwtbWVkaWEt/ZmxhdC80OC9Qb3B1/bGFyX1NvY2lhbF9N/ZWRpYS0yMi0xMjgu/cG5n",
  };

  const contactAcount = [github, linkedin];

  const acount = contactAcount.map((acount) => {
    return (
      <div key={acount.name}>
        <Link href={acount.url}>
          <div className={styles.image}>
            <Image
              src={acount.image}
              alt={acount.name}
              width={60}
              height={60}
            />
          </div>
          <p>{acount.name}</p>
        </Link>
      </div>
    );
  });
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
          <div className={styles.imagecontainer}>{acount}</div>
        </article>
      </div>
      <hr />
    </main>
  );
}
