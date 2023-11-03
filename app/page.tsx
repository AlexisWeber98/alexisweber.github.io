import Image from "next/image";
import styles from "./page.module.css";
import Proyects from "@/app/components/Proyects/Proyects";
import About from "@/app/components/About/About";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import { useEffect } from "react";


export default function Home() {
 
  useEffect(()=> {
    alert("Este portfolio continúa en desarrollo")
  },[])
  return (
    <main className={styles.main}>
     
      <h1>
        Alexis Weber
        <hr />
        <div className="code">
        Soy Full Stack, Soy developer
        </div>
      </h1>

      <div>
        <About />
      </div>
      <div>
        <Proyects />
      </div>

      <aside>
        <Tecnologies />
      </aside>
    </main>
  );
}
