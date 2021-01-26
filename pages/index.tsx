import Link from "next/link";
import Layout from "../components/layout";
import { Pages } from "../components/nav";
import { homePage } from "../lib/homePage";

export default function Home({ images }) {
  return (
    <Layout activePage={Pages.Pictures} title="Hawaii">
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 bg-indigo-50">
        {images && images.length > 0 ? (
          images.map((i, key) => (
            <div className="flex items-center p-1 relative" {...{ key }}>
              <Link href={i.location}>
                <a className="w-full">
                  <img className="object-cover h-48 w-full" {...i} />
                </a>
              </Link>
              <div className="px-2 py-0 opacity-70 bg-gray-600 rounded-full absolute z-1 bottom-4 right-3 text-lg font-bold text-indigo-100">
                {i.alt}
              </div>
            </div>
          ))
        ) : (
          <div>No Images Yet</div>
        )}
      </main>
    </Layout>
  );
}

export const getStaticProps = () => ({ props: { images: homePage } });
