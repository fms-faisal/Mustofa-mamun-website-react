import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';

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
      image: '/images/Macroeconomic_principle_intersession_image.jpg',
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