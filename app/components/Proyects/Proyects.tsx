import styles from "./Proyects.module.css";
import Cards from "../Cards/Card";

const Proyects = () => {
  const craftBeer = {
    name: "CraftBeer",
    image:
      "https://craftbeer-team.netlify.app/assets/craftBeerIcon-dbc1f5c6.ico",
    url: "https://craftbeer-team.netlify.app/",
  };

  const worldOfDogs = {
    name: "WorldOfDogs",
    image: "",
    url: "https://world-of-dogs.netlify.app/",
  };

  const webProyects = [craftBeer, worldOfDogs];
  const movileProyects = [];

  const webMap = webProyects.map((proyect) => {
    return (
      <div key={proyect.name} className={styles.card}>
        
        <Cards name={proyect.name} image={proyect.image} url={proyect.url}/>
       
      </div>
    );
  });

  return (
    <main className={styles.container}>
      <h2 className={styles.center}>Proyectos</h2>
      <hr />

      <div className={styles.proyects}>
        <div className={styles.cards}>
          <h3 className="title">Web</h3>
          <hr />
          <div className={styles.cad}> 
          {webMap}
          </div>
          <hr />
        </div>
        <div className={styles.cards}>
          <h3 className="title">Movil</h3>
          <hr />
        </div>
      </div>
    </main>
  );
};

export default Proyects;
