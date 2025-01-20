import Sidebar from "../../components/Sidebar";

export default function Econ303() {
  return (
    <>

      <main>
        <div className="flex w-full">
          {/* Sidebar */}
          <Sidebar/>

          {/* Main Content */}
          <div className="w-full lg:w-4/5 flex-grow px-4 mt-20 ">
            <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
              <header>
                <h1 className="text-xl text-gray-700 dark:text-white font-bold">ECON 303 - Intermediate Macroeconomics</h1>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </header>

              <main>
                {/* Class Schedule */}
                <p className="mt-4 leading-loose border-2 px-4 rounded-lg border-green-200 md:-ml-4 text-green-600 font-semibold text-center md:flex">
                  MWF at 12:00 - 12:50 am in DSH-132
                </p>
                <a
                  href="https://drive.google.com/file/d/1Cg7iY7RWhii45qg3cTtL0jh7G8aXul5C/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-4 leading-loose border-2 px-4 rounded-lg border-green-200 md:-ml-4 text-green-600 font-semibold text-center md:flex bg-green-50 hover:bg-green-100">
                    Syllabus
                  </p>
                </a>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Instructor Information */}
                <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">Dr. Mustofa Mahmud Al Mamun</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Office: ECON 2002</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours: Mondays and Thursdays (1:00 pm - 2:00 pm)</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Email: mmamun@unm.edu</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">
                  Zoom Link:{" "}
                  <a className="text-blue-400 font-bold" href="https://unm.zoom.us/j/9171407395">
                    https://unm.zoom.us/j/9171407395
                  </a>
                </p>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* TA Information */}
                <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">Teaching Assistant: Samuel Asare</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">PhD Student, Economics Department</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Office: Econ 2026</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours: Tuesday and Thursday (12:00 pm - 1:00 pm)</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Email: samasare@unm.edu</p>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Textbook Information */}
                <div>
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Textbook</p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Williamson, Stephen D.{" "}
                    <i className="font-semibold">Macroeconomics</i>. Sixth Edition. New York: Pearson, 2018{" "}
                    <span className="text-red-400">(Required)</span>
                  </p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Blanchard, Olivier.{" "}
                    <i className="font-semibold">Macroeconomics</i>. Eighth edition. New York: Pearson, 2021.{" "}
                    <span className="text-blue-400">(Optional)</span>
                  </p>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Problem Sets */}
                <div>
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Problem Set</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://drive.google.com/file/d/1O9PUVxoEzXWVst_JQcumt4TvmRsk92HP/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 1
                      </button>
                    </a>
                  </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Class Project Ideas */}
                <div>
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Class Project Ideas</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://drive.google.com/file/d/1PQhh1w7Mv7HKi47y91zYLrvCMm9-wFfq/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Topics
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1Gywu9MxjybILDfvdxbT2EkRPW0ZPHL6g/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Sample Videos
                      </button>
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1aEka4ydfVzWRQFkDKkq5wzttlp_yirX6/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Instructions
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