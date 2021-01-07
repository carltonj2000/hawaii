import Layout from "../components/layout";
import { Pages } from "../components/nav";
import { schedule } from "../lib/schedule";

export default function Schedule({ schedule }) {
  return (
    <Layout activePage={Pages.Schedule} title="Hawaii Schedule">
      <main className="flex justify-center bg-indigo-50">
        <table className="m-0 sm:m-2 md:m-4 lg:m-6 shadow-lg bg-white rounded-sm text-left">
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
                        <h1 className="text-sm sm:text-md md:text-lg lg:text-xl font-medium">
                          {l.location}{" "}
                          <span className="text-sm sm:text-md md:text-lg lg:text-xl font-normal italic">
                            {l.time}
                          </span>
                        </h1>
                        <li>
                          <ul className="list-inside list-disc">
                            {l.activities.map((a) => (
                              <li
                                key={a.replace(/\s/g)}
                                className="text-sm sm:text-md md:text-lg lg:text-xl"
                              >
                                {a}
                              </li>
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

export const getStaticProps = () => ({ props: schedule() });
