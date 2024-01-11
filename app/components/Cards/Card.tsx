import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./../Proyects/Proyects.module.css";
import { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  image: string | StaticImageData;
  url: string;
  disclamer?: string;
}
const Cards: React.FC<CardProps> = ({ name, image, url, disclamer }) => {
  return (
    <main>
      <h4>{name}</h4>

      <Image
        className={styles.image}
        width={2000}
        height={2000}
        alt={name}
        src={image}
        style={{ margin: 1 }}
      />
      {disclamer ? (
        <p>
          por el momento el back de este proyecto esta desplegado en render, por
          lo que puede demorar en renderizar la informacion
        </p>
      ) : null}
    </main>
  );
};
export default Cards;
