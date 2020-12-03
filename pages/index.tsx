import Image from "next/image";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { Pages } from "../components/nav";
import Images from "../lib/main";

export default function Home({ images }) {
  return (
    <Layout activePage={Pages.Pictures}>
      <main className="grid grid-cols-4 bg-indigo-50">
        {images.map((i, key) => (
          <div className="flex items-center p-1 relative" {...{ key }}>
            <Image
              className="object-cover"
              width="400px"
              height="300px"
              {...i}
            />
            <div className="absolute z-1 bottom-1 right-3 text-lg font-bold text-indigo-100">
              {i.alt}
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: { ...(await Images()) },
});
