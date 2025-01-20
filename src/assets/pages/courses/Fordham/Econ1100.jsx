import Sidebar from "../../../components/Sidebar";
const Econ1100 = () => {
    return (
        <div className=" mx-auto dark:text-gray-50">
            <main>
                <div className="flex w-full">
                    <Sidebar />
                    <div className="w-full lg:w-4/5 flex-grow px-4 mt-10">
                        <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
                            <header>
                                {/* Header content if needed */}
                            </header>

                            <main className="mt-8">
                                <p className="text-xl text-gray-700 dark:text-white font-bold">ECON 1100 - Principles of Macroeconomics</p>
                                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                                <div>
                                    <p className="leading-loose text-black dark:text-gray-50 font-semibold">Course Description</p>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        This course will adopt a traditional approach to teaching introductory Macroeconomics. We will use real-world data to understand the topics and the current state of the economy. By the end of the semester, you will have a basic idea about the macroeconomic concepts and the US economy.
                                    </p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                                <div className="space-y-3">
                                    <p className="leading-loose text-black dark:text-gray-50 font-semibold">Textbook</p>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        Mankiw, N. Gregory.<i className="font-semibold">Principles of Macroeconomics</i>, 9th ed.
                                    </p>
                                </div>

                                <div>
                                    <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                    <p className="leading-loose text-black dark:text-gray-50 font-semibold">Course Outline</p>
                                    <div className="leading-loose text-gray-600 dark:text-gray-300">
                                        <ul className="list-disc lg:pl-4">
                                            <li>
                                                Week 01-04: Economic Intuition Development (Chapter-1,2,4,10,11)
                                                <ul className="list-item lg:pl-4">
                                                    <li>Introductory Math Concepts (Line, Slope, & Solving System of Equations)</li>
                                                    <li>Micro-Foundation (Individual’s Income, Asset, & Consumption)</li>
                                                    <li>Measuring Income and Inflation</li>
                                                </ul>
                                            </li>
                                            <li>
                                                Week 05-12: Closed Economy Macroeconomics (Chapter-12,13,14,15,16,17,20,21,22)
                                                <ul className="list-item lg:pl-4">
                                                    <li>Growth Model (Linear, Solow)</li>
                                                    <li>Private Sector (Consumption & Investment)</li>
                                                    <li>Public Sector (Government Spending)</li>
                                                    <li>Monetary Policy (Federal Reserve Bank)</li>
                                                    <li>Fiscal Policy (The US Treasury Department)</li>
                                                    <li>Debt (Federal, Household, & Corporate)</li>
                                                    <li>Taxation (Income, Consumption, & Corporate)</li>
                                                    <li>Inequality (Income, Wealth & Opportunity)</li>
                                                </ul>
                                            </li>
                                            <li>
                                                Week 13-15: Open Economy Macroeconomics (Chapter-3,9,18,19)
                                                <ul className="list-item lg:pl-4">
                                                    <li>International Trade (Export-Import)</li>
                                                    <li>International Finance (Cross Border Investment)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                                <div>
                                    <p className="leading-loose text-black dark:text-gray-50 font-semibold">Letter Grades</p>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        The following grading scale will be used to determine your final course grade:
                                    </p>

                                    <section className="container px-4 mx-auto">
                                        <div className="flex flex-col mt-6">
                                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="inline-block py-2 align-middle md:px-6 lg:px-8">
                                                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                                        <table className="divide-y divide-gray-200 dark:divide-gray-700">
                                                            <thead className="bg-gray-50 dark:bg-gray-800">
                                                                <tr>
                                                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                        <button className="flex items-center gap-x-3 focus:outline-none">
                                                                            <span>Percentage</span>
                                                                        </button>
                                                                    </th>
                                                                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                        Grade
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">94 − 100</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            A
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">90 − 94</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            A-
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">87 − 90</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            B+
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">84 − 87</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            B
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">80 − 84</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            B-
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">77 − 80</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            C+
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">74 − 77</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            C
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">70 − 74</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            C-
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">65 − 70</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            D
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-4 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <h2 className="font-medium text-gray-800 dark:text-white">&lt; 65</h2>
                                                                    </td>
                                                                    <td className="px-12 py-2 text-sm font-medium whitespace-nowrap">
                                                                        <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                            F
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                <div className="mt-4">
                                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Problem Sets</h4>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        I will upload problem sets on Blackboard every week. Create a designated notebook so that it is easier to compile all assignments by the end of the semester. You should hand write your assignments. You are responsible for finding, completing, and submitting your work. You will submit all your work at once, on the day of the final Exam.
                                    </p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                <div className="mt-4">
                                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Exam</h4>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">All exams will be in person.</p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                <div className="mt-4">
                                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Attendance and Classroom Etiquette</h4>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        Students may not exceed a maximum of four total absences (excused or unexcused). Absences for reasons of a religious holiday, serious illness, death in the student’s immediate family, or required participation in a university-sponsored event are excused absences with the appropriate documentation. When attending class, be punctual and prepared to engage in discussion. The relevant material should be read before class, as the lectures expand upon the readings.
                                    </p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                <div className="mt-4">
                                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Academic Integrity</h4>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        Make yourself familiar with the University’s policy on academic integrity in the student handbook. There will be zero tolerance for academic dishonesty. Any student caught engaging in such behavior will immediately be reported according to the University’s standard procedure.
                                    </p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                <div className="mt-4">
                                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Disability Services</h4>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        Under the Americans with Disabilities Act and Section 504 of the Vocational Rehabilitation Act of 1973, all students, with or without disabilities, are entitled to equal access to the programs and activities of Fordham University. If you believe that you have a disabling condition that may interfere with your ability to participate in the activities, coursework, or assessment of the course object, you may be entitled to accommodations. Please schedule an appointment to speak with someone at the Office of Disability Services (Rose Hill – O’Hare Hall, Lower Level, x0655, or at Lincoln Center – Room 207, x6282).
                                    </p>
                                </div>
                            </main>

                            <footer className="mt-8"></footer>
                        </section>
                    </div>
                </div>
            </main>

            <footer></footer>
        </div>
    );
};

export default Econ1100;