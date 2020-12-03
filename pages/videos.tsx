import Layout from "../components/layout";
import { Pages } from "../components/nav";

export default function Videos({ images }) {
  return (
    <Layout activePage={Pages.Videos}>
      <main className="bg-indigo-50 p-8">
        <div className="flex justify-center text-3xl">Videos Coming Soon</div>
      </main>
    </Layout>
  );
}
