import Image from "next/image";
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

  const accounts = contactAcount.map((account) => {
    return (
      <>
        <Link href={account.url} key={account.name}>
          <div className={styles.image}>
            <Image
              src={account.image}
              alt={account.name}
              width={60}
              height={60}
            />
          </div>
          <p>{account.name}</p>
        </Link>
      </>
    );
  });
  return (
    <section>
      <div className={styles.container}>
        <article className={styles.article}>
          <h2 className="title">¿Quien Soy?</h2>
          <br />

          <section>
            <p>
              Soy un <strong>desarrollador Full Stack</strong> apasionado por la
              tecnología y la programación. Siempre he tenido un gran interés en
              aprender cosas nuevas y enfrentar nuevos desafíos. Mi curiosidad y
              mi capacidad para trabajar en equipo me han permitido desarrollar
              una amplia gama de habilidades en el campo del desarrollo web.
            </p>
          </section>
          <section>
            <p className={styles.description}>
              A lo largo de mi carrera, he adquirido experiencia en una variedad
              de lenguajes y tecnologías, incluyendo <strong>Javascript</strong>
              , <strong>Typescript</strong>, <strong>Redux</strong>,{" "}
              <strong>CSS</strong>, y <strong>HTML</strong>. También he
              trabajado con frameworks como <strong>Vite</strong>,{" "}
              <strong>Next.js</strong>, <strong>React</strong>, y{" "}
              <strong>React Native</strong>, así como con entornos y tecnologías
              como <strong>Node.js</strong>, <strong>Express</strong>, y{" "}
              <strong>Sequelize</strong>.
            </p>
          </section>
          <section>
            <p className={styles.description}>
              Tengo experiencia trabajando con bases de datos relacionales como{" "}
              <strong>PostgreSQL</strong> y estoy familiarizado con metodologías
              ágiles como <strong>SCRUM</strong>. Mi objetivo es utilizar estas
              habilidades y experiencias para crear soluciones web eficientes y
              efectivas.
            </p>
          </section>

          <br />

          <div className={styles.imagecontainer}>{accounts}</div>
        </article>
      </div>
    </section>
  );
}
