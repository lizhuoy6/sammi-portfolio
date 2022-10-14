import Image from "next/image";
import MainLayout from "../../layouts/main";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Remarkable } from "remarkable";
import HeaderIdsPlugin from "remarkable-header-ids";
import Toc from "react-toc";
import styled from "styled-components";

export async function getStaticPaths() {
  const fileNames = fs.readdirSync("docs/projects");
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  const paths = slugs.map((slug) => ({
    params: { id: slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const fullPath = path.join("docs/projects", `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const md = new Remarkable().use(HeaderIdsPlugin());
  md.set({ html: true });

  return {
    props: {
      meta: data,
      markdown: content,
      content: md.render(content),
    },
  };
}

function Project({
  meta,
  markdown,
  content,
}: {
  content: string;
  markdown: string;
  meta: {
    title: string;
    author: string;
    subtitle: string;
    figmaLink: string;
    pdfLink: string;
    sideImageLink: string;
  };
}) {
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
          ></img>
          <h1 className="text-5xl pt-20 pb-5">{meta.title}</h1>
          <div className="text-xl pb-10">{meta.subtitle}</div>
          <div className="pb-10 flex flex-col md:flex-row gap-5 mb-5 md:mb-20">
            <a
              href={meta.figmaLink}
              className="flex flex-row gap-2 items-center bg-black px-6 py-4 rounded-xl cursor-pointer hover:scale-105 transition-all"
            >
              <img
                width={40}
                src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format"
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
              />
              <div className="text-xl text-white">Download PDF</div>
            </a>
          </div>
          <div className="flex flex-row gap-10">
            <TocWrapper className="hidden md:block">
              <Toc markdownText={markdown} />
            </TocWrapper>
            <PostWrapper dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Project;

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
  top: 20px;
  min-width: 200px;
  margin-left: -40px;
  ul {
    margin-left: 20px;
  }
  li {
    a {
      color: rgba(0, 0, 0, 0.5) !important;
      &:hover {
        color: rgba(0, 0, 0, 1) !important;
      }
    }
  }
`;
