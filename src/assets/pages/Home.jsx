import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mustofa Mamun | Macroeconomist | Research & Teaching</title>
        <meta
          name="description"
          content="Dr. Mustofa Mamun is a Macroeconomist specializing in Fiscal Policy and Macroeconomic Analysis. Explore his research, teaching, and academic background."
        />
        <meta name="keywords" content="Mustofa Mamun, Macroeconomist, Research, Teaching, Economics, Fiscal Policy" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mustofa Mamun" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mustofa Mamun",
              "jobTitle": "Macroeconomist, Lecturer III",
              "affiliation": {
                "@type": "Organization",
                "name": "University of New Mexico",
                "url": "https://www.unm.edu/"
              },
              "url": "https://www.mustofamamun.com/",
              "image": "https://www.mustofamamun.com/images/profile_image.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/mmamun08",
              ],
              "description": "Dr. Mustofa Mamun is a Macroeconomist and Lecturer III at the University of New Mexico, specializing in Fiscal Policy, Government Spending Multipliers, and Heterogeneous Agent Models.",
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Fordham University",
                  "url": "https://www.fordham.edu/"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Arizona",
                  "url": "https://www.arizona.edu/"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Dhaka School of Economics",
                  "url": "https://www.dsce.edu.bd/"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Bangladesh University of Engineering and Technology (BUET)",
                  "url": "https://www.buet.ac.bd/"
                }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "University of New Mexico",
                "url": "https://www.unm.edu/"
              },
              "knowsAbout": [
                "Macroeconomics",
                "Macroeconomic Policy",
                "Time Series Analysis",
                "Mathematical Methods",
                "Computational Economics",
                "Fiscal Policy",
                "Heterogeneous Agent Models",
                "Computational Methods",
                "Climate Change and Public Policy",
                "Government Spending Multipliers",
                "Teaching Macroeconomics"
              ]
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <div className="w-[95%] px-6 lg:py-20 lg:mt-6 mx-auto">
          <div className="xl:flex lg:flex-row-reverse">
            <div className="xl:w-1/3 pb-10 lg:pb-0">
              <img
                className="w-full h-[70%] rounded-lg bg-cover md:max-w-xl lg:max-w-3xl object-cover my-auto"
                src="/images/profile_image.jpg"
                alt="Dr. Mustofa Mamun - Macroeconomist specializing in Fiscal Policy and Macroeconomic Analysis"
              />
            </div>
            <div className="xl:w-1/3 pb-10 mx-4 lg:pb-0">
              <section className="flex flex-wrap gap-x-2 lg:justify-between text-center justify-center">
                <div className="lg:text-xl">
                  <h2 className="leading-loose border-2 px-4 rounded-lg border-green-200 text-green-600 font-semibold flex justify-center md:flex">
                    Teaching Interests
                  </h2>
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
                  <h2 className="leading-loose border-2 px-4 rounded-lg border-green-200 text-green-600 font-semibold text-center md:flex flex justify-center">
                    Research Areas
                  </h2>
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
              </section>
            </div>
            <div className="w-full xl:w-2/3">
              <section>
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Dr. Mustofa Mamun</h1>
                <p className="leading-loose text-gray-600 text-lg dark:text-gray-300 mt-4 lg:text-2xl">
                  I am a Macroeconomist specializing in Fiscal Policy and Macroeconomic Analysis. My research explores the short-run effects of
                  unanticipated changes in government spending and their implications for economic policy.
                </p>
                <p className="leading-loose text-gray-600 text-lg dark:text-gray-300 mt-4 lg:text-2xl">
                  I completed my PhD in Economics at Fordham University in 2024. I hold a Master’s degree in Economics from the University of Arizona
                  and a Bachelor’s degree from the Bangladesh University of Engineering and Technology (BUET).
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}