import Layout from "../components/layout";
import { Pages } from "../components/nav";

export default function Videos({ images }) {
  return (
    <Layout activePage={Pages.Videos} title="Hawaii Videos">
      <main className="flex flex-col items-center bg-indigo-50">
        <h1 className="text-xl py-4 font-semibold text-gray-500">
          Kona, Lava Fields, Hapuna Beach Ride
        </h1>
        <iframe
          width="370"
          height="205"
          src="https://www.youtube.com/embed/Vgvc9p3zOio"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </main>
    </Layout>
  );
}
