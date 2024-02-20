import Image from "next/image";
import { fecthFrontTecnologies, fetchBackTecnologies, fetchMobileTecnologies } from "@/app/data/data";

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

const { node, postgres, express, sequelize } =
  fetchBackTecnologies();

  const {reactNative, expo} = fetchMobileTecnologies();

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

const backImages = [node, express, postgres, sequelize];

const mobileImages = [reactNative, expo];

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
        <hr />
        {mobileImages.map((mobile) => {
          return (
            <Image
              src={mobile}
              alt={mobile}
              key={mobile}
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
