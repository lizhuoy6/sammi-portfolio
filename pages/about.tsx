import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import MainLayout from "../layouts/main";
import dynamic from "next/dynamic";

const Globe = dynamic(import("react-globe.gl"), { ssr: false });

const arcsData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [
    ["#414141ff", "#414141ff", "#414141ff", "#414141ff"][
      Math.round(Math.random() * 3)
    ],
    ["#414141ff", "#414141ff", "#414141ff", "#414141ff"][
      Math.round(Math.random() * 3)
    ],
  ],
}));

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
            <div className="text-6xl pb-4">About Me</div>
            <div className="pt-6 text-xl text-gray-500 flex items-center">
              <div className="flex-1">
                Hi there, I&lsquo;m Sammi!
                <br />
                <b>tl;dr</b>: I am a UX designer in Toronto, Canada.
                {!showStage1 && (
                  <button
                    className="block pt-4 underline"
                    onClick={() => setShowStage1(true)}
                  >
                    Read more?
                  </button>
                )}
              </div>
              <div className="-mr-60 hidden md:block">
                <Globe
                  width={700}
                  height={700}
                  enablePointerInteraction={false}
                  backgroundColor="white"
                  globeImageUrl="https://i.imgur.com/2wBJcKB.jpg"
                  arcsData={arcsData}
                  arcColor={"color"}
                  arcDashLength={() => Math.random()}
                  arcDashGap={() => Math.random()}
                  arcDashAnimateTime={3000}
                />
              </div>
            </div>
            <div
              className={`pt-20 text-xl text-gray-500 ${
                showStage1 ? "block" : "hidden"
              }`}
            >
              <p>
                I&lsquo;m comfortable working on{" "}
                <b>all aspects of the product lifecycle</b>, from developing
                ideas to delivering production-ready assets.
              </p>
              <p className="pt-4">
                I&lsquo;m passionate about improving the lives of others through
                design and I constantly enjoy learning new things every day from
                meeting people and friends.
              </p>
              {!showStage2 && showStage1 && (
                <button
                  className="block pt-4 underline"
                  onClick={() => setShowStage2(true)}
                >
                  Want to read even more?
                </button>
              )}
            </div>
            <div>
              <div
                className={`pt-40 text-xl text-gray-500 ${
                  showStage2 ? "block" : "hidden"
                }`}
              >
                <p>
                  <b>Background</b>
                </p>
                <img
                  src="/images/photo.jpg"
                  alt="sammi photo"
                  width={400}
                  className="float-right ml-6"
                />
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
                  summer learning the{" "}
                  <a
                    href="https://www.coursera.org/account/accomplishments/professional-cert/93CBRTL38JB7"
                    target={"_blank"}
                    className="underline font-bold"
                    rel="noreferrer"
                  >
                    Google UX certificate
                  </a>
                  &nbsp;in Coursera to get some initial understanding of how UX
                  design processes work in a professional setting.
                </p>
                <p className="pt-10">
                  <b>Why UX?</b>
                </p>
                <p className="pt-4">
                  Almost everything we use and experience today is designed.
                  From small things like water bottles, to whole experiences
                  like a wedding ceremony. By becoming a UX designer, I really
                  have a chance of building something that impact people&lsquo;s
                  daily lives.
                </p>
                <p className="pt-10">
                  <b>Skills</b>
                </p>
                <p className="pt-4 align-middle">
                  <img
                    className="inline-block mx-2 grayscale hover:grayscale-0 transition-all"
                    src="https://assets.stickpng.com/images/62c6bc0beee9410fe137d91e.png"
                    width={100}
                  />
                  <img
                    className="inline-block mx-2 ml-6 grayscale hover:grayscale-0 transition-all"
                    src="https://images.ctfassets.net/c17cslxyie2i/5nFQAWGAVzQuQCtfH2Vj3X/f721e5bcdb45dda6af26063061bdff4a/Adobe_XD_logo_one_line.png"
                    width={150}
                  />
                  <img
                    className="inline-block mx-2 ml-6 grayscale hover:grayscale-0 transition-all"
                    src="https://compucaresystems.net/wp-content/uploads/Adobe-Photoshop-Logo.png"
                    width={150}
                  />
                  <img
                    className="inline-block pt-2 mx-2 grayscale hover:grayscale-0 transition-all"
                    src="https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png"
                    width={170}
                  />
                  <img
                    className="inline-block mx-2 grayscale hover:grayscale-0 transition-all"
                    src="https://www.rstudio.com/wp-content/uploads/2018/10/RStudio-Logo-Flat.png"
                    width={120}
                  />
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
