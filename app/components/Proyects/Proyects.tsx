import styles from "./Proyects.module.css";
import Cards from "../Cards/Card";
import Link from "next/link";
import {
  fetchCraftbeer,
  fetchWorldOfDogs,
  fetchSouthSolutions,
  fetchBarberAppCli,
  fetchBarberAppUser,
  fetchStickerSmash,
} from "@/app/data/data";

export interface ProjectInterface {
  name: string;
  image: string;
  url: string;
  resume: string;
}

interface ProjectMapProps {
  projects: ProjectInterface[];
}

const Proyects = () => {
  // ------------------------------- web projects ------------------------------ //
  const southSolutionsData = fetchSouthSolutions();
  const craftBeerData = fetchCraftbeer();
  const worldOfDogsData = fetchWorldOfDogs();

  // ------------------------------ movile projects --------------------------- //

  const barberAppCliData = fetchBarberAppCli();
  const barberAppUserData = fetchBarberAppUser();
  const stickerSmashData = fetchStickerSmash();

  // ------------------------------ types ------------------------------------//

  const webProjects: ProjectInterface[] = [
    southSolutionsData,
    craftBeerData,
    worldOfDogsData,
  ];
  const mobileProjects: ProjectInterface[] = [
    barberAppUserData,
    barberAppCliData,
    stickerSmashData,
  ];

  // ------------------------ projects maps ----------------------------//

  const ProjectMap: React.FC<ProjectMapProps> = ({ projects }) => (
    <>
      {projects.map((project) => (
        <div key={project.name} className={styles.cardStyles}>
          <Cards
            name={project.name}
            image={project.image}
            url={project.url}
            resume={project.resume}
          />
          <hr />
          <br />
          <Link href={`/project-detail/${encodeURIComponent(project.name)}`}>
            Click aquí para ir al detalle
          </Link>
        </div>
      ))}
    </>
  );

  const webMap = <ProjectMap projects={webProjects} />;

  const movileMap = <ProjectMap projects={mobileProjects} />;

  return (
    <section className={styles.container}>
      <h2 className={styles.center}>Proyectos</h2>
      <div className={styles.projects}>
        <section style={{ marginTop: 50 }}>
          <h3 className="title">Web</h3>
          <hr />
          <div className={styles.cardsContainer}>{webMap}</div>
        </section>
        <section style={{ marginTop: 50 }}>
          <h3 className="title">Movil</h3>
          <hr />
          <div className={styles.cardsContainer}>{movileMap}</div>
        </section>
      </div>
    </section>
  );
};

export default Proyects;
