import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <main>{children}</main>
      <Footer />
    </>
  );
}
