import React, { useEffect, useRef } from "react";
import { useVoice } from "../context/VoiceContext";

const About = () => {
  const { shouldRead, setShouldRead } = useVoice();
  const contentRef = useRef();

  useEffect(() => {
    if (shouldRead && contentRef.current) {
      const text = contentRef.current.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.cancel(); // stop existing
      window.speechSynthesis.speak(utterance);
      setShouldRead(false); // reset so it doesn't keep reading
    }
  }, [shouldRead, setShouldRead]);
  return (
    <div
      ref={contentRef}
      className="p-8 m-7 max-w-4xl mx-auto font-sans text-gray-800"
    >
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          About Our College
        </h1>
        <p className="text-lg text-gray-600">
          Empowering students through excellence in education.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          Introduction
        </h2>
        <p>
          Founded in 1990, MY College has grown into a premier institution
          dedicated to academic excellence, innovation, and leadership. Located
          in the heart of the city, we offer a diverse and inclusive environment
          for students from all walks of life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          Our Mission
        </h2>
        <p>
          To provide quality education that nurtures innovation, fosters
          critical thinking, and develops leaders prepared to make a difference
          globally.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          Our Vision
        </h2>
        <p>
          To be a world-class center of learning that shapes the future through
          knowledge, integrity, and service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          Our History
        </h2>
        <p>
          From humble beginnings, MY College has evolved over the past three
          decades into a dynamic hub for academic excellence. With a commitment
          to innovation and inclusivity, we continue to grow and adapt to the
          changing educational landscape.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          Contact Us
        </h2>
        <p>
          Email:{" "}
          <a
            href="mailto:contact@mycollege.edu"
            className="text-blue-500 underline"
          >
            contact@mycollege.edu
          </a>
        </p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 College Ave, Khamaria, Uttar Pradesh, 221306</p>
      </section>
    </div>
  );
};

export default About;
