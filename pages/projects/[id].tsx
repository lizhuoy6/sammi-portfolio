import Image from "next/image";
import { Project, projects } from "../../data/projects";

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: { project: projects.find((project) => project.id === params.id) },
  };
}

function Project({ project }: { project: Project }) {
  return (
    <div>
      {project.slides.map((slide) => {
        return (
          <Image
            src={slide}
            width="1920"
            height="1080"
            key="slide"
            placeholder="blur"
            alt="slide"
            layout="responsive"
          />
        );
      })}
    </div>
  );
}

export default Project;
