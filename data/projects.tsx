import { StaticImageData } from "next/image";
import centro_thumbnail from "../public/images/centro/cover.png";
import fortickets_thumbnail from "../public/images/fortickets/cover.png";
// import notestorm_thumbnail from "../public/images/notestorm_thumbnail.png";
import ucan_thumbnail from "../public/images/ucan/cover.png";

export interface Project {
  id: string;
  projectType: "personal";
  name: string;
  coverImage: StaticImageData;
}

export const projects: Project[] = [
  {
    id: "fortickets",
    projectType: "personal",
    name: "ForTickets",
    coverImage: fortickets_thumbnail,
  },
  // {
  //   id: "ucan",
  //   projectType: "personal",
  //   name: "Ucan",
  //   coverImage: ucan_thumbnail,
  // },
  {
    id: "centro",
    projectType: "personal",
    name: "Centro",
    coverImage: centro_thumbnail,
  },
  // {
  //   id: "notestorm",
  //   projectType: "personal",
  //   name: "NoteStorm",
  //   coverImage: notestorm_thumbnail,
  // },
];
