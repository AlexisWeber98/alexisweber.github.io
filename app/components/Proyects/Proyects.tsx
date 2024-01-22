import styles from "./Proyects.module.css";
import Cards from "../Cards/Card";
import Link from "next/link";
import SouthSolutions from "../../assets/SouthSolutions.jpg";

interface ProjectInterface {
  name: string;
  image: string;
  url: string;
  disclamer: string;
  page?: string;
}

interface ProjectMapProps {
  projects: ProjectInterface[];
}

const Proyects = () => {
  
  // ------------------------------- web projects ------------------------------ //
  const craftBeer = {
    name: "CraftBeer",
    image:
      "https://craftbeer-team.netlify.app/assets/craftBeerIcon-dbc1f5c6.ico",

    url: "https://craftbeer-team.netlify.app/",
    page: "/craftbeer",
    disclamer:
      "CraftBeer es una plataforma de Ecommerce enfocada en la comercialización de cervezas artesanales, creado con React, Typescript, Node.js, PostgreSQL y Boostrap, entre otras tecnologías. Por mi parte estuve a la cabeza del equipo de Backend (4 personas) desarrollando la API, base de datos relacional, implementacion de pasarela de pago (mercadopago) y en un paso por Frontend, implementando la autenticación/autorización de terceros vía Google, usando metodologías ágiles de tipo SCRUM. Por el momento el back de este proyecto esta desplegado en Render, por lo que puede demorar unos minutos en renderizar la información",
  };

  const worldOfDogs = {
    name: "WorldOfDogs",
    image: "https://world-of-dogs.netlify.app/assets/WoD-211776fb.png",
    url: "https://world-of-dogs.netlify.app/",
    page: "/worldofdogs",
    disclamer:
      "World of Dogs fue mi primer proyecto FullStack, donde construí la totalidad del sitio: frontend, con paginado, formularios, estilos responsive, Backend con base de datos y api, construido con React, Vite, Node.js, PostgreSQL, Javascript, desplegado con Docker",
  };

  const southSolutions = {
    name: "SouthSolutions",
    image:
      "https://instagram.faep6-2.fna.fbcdn.net/v/t51.2885-15/408540121_1348135452526747_8365421699679686567_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDEwMjQuc2RyIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=slbpMOBIvAYAX_f55bx&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI1NDA4NzkyMDI3MjUyOTA2Ng%3D%3D.2-ccb7-5&oh=00_AfCzwPNMmpa2W5v7uSiisocPm7uS9YxuTnGq-DxTdpZQmA&oe=65A1161E&_nc_sid=ee9879",
    url: "https://southsolutions.tech",
    page: "/southsolutions",
    disclamer:
      "SouthSolutions en un emprendimiento donde ofrecemos servicios de desarrollo web y mobile a un coste muy bajo, desarrollado con Next.js, React, Node.js, Typescript, Tailwind.css, fui encargado de construir el sitio en su totalidad incluyendo, logotipos, estilos responsive, SEO, deploy entre otras cosas",
  };

  // ------------------------------ movile projects --------------------------- //

  const barberAppUser = {
    name: "Barber App",
    image:
      "https://play-lh.googleusercontent.com/55Os7RKOtKfX8iuYjowtZZ807taXF1rCJEN52wRdnzGlBo35qszFaRpeLDxbYBDp4U6Q=w240-h480-rw",
    url: "https://play.google.com/store/apps/details?id=com.barber18273.barberApp",
    page: "/barberuser",
    disclamer:
      "Barber App es una aplicacion creada en conjunto destinada a la administración de turnos en barberías, creada con React Native y Expo. Por mi parte participé en varios componentes y funcionalidades, por ejemplo la lista de profecionales y turnos disponibles y su funcionalidad de reserva de los turnos",
  };

  const stickerSmash = {
    name: "StickerSmash pro version",
    image: "https://docs.expo.dev/static/images/tutorial/icon.png",
    url: "https://drive.google.com/file/d/1mNMeCGj2tSBHw3XNipjfKZgMMlKfjufc/view?usp=sharing",
    page: "/stickersmash",
    disclamer:
      "'StickerSmash pro version' es mi version de la aplicacion tutorial StickerSmash de Expo, y mi primera experiencia en desarrollo mobile",
  };

  const barberAppCli = {
    name: "Barber CLI",
    image:
      "https://play-lh.googleusercontent.com/65xtwAMIbshCBa7-Lmw5RAMeGTxcEkMO27n42bw8dGKpM4xGC6xZw517RHmosRY-V7I=w240-h480-rw",
    url: "https://play.google.com/store/apps/details?id=com.barber18273.barbercli",
    page: "/barberadmin",
    disclamer:
      "Barber Cli es la aplicacion de administrador de Barber App, donde el profecional podrá aceptar o rechazar los turnos dependiendo de su disponibilidad. Mi participación estuvo centrada en la confección de la información de la base de datos con Firebase",
  };

  const webProjects: ProjectInterface[] = [southSolutions, craftBeer, worldOfDogs];
  const mobileProjects: ProjectInterface[] = [barberAppUser, barberAppCli, stickerSmash];


  // ------------------------ projects maps ----------------------------//

  const ProjectMap: React.FC<ProjectMapProps> = ({ projects }) => (
    <>
      {projects.map((project) => (
        <div key={project.name} className={styles.cardStyles}>
          <Link href={project.url}>
            <Cards
              name={project.name}
              image={project.image}
              url={project.url}
              disclamer={project.disclamer}
            />
          </Link>
        </div>
      ))}
    </>
  );

  const webMap = <ProjectMap projects={webProjects} />

  const movileMap = <ProjectMap projects={mobileProjects}/>

  return (
    <section className={styles.container}>
      <h2 className={styles.center}>Proyectos</h2>
      <div className={styles.projects}>
        <div style={{ marginTop: 50 }}>
          <h3 className="title">Web</h3>
          <hr />
          <div className={styles.cardsContainer}>{webMap}</div>
        </div>
        <div style={{ marginTop: 50 }}>
          <h3 className="title">Movil</h3>
          <hr />
          <div className={styles.cardsContainer}>{movileMap}</div>
        </div>
      </div>
    </section>
  );
};

export default Proyects;
