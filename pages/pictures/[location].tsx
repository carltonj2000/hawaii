import Image from "next/image";
import Layout from "../../components/layout";
import { Pages } from "../../components/nav";
import { locations, location } from "../../lib/locations";

export default function Location({ location }) {
  if (!location) return <div>Nothing found error.</div>;
  return (
    <Layout activePage={Pages.Pictures} title={location.name}>
      <main className="grid grid-cols-4 bg-indigo-50">
        {location.images.map((i, key) => (
          <div {...{ key }} className="flex items-center p-1">
            <img
              className="object-cover h-48 w-full"
              {...i}
            />
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
