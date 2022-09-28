import type { NextPage } from "next";
import Head from "next/head";
import Typed from "react-typed";
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import { projects } from "../data/projects";
import MainLayout from "../layouts/main";

const TAB_ITEMS = [
  // { title: "School Projects", id: "school" },
  // { title: "Work Experiences", id: "work" },
  { title: "Personal Projects", id: "personal" },
];

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("personal");

  return (
    <div>
      <Head>
        <title>Sammi Li</title>
      </Head>
      <MainLayout>
        <div className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-6xl pb-4">Hi I&lsquo;m Sammi Li!</div>
            <div className="text-4xl text-gray-600">
              <Typed
                strings={[
                  "I am a student",
                  "I am a UX designer",
                  "I am a bunny lover",
                  "I am an angel",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <div className="pt-6 text-xl text-gray-500 max-w-2xl">
              I am a graduate student at the University of Toronto studying UXD.
              I am passionate about creating user-centered products that are
              accessible and inclusive.
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto max-w-5xl px-4 py-8">
            <ul className="flex place-content-between">
              {TAB_ITEMS.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`cursor-pointer ${
                    currentTab === item.id ? "text-black" : "text-gray-400"
                  }`}
                >
                  <div className="text-xl">{item.title}</div>
                  {currentTab === item.id ? <BsChevronDown /> : null}
                </li>
              ))}
            </ul>
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
