import Sidebar from "../../../components/Sidebar";


const Econ1200 = () => {
    return (
        <div className=" mx-auto dark:text-gray-50">
            <main>
                <div className="flex w-full">
                    <Sidebar/>
                    <div className="flex-grow px-4 mt-10">
                        <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
                            <header>
                                {/* Header content if needed */}
                            </header>

                            <main className="mt-8">
                                <p className="text-xl text-gray-700 dark:text-white font-bold">ECON 1200 - Principles of Microeconomics</p>
                                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                                <div>
                                    <p className="leading-loose text-black dark:text-gray-50 font-semibold">Course Description</p>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        This course is going to adopt a radically different approach to learning basic Microeconomics. Economic principles regarding consumer theory, producer theory, market theory, and game theory will be presented in such a manner that will focus on real-life events. So, we will take a data-driven approach instead of the traditional approach that focuses heavily on theories and problem sets. However, we will learn important economic principles and tools as necessary and leave some complex discussions for advanced classes. By the end of the semester, you will be able to explain any economic events/trends intuitively, graphically, and mathematically.
                                    </p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                                <div className="space-y-3">
                                    <p className="leading-loose text-black dark:text-gray-50 font-semibold">Textbook</p>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        Mankiw, N. Gregory. <i className="font-semibold">Principles of Microeconomics</i>, 8th ed.
                                    </p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                                <div>
                                    <p className="leading-loose text-black dark:text-gray-50 font-semibold">Course Outline</p>
                                    <div className="leading-loose text-gray-600 dark:text-gray-300">
                                        <ul className="list-disc lg:pl-4">
                                            <li>Week 1-2: Basic Math concepts, Building Economic Intuition & Graphical Presentation. (Chapter 1 & 2)</li>
                                            <li>Week 3-6: Consumer Choice Theory (Chapter 21)</li>
                                            <li>Week 7-8: Producer Theory (Chapter 13)</li>
                                            <li>Week 9-12: Market Mechanism & Game Theory (Chapter 14, 15, 16 & 17)</li>
                                            <li>Week 13-16: Welfare Economics & International Trade (Chapter 6, 7, 8, 9 & 10)</li>
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
                                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Term Paper</h4>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        There are two broad topics to choose from. A collection of economic graphs/charts/trends will be shared on Blackboard. You will have to choose one/multiple graphs to work on your term paper. You don’t have to choose all graphs in the folder. Also, you can go to the source to find additional charts. The objective of this project is to produce a convincing story by the end of the semester using microeconomic theory/tools. To be precise, you will have to do 3 tasks to get full points. First, narrate what you see on the chart and identify the underlying main theme. Second, explain with economic tools/principles covered in the course. Third, predict tentative scenarios using economic intuition. You have to type your term paper and submit it in pdf format. Word limit is 3000. Use standard reporting format/fonts.
                                    </p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                <div className="mt-4">
                                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Class Notes</h4>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        I will be collecting, reviewing, and grading your class notes after a section of the course ends. You have to compile each section’s class notes into a pdf document and submit it on the last day of that week by 5 pm. Your class notes should cover the main points discussed during class. You can either choose to handwrite or typewrite your class notes. If you choose to handwrite, you have to scan the document and convert it to pdf format before submitting it on the Blackboard. It is easy to find free scanner apps available in android/apple devices.
                                    </p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                <div className="mt-4">
                                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Exam</h4>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        Both exams will be taken at home. You will be able to access the exam on Blackboard. You are responsible for submitting the exam in pdf format, and you can either choose to handwrite/typewrite. You will be allowed additional time to scan and upload.
                                    </p>
                                </div>

                                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                                <div className="mt-4">
                                    <h4 className="leading-loose text-black dark:text-gray-50 font-semibold">Attendance and Classroom Etiquette</h4>
                                    <p className="leading-loose text-gray-600 dark:text-gray-300">
                                        Students may not exceed a maximum of four total absences (excused or unexcused). Absences for reasons of religious holiday, serious illness, death in the student’s immediate family, or required participation in a University-sponsored event are, with the appropriate documentation, excused absences. When attending class, be punctual and prepared to engage in discussion. The relevant material should be read prior to class, as the lectures expand upon the readings.
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
                                        Under the Americans with Disabilities Act and Section 504 of the Vocational Rehabilitation Act of 1973, all students, with or without disabilities, are entitled to equal access to the programs and activities of Fordham University. If you believe that you have a disabling condition that may interfere with your ability to participate in the activities, coursework, or assessment of the object of the course, you may be entitled to accommodations. Please schedule an appointment to speak with someone at the Office of Disability Services (Rose Hill – O’Hare Hall, Lower Level, x0655 or at Lincoln Center – Room 207, x6282).
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

export default Econ1200;