import { fetchStickerSmash, fetchMobileTecnologies } from "@/app/data/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";
import styles from "../styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Buttons from "@/app/components/buttons/ButtonLink";

const stickerSmashData: ProjectInterface = fetchStickerSmash();

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

const StickerSmashDetail = () => {
  return (
    <>
      <h1 className={styles.h1}>{stickerSmashData.name}</h1>
      <section className={styles.contInfo}>
        <ProjectDetail project={stickerSmashData} />
        <div>
          <p className={styles.description}>
            <strong>Sticker Smash Pro Version</strong> es una{" "}
            <em>aplicación móvil</em> para Android que te permite editar tus
            imágenes añadiéndoles stickers divertidos y originales.
          </p>
          <p className={styles.description}>
            Esta es una versión más completa y mejorada de la{" "}
            <b>aplicación Sticker Smash</b>, que se basa en un tutorial de la
            documentación oficial de <i>Expo</i>, el framework para{" "}
            <i>React Native</i>.
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
            <Buttons label="Descarga el APK" link={stickerSmashData.url} />
            <Buttons
              label="GitHub del proyecto"
              link={stickerSmashData.gitHubUrl}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StickerSmashDetail;
