import Layout from "../components/layout";
import { Pages } from "../components/nav";

export default function Schedule({ images }) {
  return (
    <Layout activePage={Pages.Schedule}>
      <main className="bg-indigo-50 p-8">
        <div className="flex justify-center text-3xl">Schedule Coming Soon</div>
      </main>
    </Layout>
  );
}
