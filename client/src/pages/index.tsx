import InputModule from "@task/components/home/inputModule";
import Footer from "@task/components/shared/footer";
import Navbar from "@task/components/shared/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <InputModule /> <Footer />
      </main>
    </>
  );
}
