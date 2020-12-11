import Head from "next/head";
import Nav from "./nav";
import { Pages } from "../components/nav";

export default function Layout({ children, activePage, title, ...rest }) {
  return (
    <div className="max-w-6xl mx-auto shadow-lg">
      <Head>
        <title>Hawaii 2020 December</title>
        <link rel="icon" href="/favicon.ico" />
        {activePage === Pages.Map && (
          <>
            <script src="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
            <link
              href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
              rel="stylesheet"
            />
            <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></script>
            <link
              rel="stylesheet"
              href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css"
              type="text/css"
            />
          </>
        )}
      </Head>

      <Nav {...{ activePage, title }} {...rest} />
      {children}
      <footer className="bg-indigo-100 p-5">
        <div className="flex justify-center tracking-wide text-gray-500">
          Copyright © 2020 Carlton Joseph
        </div>
      </footer>
    </div>
  );
}
