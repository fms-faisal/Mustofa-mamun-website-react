import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <main>
        <div className="w-[95%] px-6 lg:py-20 mx-auto">
          <div className="xl:flex lg:flex-row-reverse">
            <div className="xl:w-1/3 pb-10 lg:pb-0">
              <img
                className="w-full h-[70%] rounded-lg bg-cover md:max-w-xl lg:max-w-3xl object-cover my-auto"
                src="/images/profile_image.jpg"
                alt="Dr. Mustofa Mamun - Macroeconomist"
              />
            </div>
            <div className="xl:w-1/3 pb-10 mx-4 lg:pb-0">
              <div className="flex flex-wrap gap-x-2 lg:justify-between text-center justify-center">
                <div className="lg:text-xl">
                  <p className="leading-loose border-2 px-4 rounded-lg border-green-200 text-green-600 font-semibold flex justify-center md:flex">
                    Teaching Interests
                  </p>
                  <ul className="mt-4 leading-loose text-gray-600 lg:text-left dark:text-gray-300 list-inside">
                    {[
                      'Macroeconomics',
                      'Macroeconomic Policy',
                      'Time Series Analysis',
                      'Mathematical Methods',
                      'Computational Economics',
                    ].map((item) => (
                      <li key={item}>◇ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-xl lg:mt-4">
                  <p className="leading-loose border-2 px-4 rounded-lg border-green-200 text-green-600 font-semibold text-center md:flex flex justify-center">
                    Research Areas
                  </p>
                  <ul className="mt-4 leading-loose text-gray-600 lg:text-left dark:text-gray-300 list-inside">
                    {[
                      'Fiscal Policy',
                      'Heterogeneous Agent Models',
                      'Computational Methods',
                      'Climate Change and Public Policy',
                    ].map((item) => (
                      <li key={item}>◇ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-2/3">
              <div>
                <h1 className="text-2xl font-semibold text-gray-800  dark:text-white lg:text-3xl">Dr. Mustofa Mamun</h1>
                <p className="leading-loose text-gray-600 text-lg dark:text-gray-300 mt-4 lg:text-2xl">
                  I am a Macroeconomist specializing in Fiscal Policy and Macroeconomic Analysis. My research explores the short-run effects of
                  unanticipated changes in government spending and their implications for economic policy.
                </p>
                <p className="leading-loose text-gray-600 text-lg dark:text-gray-300 mt-4 lg:text-2xl">
                  I completed my PhD in Economics at Fordham University in 2024. I hold a Master’s degree in Economics from the University of Arizona
                  and a Bachelor’s degree from the Bangladesh University of Engineering and Technology (BUET).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}