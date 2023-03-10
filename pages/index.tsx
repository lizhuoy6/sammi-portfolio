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

const TAB_ITEMS = [
  // { title: "School Projects", id: "school" },
  { title: "Projects", id: "personal" },
];

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("personal");

  useEffect(() => {
    mixpanel.track("Home page view");
  }, []);

  return (
    <div>
      <Head>
        <title>Sammi Li</title>
      </Head>
      <MainLayout>
        <div className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-6xl pb-4">Hi I&lsquo;m Sammi Li!</div>
                <div className="text-4xl text-gray-600">
                  <Typed
                    strings={[
                      "I am a student",
                      "I am a UX designer",
                      "I am a UX researcher",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </div>
                <div className="pt-6 text-xl text-gray-500 max-w-2xl">
                  Design is so simple, that&lsquo;s why it is so complicated.
                </div>
              </div>
              <div className="hidden md:block">
                <div className="rounded-full w-80 h-80 overflow-hidden bg-[url('/images/profile-pic-4.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
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
                            className="hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
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
