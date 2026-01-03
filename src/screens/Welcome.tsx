/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import viagemCanoaQuadriciclo from "../assets/timeline/viagem-canoa-quadriciclo.jpg";

type WelcomeProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  onContinue: () => void;
};

export function Welcome({ audioRef, onContinue }: WelcomeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playlist = ["/Ferrugem-PirataETesouro.mp3", "/TDP-Camisa10.mp3"];
  const [currentTrack, setCurrentTrack] = useState(0);

  const fullText = `  Hoje completam-se exatamente 5 anos desde que duas pessoas decidiram 
  se conhecer melhor e assumir um compromisso de namoro. Há pouco mais de um mês, deram 
  mais um passo importante: escolheram compartilhar o mesmo teto e construir, juntos, um lar. 
  E agora, é hora de relembrar alguns dos momentos especiais que já viveram lado a lado...`;

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {
          console.log("Vish");
        });
        setIsPlaying(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function toggleMusic() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleEnded() {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setTimeout(() => {
      audioRef.current?.play().catch(() => {});
    }, 200);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4">
      <audio
        ref={audioRef}
        src={playlist[currentTrack]}
        onEnded={handleEnded}
      />

      {/* Iniciais com coração animado */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-pink-600 flex items-center gap-2"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        V + E =
        <motion.span
          animate={{
            scale: [1, 1.2, 1],
            textShadow: [
              "0 0 5px #ff4d6d",
              "0 0 15px #ff4d6d",
              "0 0 5px #ff4d6d",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          💖
        </motion.span>
      </motion.h1>

      {/* Texto digitado */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-pink-800 max-w-3xl leading-relaxed text-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {displayedText}
        {!isTypingComplete && <span className="animate-pulse">|</span>}
      </motion.p>

      {isTypingComplete && (
        <div className="flex items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8"
          >
            <div className="bg-white p-3 shadow-xl border border-pink-200 rounded-xl">
              <img
                src={viagemCanoaQuadriciclo}
                alt="Nós dois"
                className="w-40 h-36 object-cover rounded-lg shadow-md"
              />

              {/* Data */}
              <p className="text-pink-500 text-md mt-2 font-medium tracking-wide text-center">
                5 anos
              </p>

              {/* Título em destaque */}
              <p className="text-pink-600 text-lg font-bold text-center">
                Bodas de Paixão 💘
              </p>
            </div>
          </motion.div>
          {/* Botões */}
          <div className="ml-4 flex flex-col">
            <motion.button
              onClick={toggleMusic}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="h-12 mt-8 px-6 py-3 rounded-full bg-white text-pink-500 font-semibold shadow-lg hover:bg-pink-100 transition cursor-pointer"
            >
              {isPlaying ? "⏸️ Pausar" : "▶️ Tocar"}
            </motion.button>
            <motion.button
              onClick={onContinue}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="h-14 mt-8 px-6 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition cursor-pointer"
            >
              Continuar...
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
