import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

interface IButtons {
  label: string;
  link: string;
}

const Buttons: React.FC<IButtons> = ({ label, link }) => {
  return (
    <div className={styles.button}>
      <Link href={link}>{label}</Link>
    </div>
  );
};

export default Buttons;
