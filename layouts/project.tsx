/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import MainLayout from "./main";
import styled from "styled-components";
import Toc from "react-toc";
import { renderToString } from "react-dom/server";

interface ProjectLayoutProps extends React.PropsWithChildren {
  meta: {
    title: string;
    author: string;
    subtitles: string[];
    figmaLink: string;
    pdfLink: string;
    sideImageLink: string;
  };
}

const ProjectLayout = ({ children, meta }: ProjectLayoutProps) => {
  const contentString = renderToString(children as any);

  /**
   * Get a list of h2 tags from the content string
   * Used to construct the TOC.
   */
  const getHeadings = (
    source: string
  ): Array<{ text: string; link: string }> => {
    const regex = /<h1>(.*?)<\/h1>/g;

    if (source.match(regex)) {
      return source.match(regex)!.map((heading) => {
        const headingText = heading.replace("<h1>", "").replace("</h1>", "");

        const link = "#" + headingText.replace(/ /g, "_").toLowerCase();

        return {
          text: headingText,
          link,
        };
      });
    }

    return [];
  };

  const headings = getHeadings(contentString);

  return (
    <>
      <Head>
        <title>{meta.title} - Sammi Li</title>
      </Head>
      <MainLayout>
        <div className="container mx-auto max-w-5xl px-4">
          <img
            width="300"
            className="float-right mt-20 hidden md:inline-block"
            src={meta.sideImageLink}
            alt="side image"
          ></img>
          <h1 className="text-5xl pt-20 pb-5">{meta.title}</h1>
          <div className="pb-5">
            {meta.subtitles.map((subtitle) => (
              <div className="text-xl pb-2" key={subtitle}>
                {subtitle}
              </div>
            ))}
          </div>
          <div className="pb-10 flex flex-col md:flex-row gap-5 mb-5 md:mb-20">
            <a
              href={meta.figmaLink}
              className="flex flex-row gap-2 items-center bg-black px-6 py-4 rounded-xl cursor-pointer hover:scale-105 transition-all"
            >
              <img
                width={40}
                src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format"
                alt=""
              />
              <div className="text-xl text-white">Figma Prototype</div>
            </a>
            <a
              href={meta.pdfLink}
              className="flex flex-row gap-2 items-center bg-black px-6 py-4 rounded-xl cursor-pointer hover:scale-105 transition-all"
            >
              <img
                width={40}
                src="https://cdn4.iconfinder.com/data/icons/file-extensions-1/64/pdfs-512.png"
                alt=""
              />
              <div className="text-xl text-white">Download PDF</div>
            </a>
          </div>
          <div className="flex flex-row gap-10">
            <TocWrapper className="hidden md:block pt-6">
              <ul>
                {headings.map((heading) => {
                  return (
                    <li key={heading.text}>
                      <a href={heading.link}>{heading.text}</a>
                    </li>
                  );
                })}
              </ul>

              <Toc markdownText={"test"} lowestHeadingLevel={2} />
            </TocWrapper>
            <PostWrapper>{children}</PostWrapper>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ProjectLayout;

const PostWrapper = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    padding-bottom: 10px;
  }
  h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 1rem;
    margin-bottom: 7px;
  }
  p {
    font-size: 16px;
    padding-bottom: 10px;
  }

  a {
    text-decoration: underline;
  }

  ol,
  ul {
    margin-left: 20px;
    margin-bottom: 20px;
  }

  ul {
    li {
      list-style: circle;
    }
  }

  ol {
    li {
      list-style-type: decimal;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    a {
      padding-right: 5px;
      font-size: 1rem;
      opacity: 0.5;
      text-decoration: none;
    }
  }
`;

const TocWrapper = styled.div`
  position: sticky;
  align-self: flex-start;
  top: 80px;
  min-width: 200px;
  margin-left: -40px;
  ul {
    margin-left: 20px;
  }
  li {
    padding-bottom: 10px;
    a {
      color: rgba(0, 0, 0, 0.5) !important;
      &:hover {
        color: rgba(0, 0, 0, 1) !important;
      }
    }
  }
`;
