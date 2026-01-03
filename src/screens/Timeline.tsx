import { motion } from "framer-motion";
import { timelineData } from "../utils/timelineData";

export function Timeline() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-pink-50 to-white">
      {/* Linha central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-300 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 space-y-20">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center justify-center gap-6 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Pontinho alinhado ao topo */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-pink-500 w-6 h-6 rounded-full border-4 border-white z-10 shadow-lg" />

            {/* Imagens */}
            <div
              className={`flex-shrink-0 ${
                item.images.length === 1
                  ? "w-64 h-64"
                  : item.images.length === 2
                  ? "grid grid-cols-2 gap-2 w-72 h-64"
                  : "flex flex-col gap-2 w-64"
              }`}
            >
              {item.images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`${item.title} - foto ${i + 1}`}
                  className={`object-cover rounded-2xl shadow-lg border-4 border-white ${
                    item.images.length === 1
                      ? "w-full h-full"
                      : item.images.length === 2
                      ? "w-full h-full rounded-xl"
                      : "w-full h-48"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              ))}
            </div>

            {/* Texto */}
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md border border-pink-100">
              <p className="text-sm text-pink-500 font-semibold">{item.date}</p>
              <h3 className="text-2xl font-bold text-pink-600">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}

        {/* Último bloco com frase marcante */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center text-center mt-20"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-pink-500 w-6 h-6 rounded-full border-4 border-white z-10 shadow-lg" />
          <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl shadow-lg p-8 border border-pink-200 max-w-2xl">
            <h3 className="text-3xl font-bold text-pink-600">
              ✨ E isso é apenas o começo...
            </h3>
            <p className="text-gray-700 mt-4 text-lg">
              Nosso livro de memórias ainda tem muitas páginas em branco,
              prontas para serem preenchidas com amor, sonhos e aventuras que
              ainda vamos viver juntos, te amo 💖
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
