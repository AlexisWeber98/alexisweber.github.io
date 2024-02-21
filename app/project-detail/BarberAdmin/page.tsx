import { fetchBarberAppCli, fetchMobileTecnologies } from "@/app/data/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles.module.css";

const BarberAdminData: ProjectInterface = fetchBarberAppCli();

const { reactNative, expo } = fetchMobileTecnologies();

const techArray = [reactNative, expo];

const techMap = techArray.map((tech) => {
  return (
    <Image
      src={tech}
      alt={tech}
      key={tech}
      width={100}
      height={100}
      style={{ padding: ".7rem" }}
    />
  );
});

const BarberAdminDetail = () => {
  return (
    <>
      <h1 className={styles.h1}>{BarberAdminData.name}</h1>
      <section className={styles.contInfo}>
        <ProjectDetail project={BarberAdminData} />
        <div>
          <p className={styles.description}>
            <strong>{BarberAdminData.name}</strong> es una aplicación móvil
            diseñada para administrar los turnos de tu barbería de manera
            <b>sencilla, eficiente y económica</b>. Todo desde la palma de tu
            mano y al alcance de un <i>tap</i>: sin llamadas, ni libros, ni
            hojas de cálculo.
          </p>

          <p className={styles.description}>
            Mi participación en el proyecto consistió en: <br />
            <ul style={{margin:"1rem"}}>
              <li>Recuperación de datos y componentes.</li>
              <li>
                Implementación de la disponibilidad de los profesionales en los
                respectivos días.
              </li>
              <li>
                Gestión de los cambios de estado (disponible, pendiente,
                ocupado).
              </li>
              <li> Integración con la base de datos Firebase.</li>
            </ul>
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
            <Link href={BarberAdminData.url}>
              Visita el proyecto haciendo click aquí
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarberAdminDetail;
