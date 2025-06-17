import { createContext, useState, useContext } from "react";

const VoiceContext = createContext();

export const VoiceProvider = ({ children }) => {
  const [shouldRead, setShouldRead] = useState(false);
  return (
    <VoiceContext.Provider value={{ shouldRead, setShouldRead }}>
      {children}
    </VoiceContext.Provider>
  );
};

export const useVoice = () => useContext(VoiceContext);
