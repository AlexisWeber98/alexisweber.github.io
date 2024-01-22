"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Proyects from "@/app/components/Proyects/Proyects";
import About from "@/app/components/About/About";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import { useEffect } from "react";

const Home = () => {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.h1}>Alexis Weber</h1>
        <hr />
        <p className={styles.fullstack}>Soy Full Stack, Soy developer</p>
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
