import styles from "./Proyects.module.css";
import Cards from "../Cards/Card";
import Link from "next/link";
import SouthSolutions from "../../assets/SouthSolutions.jpg";
import { StaticImageData } from "next/image";

const Proyects = () => {
  // ------------------------------- web projects ------------------------------ //
  const craftBeer = {
    name: "CraftBeer",
    image:
      "https://craftbeer-team.netlify.app/assets/craftBeerIcon-dbc1f5c6.ico",

    url: "https://craftbeer-team.netlify.app/",
    page: "/craftbeer",
    disclamer:
      "Por el momento el back de este proyecto esta desplegado en Render, por lo que puede demorar en renderizar la información",
  };

  const worldOfDogs = {
    name: "WorldOfDogs",
    image: "https://world-of-dogs.netlify.app/assets/WoD-211776fb.png",
    url: "https://world-of-dogs.netlify.app/",
    page: "/worldofdogs",
    disclamer: "",
  };

  const southSolutions = {
    name: "SouthSolutions",
    image: "https://instagram.faep6-2.fna.fbcdn.net/v/t51.2885-15/408540121_1348135452526747_8365421699679686567_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDEwMjQuc2RyIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=slbpMOBIvAYAX_f55bx&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI1NDA4NzkyMDI3MjUyOTA2Ng%3D%3D.2-ccb7-5&oh=00_AfCzwPNMmpa2W5v7uSiisocPm7uS9YxuTnGq-DxTdpZQmA&oe=65A1161E&_nc_sid=ee9879",
    url: "https://southsolutions.tech",
    page: "/southsolutions",
    disclamer: "",
  };

  // ------------------------------ movile projects --------------------------- //

  const barberAppUser = {
    name: "Barber App",
    image:
      "https://play-lh.googleusercontent.com/55Os7RKOtKfX8iuYjowtZZ807taXF1rCJEN52wRdnzGlBo35qszFaRpeLDxbYBDp4U6Q=w240-h480-rw",
    url: "https://play.google.com/store/apps/details?id=com.barber18273.barberApp",
    page: "/barberuser",
  };

  const stickerSmash = {
    name: "StickerSmash pro version",
    image: "https://docs.expo.dev/static/images/tutorial/icon.png",
    url: "https://drive.google.com/file/d/1mNMeCGj2tSBHw3XNipjfKZgMMlKfjufc/view?usp=sharing",
    page: "/stickersmash",
  };

  const barberAppCli = {
    name: "Barber CLI",
    image:
      "https://play-lh.googleusercontent.com/65xtwAMIbshCBa7-Lmw5RAMeGTxcEkMO27n42bw8dGKpM4xGC6xZw517RHmosRY-V7I=w240-h480-rw",
    url: "https://play.google.com/store/apps/details?id=com.barber18273.barbercli",
    page: "/barberadmin",
  };

  const webProyects = [craftBeer, worldOfDogs, southSolutions];
  const movileProyects = [barberAppUser, barberAppCli, stickerSmash];

  // ------------------------ projects maps ----------------------------//

  const webMap = webProyects.map((project) => {
    return (
      <div key={project.name} className={styles.webCard}>
        <Link href={project.url}>
          <Cards
            name={project.name}
            image={project.image}
            url={project.url}
            disclamer={project.disclamer}
          />
        </Link>
      </div>
    );
  });

  const movileMap = movileProyects.map((project) => {
    return (
      <div key={project.name} className={styles.movileCard}>
        <Link href={project.page}>
          <Cards name={project.name} image={project.image} url={project.url} />
        </Link>
      </div>
    );
  });

  return (
    <main className={styles.container}>
      <h2 className={styles.center}>Proyectos</h2>
      <div className={styles.projects}>
        <div style={{ marginTop: 50 }}>
          <h3 className="title">Web</h3>
          <hr />
          <div className={styles.cardsContainer}>{webMap}</div>
        </div>
        <div style={{ marginTop: 50 }}>
          <h3 className="title">Movil</h3>
          <hr />
          <div className={styles.cardsContainer}>{movileMap}</div>
        </div>
      </div>
    </main>
  );
};

export default Proyects;
