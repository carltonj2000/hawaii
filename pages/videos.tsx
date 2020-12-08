import Layout from "../components/layout";
import { Pages } from "../components/nav";

export default function Videos({ images }) {
  return (
    <Layout activePage={Pages.Videos}>
      <main className="flex flex-col items-center bg-indigo-50">
        <h1 className="text-xl py-4 font-semibold text-gray-500">
          Vietnam North To South
        </h1>
        <iframe
          width="480"
          height="315"
          title="Vietnam North To South"
          src="https://www.youtube.com/embed/Z3CMb2qenog"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1 className="text-xl py-4 font-semibold text-gray-500">
          Hue Motorcycling
        </h1>
        <iframe
          width="480"
          height="315"
          title="Hue Motorcycling"
          src="https://www.youtube.com/embed/DF3o9nidGNA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </main>
    </Layout>
  );
}

// <div className="flex justify-center text-3xl">Videos Coming Soon</div>
