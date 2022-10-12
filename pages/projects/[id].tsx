import Image from "next/image";
import { Project, projects } from "../../data/projects";
import MainLayout from "../../layouts/main";
import Head from "next/head";

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
    <>
      <Head>
        <title>{project.name} - Sammi Li</title>
      </Head>
      <MainLayout>
        <div className="container mx-auto max-w-5xl px-4">
          <h1 className="text-5xl pt-20 pb-10">{project.name}</h1>
          {project.slides.map((slide) => {
            return (
              <div key={slide.src} className="py-4">
                <Image
                  src={slide}
                  width="1920"
                  height="1080"
                  placeholder="blur"
                  alt="slide"
                  layout="responsive"
                />
              </div>
            );
          })}
        </div>
      </MainLayout>
    </>
  );
}

export default Project;
