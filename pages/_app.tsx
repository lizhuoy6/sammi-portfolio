/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { renderToString } from "react-dom/server";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mixpanel from "mixpanel-browser";

mixpanel.init("94527584e70b5578ac073748c27bcdec", {
  debug: process.env.NODE_ENV !== "production",
});

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
      className="sticky top-20 z-50 bg-white pb-4 pt-4 mb-0 mt-0 pl-2 -ml-2"
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
