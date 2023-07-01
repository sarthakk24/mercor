import Footer from "@task/components/shared/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        Social Media Content Generation <Footer />
      </main>
    </>
  );
}
