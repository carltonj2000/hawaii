import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { Pages } from "../../components/nav";
import { locations, location } from "../../lib/location";
import Close from "../../components/images/X";
import Previous from "../../components/images/ArrowCircleLeft";
import Next from "../../components/images/ArrowCircleRight";

export default function Location({ name, images, next, previous }) {
  const router = useRouter();
  return (
    <Layout activePage={Pages.Pictures} title={name}>
      <div className="relative">
        <main className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 bg-indigo-50">
          {images.map((i, key) => (
            <div {...{ key }} className="flex items-center p-1">
              <Link href={i.link}>
                <a className="w-full">
                  <img className="object-cover h-48 w-full" {...i} />
                </a>
              </Link>
            </div>
          ))}
        </main>
        <div className="absolute top-2 right-2 flex text-yellow-100 hidden">
          <span className="mx-1" onClick={router.back}>
            <Close />
          </span>
          <span className="mx-1" onClick={() => router.replace(previous)}>
            <Previous />
          </span>
          <span className="mx-1" onClick={() => router.replace(next)}>
            <Next />
          </span>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = () => ({ paths: locations, fallback: false });

export const getStaticProps = ({ params }) => ({
  props: location(params.location),
});
