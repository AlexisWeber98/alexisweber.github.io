import { fetchBarberAppCli } from "@/data/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";

const BarberAdminData: ProjectInterface = fetchBarberAppCli();

const BarberAdminDetail = () => {
  return <ProjectDetail project={BarberAdminData} />;
};

export default BarberAdminDetail;
