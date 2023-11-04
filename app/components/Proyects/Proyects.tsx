import styles from "./Proyects.module.css";
import Cards from "../Cards/Card";

const Proyects = () => {
  // ------------------------------- web projects ------------------------------ //
  const craftBeer = {
    name: "CraftBeer",
    image:
      "https://craftbeer-team.netlify.app/assets/craftBeerIcon-dbc1f5c6.ico",
    url: "https://craftbeer-team.netlify.app/",
  };

  const worldOfDogs = {
    name: "WorldOfDogs",
    image: "https://world-of-dogs.netlify.app/assets/WoD-211776fb.png",
    url: "https://world-of-dogs.netlify.app/",
  };

  // ------------------------------ movile projects --------------------------- //

  const barberApp = {
    name: "Barber App",
    image:
      "https://play-lh.googleusercontent.com/55Os7RKOtKfX8iuYjowtZZ807taXF1rCJEN52wRdnzGlBo35qszFaRpeLDxbYBDp4U6Q=w240-h480-rw",
    url: "",
  };

  const stickerSmash = {
    name: "StickerSmash pro version",
    image: "",
    url: "",
  };

  const webProyects = [craftBeer, worldOfDogs];
  const movileProyects = [barberApp, stickerSmash];

  // ------------------------ projects maps ----------------------------//

  const webMap = webProyects.map((proyect) => {
    return (
      <div key={proyect.name} className={styles.card}>
        <Cards name={proyect.name} image={proyect.image} url={proyect.url} />
      </div>
    );
  });

  const movileMap = movileProyects.map((project) => {
    return (
      <div key={project.name} className={styles.card}>
        <Cards name={project.name} image={project.image} url={project.url} />
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
          <hr />
        </div>
        <div style={{ marginTop: 50 }}>
          <div className={styles.cards}>
            <h3 className="title">Movil</h3>
            <hr />
            <div className={styles.cardsContainer}>{movileMap}</div>
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Proyects;
