import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation(); // Get the current route

  // Define the sidebar items for University of New Mexico
  const unmCourses = [
    { path: '/courses/Econ2110.html', label: 'Macroeconomic Principles' },
    { path: '/courses/Econ303.html', label: 'Intermediate Macroeconomics' },
    { path: '/courses/Online_Econ2110.html', label: 'Macroeconomic Principles (Online)' },
    { path: '/courses/Econ321.html', label: 'Development Economics' },
  ];

  // Define the sidebar items for Fordham University
  const fordhamCourses = [
    { path: '/courses/Fordham/Econ1100.html', label: 'Principles of Macroeconomics' },
    { path: '/courses/Fordham/Econ1200.html', label: 'Principles of Microeconomics' },
  ];

  return (
    <aside className="hidden lg:flex min-w-56 mt-20">
      <div className="fixed max-w-56 border-r-2 border-green-100 px-4 pb-2 rounded-lg">
        {/* University of New Mexico Section */}
        <Link to="#">
          <p className="p-2 mt-6 text-black font-semibold text-center animate-wave-text dark:text-white">
            University of New Mexico
          </p>
        </Link>

        {/* University of New Mexico Courses */}
        {unmCourses.map((item) => (
          <Link to={item.path} key={item.path}>
            <p
              className={`p-2 m-2 border-2 mt-4 rounded-lg font-semibold hover:bg-green-300 hover:font-bold ${
                location.pathname === item.path
                  ? 'border-green-500 bg-green-400 text-black' // Active item style
                  : 'border-green-200 text-gray-700 dark:text-gray-50' // Inactive item style
              }`}
            >
              {item.label}
            </p>
          </Link>
        ))}

        {/* Fordham University Section */}
        <Link to="#">
          <p className="p-2 mt-6 text-gray-600 font-semibold text-center dark:text-gray-50">
            Fordham University
          </p>
        </Link>

        {/* Fordham University Courses */}
        {fordhamCourses.map((item) => (
          <Link to={item.path} key={item.path}>
            <p
              className={`p-2 m-2 border-2 mt-4 rounded-lg font-semibold hover:bg-green-300 hover:font-bold ${
                location.pathname === item.path
                  ? 'border-green-500 bg-green-400 text-white' // Active item style
                  : 'border-green-200 text-gray-700 dark:text-gray-50' // Inactive item style
              }`}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
}