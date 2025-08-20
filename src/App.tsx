import { useRef, useState } from "react";
import { Welcome } from "./screens/Welcome";
import { Timeline } from "./screens/Timeline";

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);

  function handleStart() {
    if (!showSecondSection) {
      audioRef.current?.play().catch(console.error);
      setShowSecondSection(true);
    }
    setTimeout(() => {
      welcomeRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleContinue() {
    setShowThirdSection(true);
    setTimeout(() => {
      thirdRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-b from-pink-100 to-pink-300">
      <div style={{ height: "100vh", overflowY: "auto", width: "100%" }}>
        <div className="h-screen flex flex-col gap-10 justify-center items-center">
          <img
            src="/surprise.png"
            alt="emoji surprise"
            className="h-auto max-h-[12rem]"
          />
          <h1
            className="text-pink-600 text-3xl md:text-4xl font-bold mb-4 text-center pl-4 pr-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Olá, Maria Eduarda! Que bom ter você aqui.
          </h1>
          <button
            onClick={handleStart}
            className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition cursor-pointer"
          >
            Clique e descubra algo especial...
          </button>
        </div>
        {/* Segunda seção = Resumo */}
        {showSecondSection && (
          <section
            ref={welcomeRef}
            className="h-screen flex justify-center items-center scroll-snap-align-start"
          >
            <Welcome audioRef={audioRef} onContinue={handleContinue} />
          </section>
        )}
        {/* Terceira seção = Linha do tempo*/}
        {showThirdSection && (
          <section ref={thirdRef}>
            <Timeline />
          </section>
        )}
        <p className="m-20 text-white text-md font-bold text-center flex justify-center items-center">
          🤍 Victor e Eduarda, uma linda história de amor... 🤍
        </p>
      </div>
    </div>
  );
}
