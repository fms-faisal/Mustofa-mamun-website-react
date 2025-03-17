import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import { Helmet } from 'react-helmet';

export default function Econ303() {
  const [files, setFiles] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("econ303");
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
    }finally {
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
  <title>ECON 303 | Mustofa Mamun</title>
  <meta name="description" content="ECON 303 - Intermediate Macroeconomics course page of Mustofa Mamun" />
  <meta name="keywords" content="ECON 303, Intermediate Macroeconomics, Mustofa Mamun, Economics, Fiscal Policy, Government Spending Multipliers" />
  <meta name="author" content="Mustofa Mamun" />
  <meta name="robots" content="index, follow" />
  {/* Open Graph Tags */}
  <meta property="og:title" content="ECON 303 | Mustofa Mamun" />
  <meta property="og:description" content="ECON 303 - Intermediate Macroeconomics course page of Mustofa Mamun" />
  <meta property="og:image" content="https://www.mustofamamun.com/images/profile_image.jpg" />
  <meta property="og:url" content="https://www.mustofamamun.com/courses/Econ303.html" />
  {/* Twitter Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ECON 303 | Mustofa Mamun" />
  <meta name="twitter:description" content="ECON 303 - Intermediate Macroeconomics course page of Mustofa Mamun" />
  <meta name="twitter:image" content="https://www.mustofamamun.com/images/profile_image.jpg" />
  <link rel="icon" href="images/favicon.png" type="image/png" />
  <link href="./output.css" rel="stylesheet" />
  {/* Schema Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "ECON 303",
        "description": "ECON 303 - Intermediate Macroeconomics course page of Mustofa Mamun",
        "url": "https://www.mustofamamun.com/courses/Econ303.html",
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
                <h1 className="text-xl text-gray-700 dark:text-white font-bold">ECON 303 - Intermediate Macroeconomics</h1>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </header>
 {/* Class Schedule */}
 <p className="mt-4 leading-loose border-2 px-4 rounded-lg border-green-200 md:-ml-4 text-green-600 font-semibold text-center md:flex">
                  MWF at 12:00 - 12:50 am in DSH-132
                </p>
                <a
                  href="https://drive.google.com/file/d/1uBQmgk6fM2AfD7cTGM6f1IuaWClrIXIX/view"
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
                <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours: Mondays and Thursdays [ 1:00 pm - 2:00 pm ]</p>
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
                <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours: Tuesdays and Thursdays [ 12:00 pm - 1:00 pm ]</p>
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
                <main>
  {loading ? (
    <div className="space-y-6">
      {orderedTypes.map((type, index) => (
        <div key={index} className="animate-pulse">
          <p className="h-6 bg-gray-300 rounded w-1/4 mb-4"></p>
          <div className="flex flex-wrap gap-2">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="h-10 bg-gray-300 rounded w-1/4 mb-2"></div>
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