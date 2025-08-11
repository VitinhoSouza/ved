import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function Start() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);

  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    if (!hasStarted) {
      audioRef.current?.play().catch(console.error);
      setHasStarted(true);
    }
    welcomeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{ height: "100vh", overflowY: "auto", width: "100%" }}>
      <div className="h-screen flex flex-col gap-10 justify-center items-center">
        <img
          src="/surprise.png"
          alt="emoji surprise"
          className="h-auto max-h-[12rem]"
        />
        <h1
          className="text-pink-600 text-3xl md:text-4xl font-bold mb-4 text-center"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Bem-vinda, Maria Eduarda, tudo bem?
        </h1>
        <button
          onClick={handleStart}
          className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition cursor-pointer"
        >
          Clique aqui você ver uma coisinha...
        </button>
      </div>

      <section
        ref={welcomeRef}
        className="h-screen flex justify-center items-center scroll-snap-align-start"
      >
        <Welcome audioRef={audioRef} hasStarted={hasStarted} />
      </section>

      <audio ref={audioRef} src="/Pixote - Insegurança.mp3" />
    </div>
  );
}

type WelcomeProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  hasStarted: boolean;
};

export function Welcome({ audioRef, hasStarted }: WelcomeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const fullText =
    "5   anos de amor, 1 mês de lar… e uma vida inteira pela frente!";

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [hasStarted]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4">
      <audio ref={audioRef} src="/Pixote - Insegurança.mp3" loop />

      {/* Foto de cima */}
      {isTypingComplete && (
        <motion.div
          initial={{ opacity: 0, y: -50, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -5 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="bg-white p-2 shadow-lg border border-gray-300 rounded-sm inline-block">
            <img
              src="/photo-up.png"
              alt="Nós dois"
              className="w-34 h-34 object-cover"
            />
            <p className="text-black text-sm mt-1 text-center">Momentos</p>
          </div>
        </motion.div>
      )}

      {/* Iniciais com coração animado */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-pink-600 flex items-center gap-2"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        V + D =
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

      {/* Botão música */}
      <motion.button
        onClick={toggleMusic}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-8 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition"
      >
        {isPlaying ? "⏸️ Pausar música" : "▶️ Tocar música"}
      </motion.button>

      {/* Foto de baixo */}
      {isTypingComplete && (
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <div className="bg-white p-2 shadow-lg border border-gray-300 rounded-sm">
            <img
              src="/photo-down.png"
              alt="Nós dois"
              className="w-36 h-32 object-cover"
            />
            <p className="text-black text-sm mt-1 text-center">Sempre juntos</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
