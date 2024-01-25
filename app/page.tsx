"use client";
import styles from "./page.module.css";
import Proyects from "@/app/components/Proyects/Proyects";
import About from "@/app/components/About/About";
import Tecnologies from "./components/Tecnologies/Tecnologies";


const Home = () => {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.h1}>Alexis Weber</h1>
        <hr />
        <h2 className={styles.fullstack}>Soy Full Stack, Soy developer</h2>
      </header>

      <section>
        <About />
      </section>

      <section>
        <Proyects />
      </section>

      <section>
        <Tecnologies />
      </section>
    </main>
  );
};
export default Home;
