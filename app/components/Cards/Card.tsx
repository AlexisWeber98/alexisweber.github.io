import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./../Proyects/Proyects.module.css";
import { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  image: string | StaticImageData;
  url: string;
  resume: string;
}
const Cards: React.FC<CardProps> = ({ name, image, resume }) => {
  return (
    <article>
      <header>
        <h3>{name}</h3>
      </header>

      <Image
        className={styles.image}
        width={200}
        height={200}
        alt={name}
        src={image}
        style={{ margin: 1 }}
      />
      <div>
        <p className={styles.disclamer}>{resume}</p>
      </div>
    </article>
  );
};
export default Cards;
