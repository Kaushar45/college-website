import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VoiceControl = () => {
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Sorry, your browser doesn't support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase();
      console.log("Voice command:", transcript);

      // Example commands
      if (transcript.includes("go to home")) {
        navigate("/");
      } else if (transcript.includes("go to about")) {
        navigate("/about");
      } else if (transcript.includes("scroll down")) {
        window.scrollBy({ top: 500, behavior: "smooth" });
      } else if (transcript.includes("scroll up")) {
        window.scrollBy({ top: -500, behavior: "smooth" });
      }
    };

    recognition.onerror = (e) => {
      console.error("Speech recognition error", e);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [navigate]);

  return null;
};

export default VoiceControl;
