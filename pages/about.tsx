import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import MainLayout from "../layouts/main";
import Image from "next/image";

const Home: NextPage = () => {
  const [showStage1, setShowStage1] = useState(false);
  const [showStage2, setShowStage2] = useState(false);

  return (
    <div>
      <Head>
        <title>Sammi Li</title>
      </Head>
      <MainLayout>
        <div className="py-20 pb-80 mb-40">
          <div className="container mx-auto max-w-5xl px-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/photo.jpg"
              alt="sammi photo"
              width={400}
              className="float-right ml-6"
            />
            <div className="text-6xl pb-4">About Me</div>
            <div className="pt-6 text-xl text-gray-500 max-w-2xl">
              Hi there, I&lsquo;m Sammi!
              <br />
              <b>tl;dr</b>: I am a UX designer in Toronto, Canada.
              {!showStage1 && (
                <button
                  className="block pt-4"
                  onClick={() => setShowStage1(true)}
                >
                  Read more?
                </button>
              )}
            </div>
            <div
              className={`pt-6 text-xl text-gray-500 max-w-2xl ${
                showStage1 ? "block" : "hidden"
              }`}
            >
              <p>
                I&lsquo;m a user experience designer based in Toronto, Canada.
                I&lsquo;m comfortable working on all aspects of the product
                lifecycle, from developing ideas to delivering production-ready
                assets.
              </p>
              <p className="pt-4">
                I&lsquo;m passionate about improving the lives of others through
                design and I constantly enjoy learning new things every day from
                meeting people and friends.
              </p>
              {!showStage2 && showStage1 && (
                <button
                  className="block pt-4"
                  onClick={() => setShowStage2(true)}
                >
                  Want to read even more?
                </button>
              )}
            </div>
            <div>
              <div
                className={`pt-6 text-xl text-gray-500 max-w-2xl ${
                  showStage2 ? "block" : "hidden"
                }`}
              >
                <p>
                  <b>Background</b>
                </p>
                <p className="pt-4">
                  I graduated from UTSC in June 2022, and I am currently
                  pursuing my master&lsquo;s degree in User Experience Design at
                  the University of Toronto.
                </p>
                <p className="pt-4">
                  Before being admitted to the master&lsquo;s program, I worked
                  at a start-up as a UX designer. At that time, I was a
                  self-taught designer and have learnt some basic concepts and
                  theories of UX/UI and product design through attending
                  workshops and designathons, watching YouTube instructor
                  videos, and applying these to my working projects.
                </p>
                <p className="pt-4">
                  After obtaining my bachelor&lsquo;s degree, I spent my whole
                  summer learning the Google UX certificate in Coursera to get
                  some initial understanding of how UX design processes work in
                  a professional setting.
                </p>
                <p className="pt-4">
                  <b>Why UX?</b>
                </p>
                <p className="pt-4">
                  Almost everything we use and experience today is designed.
                  From small things like water bottles, to whole experiences
                  like a wedding ceremony. By becoming a UX designer, I really
                  have a chance of building something that impact people&lsquo;s
                  daily lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
