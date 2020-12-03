import Layout from "../components/layout";
import { Pages } from "../components/nav";

export default function Map() {
  return (
    <Layout activePage={Pages.Map}>
      <main className="bg-indigo-50 p-8">
        <div className="flex justify-center text-3xl">Map Coming Soon</div>
      </main>
    </Layout>
  );
}
