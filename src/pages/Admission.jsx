import React from "react";

const Admission = () => {
  return (
    <div className="p-8 m-7 max-w-4xl mx-auto font-sans text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Admission</h1>
        <p className="text-lg text-gray-600">
          Join a community that empowers future leaders.
        </p>
      </header>

      {/* Admission Process */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Admission Process
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Fill out the online application form.</li>
          <li>Upload required documents (transcripts, ID, certificates).</li>
          <li>Pay the application fee.</li>
          <li>Attend entrance exam or interview (if applicable).</li>
          <li>Receive confirmation and complete enrollment.</li>
        </ol>
      </section>

      {/* Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Eligibility Criteria
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Minimum 50% marks in 10+2 or equivalent (for undergraduate courses).
          </li>
          <li>
            Bachelor’s degree with minimum 50% (for postgraduate courses).
          </li>
          <li>Valid entrance exam scores if required by the course.</li>
        </ul>
      </section>

      {/* How to Apply */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          How to Apply
        </h2>
        <p className="mb-4">
          Applications can be submitted online through our official portal.
        </p>
        <a
          href="https://admissions.mycollege.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded shadow"
        >
          Apply Now
        </a>
      </section>

      {/* Important Dates */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Important Dates
        </h2>
        <table className="w-full table-auto border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Event</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Application Opens</td>
              <td className="border px-4 py-2">June 15, 2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Last Date to Apply</td>
              <td className="border px-4 py-2">July 31, 2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Entrance Exam</td>
              <td className="border px-4 py-2">August 10, 2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Admission Results</td>
              <td className="border px-4 py-2">August 20, 2025</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Admission;
