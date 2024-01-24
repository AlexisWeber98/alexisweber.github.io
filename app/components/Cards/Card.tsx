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
    <article>
      <header>
        <h3>{name}</h3>
      </header>

      <Image
        className={styles.image}
        width={2000}
        height={2000}
        alt={name}
        src={image}
        style={{ margin: 1 }}
      />
      <div>
        {disclamer ? <p className={styles.disclamer}>{disclamer}</p> : null}
      </div>
    </article>
  );
};
export default Cards;
