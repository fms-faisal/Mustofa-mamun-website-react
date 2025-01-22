import { Helmet } from "react-helmet";
import Sidebar from "../../components/Sidebar";

export default function OnlineEcon2110() {
  return (
    <>
    <Helmet>
        <title>ECON 2110 (online) | Mustofa Mamun</title>
        <meta name="description" content="ECON 2110 - Macroeconomic Principles (online) course page of Mustofa Mamun" />
      </Helmet>
      <main>
        <div className="flex w-full">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="w-full lg:w-4/5 flex-grow px-4 mt-20">
            <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
              <header>
                <h1 className="text-xl text-gray-700 dark:text-white font-bold">ECON 2110 - Macroeconomic Principles</h1>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <p className="text-xl text-gray-700 dark:text-white mt-4">Online Intersession Course</p>
                <p className="text-xl text-gray-700 dark:text-white">December 16, 2024 - January 18, 2025</p>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </header>

              <main>
                {/* Instructor Information */}
                <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">Dr. Mustofa Mahmud Al Mamun</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">
                  Zoom Link:{" "}
                  <a className="text-blue-400 font-bold" href="https://unm.zoom.us/j/9171407395">
                    https://unm.zoom.us/j/9171407395
                  </a>
                </p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours via Zoom: Mondays and Wednesdays (1:00 pm - 2:00 pm)</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Email: mmamun@unm.edu</p>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Tentative Schedule */}
                <div className="container mx-auto">
                  <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Tentative Schedule (Subject to Change)</h4>

                  {/* Table */}
                  <div className="overflow-x-auto shadow-lg rounded-lg mt-4">
                    <table className="w-full bg-white border-collapse border border-gray-300">
                      {/* Table Header */}
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="py-3 px-4 text-left text-gray-700 font-bold border border-gray-300">Date</th>
                          <th className="py-3 px-4 text-left text-gray-700 font-bold border border-gray-300">Event</th>
                          <th className="py-3 px-4 text-left text-gray-700 font-bold border border-gray-300">Details</th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {/* Dec 16 Row */}
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border border-gray-300 font-medium text-gray-600">Dec 16</td>
                          <td className="py-3 px-4 border border-gray-300">Intersession Course</td>
                          <td className="py-3 px-4 border border-gray-300">Starts!</td>
                        </tr>

                        {/* Module 1 Row */}
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border border-gray-300 font-medium text-gray-600">Module 1</td>
                          <td className="py-3 px-4 border border-gray-300">
                            Introduction to Macroeconomics, Math Review, Demand-Supply, Income, Inflation, Growth Models, and Private Sector
                          </td>
                          <td className="py-3 px-4 border border-gray-300">Chapters 1, 2, 4, 10, 11, 12, 13, and 14</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border border-gray-300 font-medium">Break!</td>
                          <td className="py-3 px-4 border border-gray-300">Starts: Dec. 23, 2024</td>
                          <td className="py-3 px-4 border border-gray-300">Ends: Jan. 1, 2025</td>
                        </tr>

                        {/* Deadline Row */}
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border border-gray-300 font-medium text-red-500">Deadline</td>
                          <td className="py-3 px-4 border border-gray-300 text-gray-700">Problem Sets 1-5 (Jan 02, 11:59 PM)</td>
                          <td className="py-3 px-4 border border-gray-300 font-semibold text-red-600">Exam 1: (Jan 03, 11:59 PM)</td>
                        </tr>

                        {/* Module 2 Row */}
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border border-gray-300 font-medium text-gray-600">Module 2</td>
                          <td className="py-3 px-4 border border-gray-300">
                            Unemployment, Monetary Policy, Fiscal Policy, AS-AD, International Trade, and International Finance
                          </td>
                          <td className="py-3 px-4 border border-gray-300">Chapters 15, 16, 17, 6, 8, 20, 21, 22, 23, 3, 9, 18, and 19</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border border-gray-300 font-medium text-red-500">Deadline</td>
                          <td className="py-3 px-4 border border-gray-300 text-gray-700">
                            Problem Sets 6-10 (Jan 13, 11:59 PM)<br />Readings 1-5 (Jan 13, 11:59 PM)
                          </td>
                          <td className="py-3 px-4 border border-gray-300 font-semibold text-red-600">Exam 2: (Jan 14, 11:59 PM)</td>
                        </tr>

                        {/* Jan 18 Row */}
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 border border-gray-300 font-medium text-gray-600">Jan 18</td>
                          <td className="py-3 px-4 border border-gray-300">Intersession Course</td>
                          <td className="py-3 px-4 border border-gray-300 font-bold text-green-600">Ends! Congrats!</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />


              </main>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}