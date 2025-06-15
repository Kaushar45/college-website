import React from "react";

const Courses = () => {
  return (
    <div className="p-8 m-7 max-w-6xl mx-auto text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Our Courses</h1>
        <p className="text-lg text-gray-600">
          Explore our comprehensive range of undergraduate and postgraduate
          programs
        </p>
      </header>

      {/* Undergraduate Courses */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Undergraduate Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              B.Sc. (Bachelor of Science)
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Mathematics</li>
              <li>Computer Science</li>
              <li>Biology</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Zoology</li>
              <li>Botany</li>
              <li>Environmental Science</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              BCA (Bachelor of Computer Applications)
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Computer Applications</li>
              <li>Data Analytics</li>
              <li>Cloud Computing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              BA (Bachelor of Arts)
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Hindi</li>
              <li>English</li>
              <li>History</li>
              <li>Political Science</li>
              <li>Economics</li>
              <li>Psychology</li>
              <li>Sociology</li>
              <li>Geography</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              B.Com (Bachelor of Commerce)
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>General</li>
              <li>Accounting and Finance</li>
              <li>Taxation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Postgraduate Courses */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Postgraduate Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              M.Sc. (Master of Science)
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Mathematics</li>
              <li>Computer Science</li>
              <li>Botany</li>
              <li>Zoology</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biotechnology</li>
              <li>Microbiology</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              MCA (Master of Computer Applications)
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Software Development</li>
              <li>AI & Machine Learning</li>
              <li>Cybersecurity</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              MA (Master of Arts)
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Hindi</li>
              <li>English</li>
              <li>Political Science</li>
              <li>Psychology</li>
              <li>History</li>
              <li>Economics</li>
              <li>Geography</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              M.Com (Master of Commerce)
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Finance</li>
              <li>Business Administration</li>
              <li>Taxation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
