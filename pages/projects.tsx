import type { NextPage } from "next";
import Head from "next/head";
import Typed from "react-typed";
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import { projects } from "../data/projects";
import MainLayout from "../layouts/main";
import mixpanel from "mixpanel-browser";

const TAB_ITEMS = [{ title: "Projects", id: "personal" }];

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("personal");

  useEffect(() => {
    mixpanel.track("Projects page view");
  }, []);

  return (
    <div>
      <Head>
        <title>Projects - Sammi Li</title>
      </Head>
      <MainLayout>
        <div className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-6xl pb-4">Projects</div>
          </div>
        </div>
        <div>
          <div className="container mx-auto max-w-5xl px-4 py-8">
            {TAB_ITEMS.map((item) => {
              if (item.id === currentTab) {
                return (
                  <div key={item.id} className="pt-6 flex flex-col space-y-10">
                    {projects
                      .filter((project) => project.projectType === item.id)
                      .map((project) => {
                        return (
                          <div
                            className="hover:scale-105 transition-all"
                            key={project.id}
                          >
                            <a
                              href={`/projects/${project.id}`}
                              target="__blank"
                            >
                              <Image
                                src={project.coverImage}
                                alt={project.name}
                                layout="responsive"
                                width="1920"
                                height="960"
                                placeholder="blur"
                              />
                            </a>
                          </div>
                        );
                      })}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
