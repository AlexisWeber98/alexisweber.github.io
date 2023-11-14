import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./../Proyects/Proyects.module.css";

interface CardProps {
  name: string;
  image: string;
  url: string;
  disclamer?: string;
}
const Cards: React.FC<CardProps> = ({ name, image, url, disclamer }) => {

  return (
    <main >
      <h4>{name}</h4>
      <Link  href={url}>
        <Image
          className={styles.image}
          width={100}
          height={100}
          alt={name}
          src={image}
          style={{ margin: 1, }}  
        />
        {disclamer? <p>por el momento el back de este proyecto esta desplegado en render, por lo que puede demorar en renderizar la informacion</p>:null}
      </Link>
    </main>
  );
};
export default Cards;
