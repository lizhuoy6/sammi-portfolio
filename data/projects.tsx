import { StaticImageData } from "next/image";
import centro_thumbnail from "../public/images/centro/cover.png";
import swinter_thumbnail from "../public/images/swinter/cover.png";
import fortickets_thumbnail from "../public/images/fortickets/cover.png";
import fortickets_slide_000 from "../public/images/fortickets/fortickets_slide_000.png";
import fortickets_slide_001 from "../public/images/fortickets/fortickets_slide_001.png";
import fortickets_slide_002 from "../public/images/fortickets/fortickets_slide_002.png";
import fortickets_slide_003 from "../public/images/fortickets/fortickets_slide_003.png";
import fortickets_slide_004 from "../public/images/fortickets/fortickets_slide_004.png";
import fortickets_slide_005 from "../public/images/fortickets/fortickets_slide_005.png";
import fortickets_slide_006 from "../public/images/fortickets/fortickets_slide_006.png";
import fortickets_slide_007 from "../public/images/fortickets/fortickets_slide_007.png";
import fortickets_slide_008 from "../public/images/fortickets/fortickets_slide_008.png";
import fortickets_slide_009 from "../public/images/fortickets/fortickets_slide_009.png";
import fortickets_slide_010 from "../public/images/fortickets/fortickets_slide_010.png";
import fortickets_slide_011 from "../public/images/fortickets/fortickets_slide_011.png";
import fortickets_slide_012 from "../public/images/fortickets/fortickets_slide_012.png";
import fortickets_slide_013 from "../public/images/fortickets/fortickets_slide_013.png";
import fortickets_slide_014 from "../public/images/fortickets/fortickets_slide_014.png";
import fortickets_slide_015 from "../public/images/fortickets/fortickets_slide_015.png";
import fortickets_slide_016 from "../public/images/fortickets/fortickets_slide_016.png";
import fortickets_slide_017 from "../public/images/fortickets/fortickets_slide_017.png";
import fortickets_slide_018 from "../public/images/fortickets/fortickets_slide_018.png";
import fortickets_slide_019 from "../public/images/fortickets/fortickets_slide_019.png";
import fortickets_slide_020 from "../public/images/fortickets/fortickets_slide_020.png";
import fortickets_slide_021 from "../public/images/fortickets/fortickets_slide_021.png";
import fortickets_slide_022 from "../public/images/fortickets/fortickets_slide_022.png";
import fortickets_slide_023 from "../public/images/fortickets/fortickets_slide_023.png";
import fortickets_slide_024 from "../public/images/fortickets/fortickets_slide_024.png";
import fortickets_slide_025 from "../public/images/fortickets/fortickets_slide_025.png";
import fortickets_slide_026 from "../public/images/fortickets/fortickets_slide_026.png";
import fortickets_slide_027 from "../public/images/fortickets/fortickets_slide_027.png";
import fortickets_slide_028 from "../public/images/fortickets/fortickets_slide_028.png";
import fortickets_slide_029 from "../public/images/fortickets/fortickets_slide_029.png";
import fortickets_slide_030 from "../public/images/fortickets/fortickets_slide_030.png";
// import notestorm_thumbnail from "../public/images/notestorm_thumbnail.png";

export interface Project {
  id: string;
  projectType: "personal";
  name: string;
  coverImage: StaticImageData;
  // To generate slide images, use guide from this link:
  // https://webapps.stackexchange.com/questions/45862/save-all-google-presentation-slides-as-images
  slides: StaticImageData[];
}

export const projects: Project[] = [
  {
    id: "fortickets",
    projectType: "personal",
    name: "ForTickets",
    coverImage: fortickets_thumbnail,
    slides: [
      fortickets_slide_000,
      fortickets_slide_001,
      fortickets_slide_002,
      fortickets_slide_003,
      fortickets_slide_004,
      fortickets_slide_005,
      fortickets_slide_006,
      fortickets_slide_007,
      fortickets_slide_008,
      fortickets_slide_009,
      fortickets_slide_010,
      fortickets_slide_011,
      fortickets_slide_012,
      fortickets_slide_013,
      fortickets_slide_014,
      fortickets_slide_015,
      fortickets_slide_016,
      fortickets_slide_017,
      fortickets_slide_018,
      fortickets_slide_019,
      fortickets_slide_020,
      fortickets_slide_021,
      fortickets_slide_022,
      fortickets_slide_023,
      fortickets_slide_024,
      fortickets_slide_025,
      fortickets_slide_026,
      fortickets_slide_027,
      fortickets_slide_028,
      fortickets_slide_029,
      fortickets_slide_030,
    ],
  },
  // {
  //   id: "swinter",
  //   projectType: "personal",
  //   name: "Swinter",
  //   coverImage: swinter_thumbnail,
  //   slides: [],
  // },
  {
    id: "centro",
    projectType: "personal",
    name: "Centro",
    coverImage: centro_thumbnail,
    slides: [],
  },
  // {
  //   id: "notestorm",
  //   projectType: "personal",
  //   name: "NoteStorm",
  //   coverImage: notestorm_thumbnail,
  //   slides: [],
  // },
];
