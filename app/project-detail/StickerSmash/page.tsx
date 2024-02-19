import { fetchStickerSmash } from "@/api/data";
import { ProjectInterface } from "@/app/components/Proyects/Proyects";
import ProjectDetail from "@/app/ui/ProjectDetails/ProjectDetail";

const stickerSmashData: ProjectInterface = fetchStickerSmash();

const StickerSmashDetail = () => {
  return <ProjectDetail project={stickerSmashData} />;
};

export default StickerSmashDetail;
