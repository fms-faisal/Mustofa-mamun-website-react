import Sidebar from '../../components/Sidebar';

export default function Econ2110() {
  return (
    <>
      <main>
        <div className="flex w-full">
          {/* Reusable Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="w-full lg:w-4/5 flex-grow px-4 mt-20">
            <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
              <header>
                <h1 className="text-xl text-gray-700 dark:text-white font-bold">ECON 2110 - Macroeconomic Principles</h1>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </header>

              <main>
                {/* Instructor Information */}
                <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">Dr. Mustofa Mahmud Al Mamun</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Office: ECON 2002</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours: Mondays and Thursdays (1:00 pm - 2:00 pm)</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Email: mmamun@unm.edu</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">
                  Zoom Link:{' '}
                  <a className="text-blue-400 font-bold" href="https://unm.zoom.us/j/9171407395">
                    https://unm.zoom.us/j/9171407395
                  </a>
                </p>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Course Sections */}
                <div className="flex flex-wrap gap-x-2 justify-between">
                  {/* Section 1 */}
                  <div>
                    <p className="mt-4 leading-loose border-2 px-2 rounded-lg border-green-200 md:-ml-4 text-green-600 font-semibold text-center md:flex">
                      ECON 2110 - 001
                    </p>
                    <p className="mt-4 leading-loose border-2 px-2 rounded-lg border-green-200 md:-ml-4 text-green-600 font-semibold text-center md:flex">
                      MWF at 10:00-10:50 am in ANTHO-163
                    </p>
                    <a href="https://drive.google.com/file/d/1r2eEL_Dzff1EAKtZtYrxYbVVLmBrY8PZ/view" target="_blank" rel="noopener noreferrer">
                      <p className="mt-4 leading-loose border-2 px-4 rounded-lg border-green-200 md:-ml-4 text-green-600 font-semibold text-center md:flex bg-green-50 hover:bg-green-100">
                        Syllabus
                      </p>
                    </a>

                    {/* TA Information */}
                    <div>
                      <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">Teaching Assistant: Ziyadkhan Gurbanli</p>
                      <p className="leading-loose text-gray-600 dark:text-gray-50">PhD Student, Economics Department</p>
                      <p className="leading-loose text-gray-600 dark:text-gray-50">Office: ECON 2021</p>
                      <p className="leading-loose text-gray-600 dark:text-gray-50">
                        Drop-in hours: <br />
                        1:00-2:00 pm [Tuesday & Friday]
                      </p>
                      <p className="leading-loose text-gray-600 dark:text-gray-50">Email: zgurbanli@unm.edu</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="md:border-r-2 md:border-gray-200 md:dark:border-gray-700"></div>

                  {/* Section 2 */}
                  <div>
                    <hr className="border-gray-200 dark:border-gray-700 my-6 md:my-0 md:hidden" />
                    <p className="mt-4 leading-loose border-2 px-2 md:-ml-4 rounded-lg border-green-200 text-green-600 font-semibold text-center md:flex">
                      ECON 2110 - 016
                    </p>
                    <p className="mt-4 leading-loose border-2 px-2 md:-ml-4 rounded-lg border-green-200 text-green-600 font-semibold text-center md:flex">
                      TR at 11:00-12:15 am in MITCH-122
                    </p>
                    <a href="https://drive.google.com/file/d/1ANhucvGNfBbJb-Em_oilIox6P65VpdNx/view" target="_blank" rel="noopener noreferrer">
                      <p className="mt-4 leading-loose border-2 px-4 rounded-lg border-green-200 md:-ml-4 text-green-600 font-semibold text-center md:flex bg-green-50 hover:bg-green-100">
                        Syllabus
                      </p>
                    </a>

                    {/* TA Information */}
                    <div>
                      <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">Teaching Assistant: Sujaan Aryal</p>
                      <p className="leading-loose text-gray-600 dark:text-gray-50">PhD Student, Economics Department</p>
                      <p className="leading-loose text-gray-600 dark:text-gray-50">Office: ECON 2001</p>
                      <p className="leading-loose text-gray-600 dark:text-gray-50">
                        Drop-in hours: <br />
                        10:00-11:00 pm [Wednesday & Friday]
                      </p>
                      <p className="leading-loose text-gray-600 dark:text-gray-50">Email: saryal1@unm.edu</p>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Textbook Information */}
                <div>
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Textbook</p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Mankiw, N. Gregory. 2021. <i className="font-semibold">Principles of Macroeconomics</i>. 9th ed. Mason, OH: CENGAGE Learning Custom
                    Publishing.
                  </p>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Problem Sets */}
                <div>
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Problem Set</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://drive.google.com/file/d/1A-6X2zfLQWjCJIdy6Jlbfbkghj3JiNgC/view" target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 1
                      </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1pfyQN1RttokX4K2eNDhkIsRgiYbjvsBW/view" target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        PS 2
                      </button>
                    </a>
                  </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Class Project Ideas */}
                <div>
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Class Project Ideas</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://drive.google.com/file/d/1PQhh1w7Mv7HKi47y91zYLrvCMm9-wFfq/view" target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Topics
                      </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1Gywu9MxjybILDfvdxbT2EkRPW0ZPHL6g/view" target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                        Sample Videos
                      </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1aEka4ydfVzWRQFkDKkq5wzttlp_yirX6/view" target="_blank" rel="noopener noreferrer">
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