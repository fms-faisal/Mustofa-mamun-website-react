import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import { Helmet } from 'react-helmet';

export default function Econ321() {
  const [files, setFiles] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("econ321");

  const fetchFiles = useCallback(async () => {
    try {
      const response = await axios.get("https://mustofa-server.vercel.app/files", {
        params: { course: selectedCourse }
      });
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
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
    "problemSet",
    "problemSetKeys",
    "quiz",
    "quizKeys",
    "mid",
    "midKeys",
    "readingAssignment",
    "readingAssignmentKeys",
    "classProject"
  ];

  return (
    <>
    <Helmet>
  <html lang="en" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ECON 321 | Mustofa Mamun</title>
  <meta name="description" content="ECON 321 - Development Economics course page of Mustofa Mamun" />
  <meta name="keywords" content="ECON 321, Development Economics, Mustofa Mamun, Economics, Fiscal Policy, Government Spending Multipliers" />
  <meta name="author" content="Mustofa Mamun" />
  <meta name="robots" content="index, follow" />
  {/* Open Graph Tags */}
  <meta property="og:title" content="ECON 321 | Mustofa Mamun" />
  <meta property="og:description" content="ECON 321 - Development Economics course page of Mustofa Mamun" />
  <meta property="og:image" content="https://www.mustofamamun.com/images/profile_image.jpg" />
  <meta property="og:url" content="https://www.mustofamamun.com/courses/Econ321.html" />
  {/* Twitter Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ECON 321 | Mustofa Mamun" />
  <meta name="twitter:description" content="ECON 321 - Development Economics course page of Mustofa Mamun" />
  <meta name="twitter:image" content="https://www.mustofamamun.com/images/profile_image.jpg" />
  <link rel="icon" href="images/favicon.png" type="image/png" />
  <link href="./output.css" rel="stylesheet" />
  {/* Schema Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "ECON 321",
        "description": "ECON 321 - Development Economics course page of Mustofa Mamun",
        "url": "https://www.mustofamamun.com/courses/Econ321.html",
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
                <h1 className="text-xl text-gray-700 dark:text-white font-bold">ECON 321 - Intermediate Microeconomic Theory</h1>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </header>
      
                {/* Instructor Information */}
                <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">Dr. Mustofa Mahmud Al Mamun</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Office: ECON 2002</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours: Tuesdays 11:00-1:00 am</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Email: mmamun@unm.edu</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">
                  Zoom Link:{' '}
                  <a className="text-blue-400 font-bold" href="https://unm.zoom.us/j/9171407395">
                    https://unm.zoom.us/j/9171407395
                  </a>
                </p>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* TA Information */}
                <p className="mt-4 leading-loose text-black dark:text-gray-50 font-semibold">Teaching Assistant: Stephania Alarcon Alcala</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">PhD Student, Economics Department</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Office: Econ 1040</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Drop-in hours: 12:30 - 2:00 pm (Tuesday and Thursday)</p>
                <p className="leading-loose text-gray-600 dark:text-gray-50">Email: stephalarcon1997@unm.edu</p>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {/* Textbook Information */}
                <div className="space-y-3">
                  <p className="leading-loose text-black dark:text-gray-50 font-semibold">Textbook</p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Taylor, J. Edward, and Travis J. Lybbert. 2020.{' '}
                    <i className="font-semibold">Essentials of Development Economics, Third Edition.</i> 3rd ed. Berkeley, CA: University of
                    California Press. <span className="text-red-400">(Required)</span>
                  </p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Banerjee, Abhijit, and Esther Duflo. 2012.{' '}
                    <i className="font-semibold">Poor Economics: A Radical Rethinking of the Way to Fight Global Poverty</i>. New York, NY:
                    PublicAffairs. <span className="text-red-400">(Required)</span>
                  </p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Banerjee, Abhijit V., and Esther Duflo. 2021.{' '}
                    <i className="font-semibold">Good Economics for Hard Times</i>. PublicAffairs. <span className="text-blue-400">(Optional)</span>
                  </p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Acemoglu, Daron, and James A. Robinson. 2013.{' '}
                    <i className="font-semibold">Why Nations Fail: The Origins of Power, Prosperity and Poverty</i>. London, England: Profile Books.{' '}
                    <span className="text-blue-400">(Optional)</span>
                  </p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Piketty, Thomas. 2017.{' '}
                    <i className="font-semibold">Capital in the Twenty-First Century</i>. Translated by Arthur Goldhammer. London, England: Belknap
                    Press. <span className="text-blue-400">(Optional)</span>
                  </p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Varoufakis, Yanis. 2024.{' '}
                    <i className="font-semibold">Technofeudalism: What Killed Capitalism.</i> Brooklyn, NY: Melville House Publishing.{' '}
                    <span className="text-blue-400">(Optional)</span>
                  </p>
                  <p className="leading-loose text-gray-600 dark:text-gray-300">
                    Acemoglu, Daron, and Simon Johnson. 2023.{' '}
                    <i className="font-semibold">Power and Progress: Our Thousand-Year Struggle over Technology and Prosperity</i>. PublicAffairs.{' '}
                    <span className="text-blue-400">(Optional)</span>
                  </p>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              <main>
                {orderedTypes.map((type) => (
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
                ))}
              </main>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}