import Image from "next/image";
import { fecthFrontTecnologies, fetchBackTecnologies } from "@/API/data";

// --------------------- Fetching data ---------------------- //
const {
  javascript,
  typescript,
  react,
  redux,
  vite,
  next,
  css,
  html,
  tailwind,
} = fecthFrontTecnologies();

const { node, postgres, express, sequelize, reactNative } =
  fetchBackTecnologies();

// ---------------- Tech Arrays --------------//

const frontImages = [
  javascript,
  typescript,
  react,
  redux,
  vite,
  next,
  css,
  tailwind,
  html,
];

const backImages = [node, express, postgres, sequelize, reactNative];

export default function Tecnologies() {
  return (
    <section>
      <h3 className="title" style={{ margin: 50 }}>
        Tecnologías
      </h3>
      <div>
        {frontImages.map((front) => {
          return (
            <Image
              alt={front}
              src={front}
              key={front}
              width={100}
              height={100}
              style={{ margin: 10, padding: 3 }}
            />
          );
        })}
        <hr />
        {backImages.map((back) => {
          return (
            <Image
              src={back}
              alt={back}
              key={back}
              width={100}
              height={100}
              style={{ margin: 10, padding: 3 }}
            />
          );
        })}
      </div>
    </section>
  );
}
