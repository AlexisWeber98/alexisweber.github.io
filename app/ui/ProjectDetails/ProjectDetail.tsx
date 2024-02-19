import Image from "next/image";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import Link from "next/link";
import styles from "./projectdetail.module.css";

interface ProjectDetailProps {
  project: ProjectInterface;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const { name, image } = project;

  return (
    <div className={styles.cont}>
      <div className={styles.contInfo}>
        <Image
          className={styles.projectImage}
          src={image}
          alt={name}
          width={300}
          height={300}
        />  
      </div>
    </div>
  );
};

export default ProjectDetail;
