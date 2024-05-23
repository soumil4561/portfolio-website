import Home from "./home/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Head from "next/head";
import "./styles.css";
//each of these components will return a different section of the page

export default function Page() {
  return (
    <>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Home />
      <Experience />
      <Projects />
      <Contact />
      {/* */}
    </>
  );
}
