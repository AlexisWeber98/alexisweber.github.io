import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./../Proyects/Proyects.module.css";

interface CardProps {
  name: string;
  image: string;
  url: string;
}
const Cards: React.FC<CardProps> = ({ name, image, url }) => {
  return (
    <main>
      <h4>{name}</h4>
      <Link href={url}>
        <Image
          className={styles.image}
          width={200}
          height={200}
          alt={name}
          src={image}
        />
      </Link>
    </main>
  );
};
export default Cards;
