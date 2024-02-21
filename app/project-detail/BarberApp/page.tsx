import { fetchBarberAppUser, fetchMobileTecnologies } from "@/app/data/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles.module.css";

const barberData: ProjectInterface = fetchBarberAppUser();

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

const BarberAppDetail = () => {
  return (
    <>
      <h1 className={styles.h1}>{barberData.name}</h1>
      <section className={styles.contInfo}>
        <ProjectDetail project={barberData} />
        <div>
          <p className={styles.description}>
            {barberData.name} es una aplicación móvil diseñada para administrar
            los turnos de tu barbería de manera
            <strong>sencilla, eficiente y económica</strong>. Todo desde la
            palma de tu mano y al alcance de un <em>tap</em>: sin llamadas, ni
            libros, ni hojas de cálculo.
          </p>

          <p className={styles.description}>
            <strong>BarberApp</strong> ofrece una versión para el usuario
            cliente, donde puede{" "}
            <strong>
              solicitar turnos en los días y con los profesionales disponibles
            </strong>
            .
          </p>

          <p className={styles.description}>
            Mi participación en el proyecto consistió en:
            <ul style={{margin:"1rem"}}>
              <li>Desarrollo de los componentes y vistas de disponibilidad.</li>
              <li>
                Implementación de estilos y manejo de datos correspondientes a
                los días y profesionales.
              </li>
              <li>Modelado de la base de datos Firebase.</li>
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
            <Link href={barberData.url}>
              Visita el proyecto haciendo click aquí
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarberAppDetail;
