import Layout from "../components/layout";
import { Pages } from "../components/nav";
import { GetStaticProps } from "next";
import { schedule } from "../lib/schedule";

export default function Schedule({ schedule }) {
  console.log(schedule);
  return (
    <Layout activePage={Pages.Pictures}>
      <main className="flex justify-center bg-indigo-50">
        <table className="m-6 shadow-lg bg-white rounded-sm text-left">
          <thead>
            <tr>
              <th className="border-b p-4 text-gray-500">Date</th>
              <th className="border-b p-4 text-gray-500">Activities</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((tr, trKey) => (
              <tr key={trKey} className="hover:bg-indigo-100">
                <td className="border-b p-4 text-gray-500">{tr.date}</td>
                <td className="border-b p-4 text-gray-500">
                  <ul>
                    {tr.locations.map((l) => (
                      <div key={l.location.replace(/\s/g)}>
                        <h1 className="text-xl font-medium">
                          {l.location}{" "}
                          <span className="text-base font-normal italic">
                            {l.time}
                          </span>
                        </h1>
                        <li>
                          <ul className="list-inside list-disc">
                            {l.activities.map((a) => (
                              <li key={a.replace(/\s/g)}>{a}</li>
                            ))}
                          </ul>
                        </li>
                      </div>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => ({ props: schedule() });
