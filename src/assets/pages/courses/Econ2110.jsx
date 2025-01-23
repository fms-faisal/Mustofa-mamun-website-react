import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import { Helmet } from 'react-helmet';

export default function Econ2110() {
  const [files, setFiles] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("econ2110");
  const [loading, setLoading] = useState(true);

  const fetchFiles = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://mustofa-server.vercel.app/files", {
        params: { course: selectedCourse }
      });
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedCourse]);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  const groupedFiles = files.reduce((acc, file) => {
    if (!acc[file.type]) acc[file.type] = [];
    acc[file.type].push(file);
    return acc;
  }, {});

  const orderedTypes = [
    "ProblemSet",
    "ProblemSetKeys",
    "Quiz",
    "QuizKeys",
    "Mid",
    "MidKeys",
    "ReadingAssignment",
    "ReadingAssignmentKeys",
    "ClassProject"
  ];

  return (
    <>
    <Helmet>
  <html lang="en" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ECON 2110 | Mustofa Mamun</title>
  <meta name="description" content="ECON 2110 - Macroeconomic Principles course page of Mustofa Mamun" />
  <meta name="keywords" content="ECON 2110, Macroeconomic Principles, Mustofa Mamun, Economics, Fiscal Policy, Government Spending Multipliers" />
  <meta name="author" content="Mustofa Mamun" />
  <meta name="robots" content="index, follow" />
  {/* Open Graph Tags */}
  <meta property="og:title" content="ECON 2110 | Mustofa Mamun" />
  <meta property="og:description" content="ECON 2110 - Macroeconomic Principles course page of Mustofa Mamun" />
  <meta property="og:image" content="https://www.mustofamamun.com/images/profile_image.jpg" />
  <meta property="og:url" content="https://www.mustofamamun.com/courses/Econ2110.html" />
  {/* Twitter Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ECON 2110 | Mustofa Mamun" />
  <meta name="twitter:description" content="ECON 2110 - Macroeconomic Principles course page of Mustofa Mamun" />
  <meta name="twitter:image" content="https://www.mustofamamun.com/images/profile_image.jpg" />
  <link rel="icon" href="images/favicon.png" type="image/png" />
  <link href="./output.css" rel="stylesheet" />
  {/* Schema Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "ECON 2110",
        "description": "ECON 2110 - Macroeconomic Principles course page of Mustofa Mamun",
        "url": "https://www.mustofamamun.com/courses/Econ2110.html",
        "author": {
          "@type": "Person",
          "name": "Mustofa Mamun"
        }
      }
    `}
  </script>
</Helmet>
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
              <main>
  {loading ? (
    <div className="space-y-6">
      {orderedTypes.map((type, index) => (
        <div key={index} className="animate-pulse">
          <p className="h-6 bg-gray-300 rounded w-1/5 mb-4"></p>
          <div className="flex flex-wrap gap-2">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="h-10 bg-gray-300 rounded w-1/5 mb-2"></div>
            ))}
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
        </div>
      ))}
    </div>
  ) : (
    orderedTypes.map((type) => (
      groupedFiles[type] && (
        <div key={type}>
          <p className="leading-loose text-black dark:text-gray-50 font-semibold">{type.replace(/([a-z])([A-Z])/g, "$1 $2")}</p>
          <div className="flex flex-wrap gap-2">
            {groupedFiles[type].map((file) => (
              <a key={file._id} href={file.link} target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                  {file.title}
                </button>
              </a>
            ))}
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
        </div>
      )
    ))
  )}
</main>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}