import { fetchBarberAppUser } from "@/app/data/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";

const BarberData: ProjectInterface = fetchBarberAppUser();

const BarberAppDetail = () => {
  return <ProjectDetail project={BarberData} />;
};

export default BarberAppDetail;
