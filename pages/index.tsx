import type { NextPage } from "next";
import Head from "next/head";
import Typed from "react-typed";
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Header from "./components/header";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const TAB_ITEMS = [
  { title: "School Projects", id: "school" },
  { title: "Work Experiences", id: "work" },
  { title: "Personal Projects", id: "personal" },
];

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("school");

  return (
    <div>
      <Head>
        <title>Sammi Li</title>
      </Head>
      <Header />
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
          <div className="pt-6 text-gray-500 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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

          {currentTab === "school" ? (
            <div className="pt-6 flex flex-col space-y-10">
              <div className="hover:scale-105 transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/tJz1RTy.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/tJz1RTy.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/XMyof6Y.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/aSj1ZhN.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/tJz1RTy.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/XMyof6Y.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/aSj1ZhN.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
            </div>
          ) : null}

          {currentTab === "work" ? (
            <div className="pt-6 flex flex-col space-y-10">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/aSj1ZhN.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/aSj1ZhN.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/tJz1RTy.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/XMyof6Y.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/aSj1ZhN.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/tJz1RTy.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/XMyof6Y.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/aSj1ZhN.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
            </div>
          ) : null}

          {currentTab === "personal" ? (
            <div className="pt-6 flex flex-col space-y-10">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/tJz1RTy.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/XMyof6Y.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/aSj1ZhN.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/tJz1RTy.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/XMyof6Y.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i.imgur.com/aSj1ZhN.png"
                  alt="my app"
                  className="w-fill"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="border-t py-12">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="text-gray-400 text-xl">
            Let&lsquo;s get connected!
          </div>
          <ul className="flex space-x-4 text-3xl text-gray-400 justify-center pt-6">
            <li className="hover:text-gray-500">
              <AiFillInstagram />
            </li>
            <li className="hover:text-gray-500">
              <a href="mailto:lizhuoy6@gmail.com">
                <AiFillMail />
              </a>
            </li>
            <li className="hover:text-gray-500">
              <a
                href="https://linkedin.com/in/zhuoying-l-117399152/"
                target="__blank"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
          <div className="pt-6 text-gray-400">
            Copyright &copy; 2022 Sammi Li, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
