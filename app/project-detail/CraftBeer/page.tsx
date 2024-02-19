import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";
import {
  fetchCraftbeer,
  fetchBackTecnologies,
  fecthFrontTecnologies,
} from "../../../data/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import styles from "../styles.module.css";
import Link from "next/link";
import Image from "next/image";

const craftBeerData: ProjectInterface = fetchCraftbeer();
const { node, postgres, express, sequelize } = fetchBackTecnologies();
const { typescript, react, vite, redux, boostrap, html, css } =
  fecthFrontTecnologies();

const techArray = [
  typescript,
  react,
  vite,
  redux,
  boostrap,
  html,
  css,
  node,
  postgres,
  express,
  sequelize,
];

const techMap = techArray.map((tech) => {
  return (
    <Image
      src={tech}
      alt={tech}
      width={100}
      height={100}
      style={{ padding: ".7rem" }}
    />
  );
});

const CraftbeerDetail = () => {
  return (
    <>
      <h1 className={styles.h1}>{craftBeerData.name}</h1>
      <section className={styles.contInfo}>
        <ProjectDetail project={craftBeerData} />
        <div>
          <p className={styles.description}>
            <strong>CraftBeer</strong> es una plataforma de <em>E-commerce</em>
            enfocada en la comercialización de cervezas artesanales de calidad y
            variedad.
          </p>
          <p className={styles.description}>
            Yo fui el líder del equipo de <strong>Backend</strong>, integrado
            por cuatro personas que desarrollaron la <strong>API</strong>, una
            base de datos relacional con hasta ocho tablas, la implementación de
            la pasarela de pago (<strong>MercadoPago</strong>) y, en un paso por
            el
            <strong>Frontend</strong>, la implementación de la autenticación y
            autorización de terceros vía <strong>Google</strong>.
          </p>
          <p className={styles.description}>
            Para organizar el flujo de trabajo se utilizó <strong>SCRUM</strong>
            como metodología ágil y <strong>Trello</strong> para administrar las
            tareas del grupo. Además, me ocupé del despliegue tanto del
            <strong>Servidor</strong> como de la <strong>Base de datos</strong>{" "}
            en la plataforma <strong>Fly.io</strong>, configurando así un
            contenedor de
            <strong>Docker</strong>, así como el despliegue del{" "}
            <strong>Frontend</strong>a través de <strong>Vercel</strong>.
          </p>
        </div>
      </section>
      <br />
      <div>
        <h2 style={{ textAlign: "center", padding: "2rem" }}>
          Tecnologías utilizadas
        </h2>
        <div className={styles.techImages}>
          <div>{techMap}</div>
        </div>
        <hr />
        <div style={{ padding: "1rem" }}>
          <div className={styles.link}>
            <Link href={craftBeerData.url}>
              Visita el proyecto haciendo click aquí
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CraftbeerDetail;
