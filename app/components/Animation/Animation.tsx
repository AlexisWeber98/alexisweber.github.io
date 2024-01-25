import React, { useEffect } from "react";
import Typed from "typed.js";
import styles from "./animation.module.css"

export default function Animation() {
  useEffect(() => {
    if (window) {
      const options = {
        strings: ["FrontEnd", "BackEnd", "FullStack"],
        typeSpeed: 100,
        backDelay: 500,
        backSpeed: 300,
        loop: true,
        showCursor: false,
        fadeOut: true,
        fadeOutDelay: 300,
      };
      const typed = new Typed("#typed", options);
    }
  }, []);
  return (
    <section className={styles.animationContain}>
     <h2><span>Soy </span><span id="typed" className={styles.typed} /><span> Developer</span></h2>
    </section>
  );
}
