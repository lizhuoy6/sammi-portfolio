/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { renderToString } from "react-dom/server";

const CustomH1 = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => {
  const contentString = renderToString(props.children as any);
  const id = contentString.replace(/ /g, "_").toLowerCase();

  return (
    <h1
      className="sticky top-20 bg-white pb-4 pt-4 mb-0 mt-0 pl-2 -ml-2"
      id={id}
      {...props}
    />
  );
};

const CustomImg = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>
) => {
  return <img {...props} />;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={{ h1: CustomH1, img: CustomImg }}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
