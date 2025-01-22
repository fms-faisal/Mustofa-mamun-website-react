import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import { Helmet } from 'react-helmet';

export default function Teaching() {
  // Courses data for University of New Mexico
  const unmCourses = [
    {
      code: 'ECON 2110',
      title: 'Macroeconomic Principles',
      image: '/images/Macroeconomic-Principles-img.jpg',
      link: '/courses/Econ2110.html',
    },
    {
      code: 'ECON 303',
      title: 'Intermediate Macroeconomics',
      image: '/images/Intermediate_Macroeconomics_img.jpg',
      link: '/courses/Econ303.html',
    },
    {
      code: 'ECON 2110',
      title: 'Macroeconomic Principles (Online)',
      image: '/images/Macroeconomic-Principles-img.jpg',
      link: '/courses/Online_Econ2110.html',
    },
    {
      code: 'ECON 321',
      title: 'Development Economics',
      image: '/images/Development-Economics-img.jpg',
      link: '/courses/Econ321.html',
    },
  ];

  // Courses data for Fordham University
  const fordhamCourses = [
    {
      code: 'ECON 1100',
      title: 'Principles of Macroeconomics',
      image: '/images/Principles-of-Macroeconomics-Fordham-image.jpg',
      link: '/courses/Fordham/Econ1100.html',
    },
    {
      code: 'ECON 1200',
      title: 'Principles of Microeconomics',
      image: '/images/Principles-of-Microeconomics-Fordham-image.jpg',
      link: '/courses/Fordham/Econ1200.html',
    },
  ];

  return (
    <>
        <Helmet>
  <html lang="en" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Teaching | Mustofa Mamun</title>
  <meta name="description" content="Teaching page of Mustofa Mamun" />
  <meta name="keywords" content="Teaching, Mustofa Mamun, Economics, Macroeconomics, Microeconomics, Development Economics, University of New Mexico, Fordham University" />
  <meta name="author" content="Mustofa Mamun" />
  <meta name="robots" content="index, follow" />
  {/* Open Graph Tags */}
  <meta property="og:title" content="Teaching | Mustofa Mamun" />
  <meta property="og:description" content="Teaching page of Mustofa Mamun. Courses taught include ECON 2110 - Macroeconomic Principles, ECON 303 - Intermediate Macroeconomics, ECON 321 - Development Economics, ECON 1100 - Principles of Macroeconomics, and ECON 1200 - Principles of Microeconomics." />
  <meta property="og:image" content="https://www.mustofamamun.com/images/profile_image.jpg" />
  <meta property="og:url" content="https://www.mustofamamun.com/teaching.html" />
  {/* Twitter Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Teaching | Mustofa Mamun" />
  <meta name="twitter:description" content="Teaching page of Mustofa Mamun" />
  <meta name="twitter:image" content="https://www.mustofamamun.com/images/profile_image.jpg" />
  <link rel="icon" href="images/favicon.png" type="image/png" />
  <link href="./output.css" rel="stylesheet" />
  {/* Schema Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Teaching",
        "description": "Teaching page of Mustofa Mamun",
        "url": "https://www.mustofamamun.com/teaching.html",
        "author": {
          "@type": "Person",
          "name": "Mustofa Mamun"
        }
      }
    `}
  </script>
</Helmet>
      <main className="pb-8">
        {/* University of New Mexico Section */}
        <div className="flex justify-center ">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white p-3 px-6 border-2 border-green-200 rounded-lg shadow-md inline-block mt-20">
            University of New Mexico
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-4 mx-auto">
          {unmCourses.map((course) => (
            <CourseCard key={course.code} {...course} />
          ))}
        </div>

        {/* Fordham University Section */}
        <div className="flex justify-center mt-10">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white p-3 px-6 border-2 border-green-200 rounded-lg shadow-md inline-block">
            Fordham University
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 gap-4 mx-auto">
          {fordhamCourses.map((course) => (
            <CourseCard key={course.code} {...course} />
          ))}
        </div>
      </main>
    </>
  );
}