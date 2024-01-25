import React, { useEffect } from "react";
import Typed from "typed.js";
import styles from "./animation.module.css"

export default function Animation() {
  useEffect(() => {
    if (window) {
      const options = {
        strings: ["FrontEnd", "BackEnd", "FullStack"],
        typeSpeed: 200,
        backDelay: 300,
        backSpeed: 200,
        loop: true,
        showCursor: false,
        fadeOut: true,
        fadeOutDelay: 500,
      };
      const typed = new Typed("#typed", options);
    }
  }, []);
  return (
    <section className={styles.animationContain}>
     <h2><span>Soy </span><span id="typed" /><span> Developer</span></h2>
    </section>
  );
}
