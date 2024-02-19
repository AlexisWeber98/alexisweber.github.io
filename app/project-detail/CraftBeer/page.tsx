import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";
import {
  fetchCraftbeer,
  fetchBackTecnologies,
  fecthFrontTecnologies,
} from "../../../API/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import styles from "./craeftbeer.module.css";
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
  return <Image src={tech} alt={tech} width={100} height={100} />;
});

const CraftbeerDetail = () => {
  return (
    <>
      <section className={styles.contInfo}>
        <ProjectDetail project={craftBeerData} />
        <div>
          <p className={styles.description}>
            CraftBeer es una plataforma de E-commerce enfocada en la
            comercialización de cervezas artesanales.
          </p>
          <p className={styles.description}>
            Por mi parte estuve a la cabeza del equipo de Backend, integrado por
            4 personas desarrollando la API, base de datos relacional con hasta
            8 tablas, implementacion de pasarela de pago (mercadopago) y en un
            paso por Frontend la implementación de la autenticación y
            autorización de terceros vía Google.
          </p>
          <p className={styles.description}>
            Para organizar el flujo de trabajo se ulizó SCRUM como metodología
            ágil y Trello para administrar las tareas del grupo. Además me ocupé
            del despliegue tanto del Servidor como de la Base de datos en la
            plataforma Fly.io, configurando así un contenedor de Docker, así
            como el depliegue del Frontend através de Vercel
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
        <div className={styles.link}></div>
        <Link href={craftBeerData.url}>
          Visita el proyecto haciendo click aquí
        </Link>
      </div>
    </>
  );
};
export default CraftbeerDetail;
