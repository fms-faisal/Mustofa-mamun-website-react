import Sidebar from "../../components/Sidebar";

export default function OnlineEcon2110() {
  return (
    <>
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

                {/* Problem Sets */}
                <div>
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Problem Set</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://drive.google.com/file/d/1oAJhH8SNYRqe4Sfzkn9n43fBKqPuPO5X/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 1
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1kc007PDYlvNDOxwCcV4s4iI6xW_si7N_/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 2
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1NM9LddBcPJXD_h5XXBUfPInAhgJ9cMHv/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 3
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1bYoSBzng_YtJ3Lp81rQXKLnTe-tCe8Qa/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 4
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1H1GFfMgY9FZLdirTx5g6vfNmClF4ofis/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 5
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/19HG6QlanN1ucTXJcY2GWbx6lqLMEVxqI/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 6
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1C46PJncw947akwdcbDxxXCRK4SKmvMCa/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 7
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1ZbT5aF4fhvbQCUFjhk5Tkw42_kOhJkGG/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 8
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1SXFNkHKxQ3-7MjPq28C9vCz9u9n5uozu/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 9
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1ncNi4lr_qrq44h8Y3EcX5HnEpo2W6rU_/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 10
                      </button>
                    </a>
                  </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Problem Set Keys */}
                <div>
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Problem Set Keys</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://drive.google.com/file/d/1Yd4RwiuVFOBOqUItoEyTlG3Kg2PFZbBg/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 1
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1f6jRwGlpgbn2VmzHsYAhsaBdJRWSYyD8/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 2
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1UBTgOWj6FeKN-_Ntu0D1fEUAVLsSC1_b/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 3
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1AWeh_qAd2qPJaZO29QF9muv13BZbdq_Q/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 4
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1H25R_RGTzeJk-3Bg5FPNZ8du2GFkLteC/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 5
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1oT5E2xHSjsvI2BMSMs2d5ppzAOb_9qWJ/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 6
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1lKzGE_58ZmHmyebibyz-ShBSoK0yztw_/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 7
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1IOVIa6iQUQUwkjudmWeFw2c2jW98VQRt/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 8
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1fK7hKZNACY7WDOVGte4cxoC_3eArDq99/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 9
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1eynM-OlzkCZqzSsiSfFUxcDXcJ_FWm9M/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 10
                      </button>
                    </a>
                  </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Reading Assignments */}
                <div>
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Reading Assignment</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://drive.google.com/file/d/1Q4vTUZ3IjMJggEtlKZpd7cuCxXiXtfQi/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Rd 1
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1MP5pW6rGkTy2S289lCWCkbylgyJNCm9D/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Rd 2
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1zB_htX7tUpa-4zWifFggEHKaMtVXgQdN/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Rd 3
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1t1Lo9tHznnqmcxflf7bVDWNnC87AFDPm/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Rd 4
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1l0pYvrKej1bVGEtvTDm23yDRrW72XZSM/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Rd 5
                      </button>
                    </a>
                  </div>
                </div>
              </main>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}