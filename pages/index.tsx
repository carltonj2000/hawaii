import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { Pages } from "../components/nav";
import { homePagePics } from "../lib/locations/index";

export default function Home({ images }) {
  return (
    <Layout activePage={Pages.Pictures} title="Hawaii">
      <main className="grid grid-cols-4 bg-indigo-50">
        {images.map((i, key) => (
          <div className="flex items-center p-1 relative" {...{ key }}>
            <Link href={i.location}>
              <a>
                <Image
                  className="object-cover"
                  width="400px"
                  height="300px"
                  {...i}
                />
              </a>
            </Link>
            <div className="absolute z-1 bottom-3 right-3 text-lg font-bold text-indigo-100">
              {i.alt}
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => ({
  props: { images: homePagePics() },
});
