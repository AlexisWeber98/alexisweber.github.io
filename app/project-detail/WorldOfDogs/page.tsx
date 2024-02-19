import {
  fetchWorldOfDogs,
  fetchBackTecnologies,
  fecthFrontTecnologies,
} from "../../data/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";
import styles from "../styles.module.css";
import Link from "next/link";
import Image from "next/image";

const worldOfDogsData: ProjectInterface = fetchWorldOfDogs();

const { javascript, react, vite, html, css, redux } = fecthFrontTecnologies();
const { node, express, sequelize, postgres } = fetchBackTecnologies();

const techArray = [
  javascript,
  react,
  vite,
  html,
  css,
  redux,
  node,
  express,
  sequelize,
  postgres,
];

const techMap = techArray.map((tech) => {
  return (
    <Image
      src={tech}
      alt={tech}
      width={100}
      key={tech}
      height={100}
      style={{ padding: ".7rem" }}
    />
  );
});

const WorkdOfDogsDetail = () => {
  return (
    <>
      <h1 className={styles.h1}>{worldOfDogsData.name}</h1>
      <section className={styles.contInfo}>
        <ProjectDetail project={worldOfDogsData} />
        <div>
          <p className={styles.description}>
            {" "}
            <strong>World Of Dogs</strong> es una página web que te permite
            conocer y explorar las <em>diversas</em> razas de perros que existen
            en el mundo. <br /> Además, te ofrece la posibilidad de crear tu
            propia raza, personalizando sus características: imagen,
            temperamentos, altura, esperanza de vida, tipo de crianza, etc.{" "}
          </p>

          <p className={styles.description}>
            Este es mi <strong>proyecto individual</strong> que forma parte de
            la currícula del Bootcamp <strong>SoyHenry</strong>. Lo desarrollé
            de forma autónoma, siguiendo los requisitos exigidos para la
            aprobación de esta etapa de aprendizaje, tales como: un{" "}
            <strong>Landing Page</strong>, estilos, lógica funcional, una{" "}
            <strong>API</strong> propia y una base de datos relacional.
          </p>
          <p className={styles.description}>
            Desplegué el Backend del proyecto en <strong>Fly.io</strong> y en{" "}
            <strong>Netlify</strong> el Frontend.
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
            <Link href={worldOfDogsData.url}>
              Visita el proyecto haciendo click aquí
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkdOfDogsDetail;
