import {
  fetchSouthSolutions,
  fetchBackTecnologies,
  fecthFrontTecnologies,
} from "@/API/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";
import styles from "../styles.module.css";
import Image from "next/image";
import Link from "next/link";

const southSolutionsData: ProjectInterface = fetchSouthSolutions();
const { typescript, next, react, html, tailwind } = fecthFrontTecnologies();
const techArray = [next, react, html, tailwind, typescript];

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

const SouthSolutionsDetail = () => {
  return (
    <>
      <h1 className={styles.h1}>{southSolutionsData.name}</h1>
      <section className={styles.contInfo}>
        <ProjectDetail project={southSolutionsData} />
        <div>
          <p className={styles.description}>
            <strong>SouthSolutions</strong> es una plataforma{" "}
            <em>innovadora</em> de desarrollo web y aplicaciones móviles,
            orientada a todos los que quieran o necesiten potenciar su negocio o
            proyecto mediante las herramientas tecnológicas más avanzadas.
          </p>
          <p className={styles.description}>
            Yo fui el responsable de todo el proyecto, que consiste en una{" "}
            <strong>SPA</strong>
            construida con <strong>Next.js</strong>, un framework de React que
            permite crear sitios web dinámicos y optimizados. En el desarrollo,
            implementé <em>componentización</em> y <em>reutilización</em> del
            código, así como <em>animaciones</em> y <em>estilos responsive</em>{" "}
            para adaptarse a diferentes dispositivos y pantallas.
          </p>
          <p className={styles.description}>
            También me encargué del <strong>despliegue</strong> en{" "}
            <strong>Vercel</strong>, una plataforma de hosting que ofrece
            integración con Next.js y otros servicios. Además, obtuve el{" "}
            <strong>dominio</strong> y realicé el
            <strong>posicionamiento SEO</strong> para mejorar la visibilidad y
            el tráfico del sitio web.
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
        <div style={{ padding: "1rem" }}>
          <div className={styles.link}>
            <Link href={southSolutionsData.url}>
              Visita el proyecto haciendo click aquí
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SouthSolutionsDetail;
