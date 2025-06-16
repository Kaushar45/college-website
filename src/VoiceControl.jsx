import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SpeechRecognition = () => {
  const [transcript, setTranscript] = useState("Click the button and speak");
  const navigate = useNavigate();

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const handleStart = () => {
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser. Try Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setTranscript("Listening...");
    };

    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript.toLowerCase().trim();
      setTranscript(`You said: ${speech}`);

      if (speech.includes("about")) {
        navigate("/about");
        speak(
          "Welcome to the about page. This page contains information about us."
        );
      } else if (speech.includes("home")) {
        navigate("/");
        speak("Welcome to the home page.");
      } else if (speech.includes("contact")) {
        navigate("/contact");
        speak("This is the contact page. Here you can reach out to us.");
      } else if (speech.includes("admission")) {
        navigate("/admission");
        speak(
          "Welcome to the admission page. Here you can find admission details."
        );
      } else if (speech.includes("courses")) {
        navigate("/courses");
        speak("Here are the courses we offer.");
      } else {
        speak("Sorry, I did not recognize that command.");
      }
    };

    recognition.onerror = (event) => {
      setTranscript(`Error: ${event.error}`);
    };

    recognition.onend = () => {
      console.log("Recognition ended");
    };

    recognition.start();
  };

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center justify-center p-18 bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Speech Recognition</h2>
      <button
        onClick={handleStart}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Start Listening
      </button>
      <p className="mt-4">{transcript}</p>
    </div>
  );
};

export default SpeechRecognition;
