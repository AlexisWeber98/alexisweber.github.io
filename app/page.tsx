"use client";
import styles from "./page.module.css";
import Proyects from "@/app/components/Proyects/Proyects";
import About from "@/app/components/About/About";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import Animation from "./components/Animation/Animation";

const Home = () => {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.h1}>Alexis Weber</h1>
        <hr />
      <Animation/>

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
