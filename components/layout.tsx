import Head from "next/head";
import Nav from "./nav";

export default function Layout({ children, activePage }) {
  return (
    <div className="max-w-6xl mx-auto shadow-lg">
      <Head>
        <title>Hawaii 2020 December</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav {...{ activePage }} />
      {children}
      <footer className="bg-indigo-100 p-5">
        <div className="flex justify-center tracking-wide text-gray-600">
          Copyright © 2020 Carlton Joseph
        </div>
      </footer>
    </div>
  );
}
