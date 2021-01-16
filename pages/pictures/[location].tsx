import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { Pages } from "../../components/nav";
import { locations, location } from "../../lib/location";
import Back from "../../components/images/ArrowCircleLeft";

export default function Location({ location }) {
  const router = useRouter();
  if (!location) return <div>Nothing found error.</div>;
  return (
    <Layout activePage={Pages.Pictures} title={location.name}>
      <main className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 bg-indigo-50">
        {location.images.map((i, key) => (
          <div {...{ key }} className="flex items-center p-1">
            <Link href={i.link}>
              <a className="w-full">
                <img className="object-cover h-48 w-full" {...i} />
              </a>
            </Link>
          </div>
        ))}
      </main>
    </Layout>
  );
}

export const getStaticPaths = () => ({
  paths: locations(),
  fallback: false,
});

export const getStaticProps = ({ params }) => ({
  props: { location: location(params.location) },
});
