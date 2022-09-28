import { StaticImageData } from "next/image";
import fortickets_thumbnail from "../../public/images/fortickets_thumbnail.png";

export interface Project {
  projectType: "personal";
  name: string;
  coverImage: StaticImageData;
  link: string;
}

export const projects: Project[] = [
  {
    projectType: "personal",
    name: "ForTickets",
    coverImage: fortickets_thumbnail,
    link: "/files/ForTickets Case Study.pdf",
  },
];
