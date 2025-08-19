import { motion } from "framer-motion";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  images: string[];
};

const timelineData: TimelineItem[] = [
  {
    date: "07/01/2020",
    title: "Primeiro beijo 😘",
    description:
      "Um momento que mudou tudo, cheio de risadas e olhares tímidos.",
    images: ["/timeline/primeiro-beijo.jpg"],
  },
  {
    date: "20/08/2020",
    title: "Pedido de namoro 👩‍❤️‍👨",
    description:
      "Aquele dia em que eu, envergonhado, pedi a seus pais para namorar com você.",
    images: ["/timeline/pedido-namoro.JPG"],
  },
  {
    date: "26/03/2021",
    title: "Seus 1️⃣7️⃣ anos 🎉",
    description:
      "O dia que eu te 'enganei' falando que não iria poder ir, mas que fiz o esforço de ir e participar desses momentos importantes para você.",
    images: ["/timeline/17-anos.jpg"],
  },
  {
    date: "12/06/2021",
    title: "Primeiro dia dos namorados 👩‍❤️‍👨",
    description:
      "Nosso primeiro Dia dos Namorados juntos… uma data simples, mas cheia de significado.",
    images: ["/timeline/primeiro-namorados.jpg"],
  },
  {
    date: "13/08/2021",
    title: "Primeira viagem juntos para Piauí 🛣️",
    description:
      "Nossa primeira viagem juntos para Piauí. Dias especiais, cheios de carinho, risadas e novas histórias que ficaram guardadas na memória.",
    images: [
      "/timeline/primeira-viagem.JPG",
      "/timeline/primeira-viagem-2.JPG",
    ],
  },
  {
    date: "20/08/2021",
    title: "1️⃣ ano de namoro ❤️",
    description:
      "Comemoramos 1 ano de namoro do nosso jeito: rindo e virando crianças nos brinquedos do shopping. Um ano de amor, parceria e muita diversão!",
    images: ["/timeline/1-ano.JPG"],
  },
  {
    date: "22/10/2021",
    title: "Primeira vez no Universal Park 🎡",
    description:
      "Nossa primeira vez juntos no Universal Park… nem imaginávamos que aquele dia se tornaria um costume nosso. Cada volta, cada risada e cada momento ali só reforça o quanto é bom dividir a vida contigo.",
    images: ["/timeline/universal-park.jpg"],
  },
  {
    date: "01/01/2022",
    title: "Primeiro Réveillon juntos 🎆",
    description:
      "Viramos um ano juntinhos pela primeira vez e começamos 2022 cheios de sonhos, planos e promessas para o futuro.",
    images: ["/timeline/primeiro-revellion.jpg"],
  },
  {
    date: "26/03/2022",
    title: "Seus 1️⃣8️⃣ anos 🎂",
    description:
      "Uma data marcante, cheia de sorrisos e novas fases. Um aniversário especial para lembrar sempre.",
    images: [
      "/timeline/18-anos-festa.jpg",
      "/timeline/18-anos-praia.JPG",
      "/timeline/18-anos-biquini.jpg",
    ],
  },
  {
    date: "20/08/2022",
    title: "Comemorando 2️⃣ anos de namoro em Jeri 🏝️",
    description:
      "Dias de sol, areia e mar em Jeri… momentos únicos vivendo a liberdade e a paz ao seu lado.",
    images: ["/timeline/viagem-jeri.jpg"],
  },
  {
    date: "20/11/2022",
    title: "Viagem para Guaramiranga 🌲",
    description:
      "Entre o friozinho da serra e boas conversas, aproveitamos juntos um clima diferente e acolhedor.",
    images: ["/timeline/viagem-guaramiranga.JPG"],
  },
  {
    date: "24/11/2022",
    title: "Primeira Copa do Mundo juntos ⚽",
    description:
      "Torcendo, vibrando e sofrendo lado a lado… nossa primeira Copa juntos foi cheia de emoção.",
    images: ["/timeline/copa-mundo.jpg"],
  },
  {
    date: "24/12/2022",
    title: "Natal 2022 🎄",
    description:
      "Um Natal especial, dividindo tradições, carinho e a alegria de estar ao seu lado nessa época mágica.",
    images: ["/timeline/natal-2022.jpg"],
  },
  {
    date: "01/01/2023",
    title: "Réveillon 2023 ✨",
    description:
      "Mais um ano começando juntos, brindando nossos sonhos e desejando um futuro ainda mais lindo.",
    images: ["/timeline/revellion-2022.jpg"],
  },
  {
    date: "26/03/2023",
    title: "Seus 1️⃣9️⃣ anos na BM 🎉",
    description:
      "Um aniversário cheio de energia, risadas e pessoas queridas para comemorar ao seu lado.",
    images: ["/timeline/19anos-bm.jpg"],
  },
  {
    date: "28/04/2023",
    title: "Café com flores ☕🌹",
    description:
      "O dia em que demos uma saidinha para visitar o Café com flores em Quixeramobim e de quebra ainda levei minha primeira multa na moto 😅",
    images: ["/timeline/cafe-flores.JPG"],
  },
  {
    date: "12/06/2023",
    title: "Dia dos namorados no parque 🎢",
    description:
      "Entre frio na barriga e muitas risadas na roda gigante, sentimos medo juntos, mas transformamos tudo em diversão e boas lembranças.",
    images: ["/timeline/namorados-parque.jpg"],
  },
  {
    date: "24/06/2023",
    title: "Arraiá da Tarcisa 2023",
    description:
      "Celebramos em família mais um ano de vida da minha vó, rodeados de carinho e boas memórias.",
    images: ["/timeline/arraia-tarcisa-2023.jpg"],
  },
  {
    date: "11/07/2023",
    title: "Viagem Morro Branco & Canoa Quebrada 🏖️",
    description:
      "Exploramos juntos as paisagens incríveis e as falésias coloridas, colecionando lembranças inesquecíveis, além de desfrutar bastente da vila. Essa viagem, ainda que antecipada, marcou nossos 3 anos de namoro.",
    images: [
      "/timeline/viagem-morro-branco.JPG",
      "/timeline/viagem-canoa-quadriciclo.jpg",
      "/timeline/viagem-canoa-vila.jpg",
    ],
  },
  {
    date: "05/08/2023",
    title: "Lagoa do Portinho - Piauí 🌊",
    description:
      "Mais uma aventura no Piauí, com águas tranquilas e momentos de pura leveza.",
    images: ["/timeline/viagem-piaui-portinho.jpg"],
  },
  {
    date: "21/08/2023",
    title: "Primeira viagem de moto juntos 🏍️",
    description:
      "Sentindo o vento no rosto, nossa primeira viagem de moto foi pura liberdade e parceria.",
    images: ["/timeline/primeira-viagem-moto.jpg"],
  },
  {
    date: "22/10/2023",
    title: "Um dia de lazer no La Suite 🍹",
    description: "Curtindo um dia no La Suite junto com amigos especiais.",
    images: ["/timeline/meuniver-lasuite.jpg"],
  },
  {
    date: "24/12/2023",
    title: "Natal em família em Aquiraz 🎄",
    description:
      "Um Natal rodeado de família, união e muito amor na linda cidade de Aquiraz.",
    images: ["/timeline/natal-2023-aquiraz.png"],
  },
  {
    date: "01/01/2024",
    title: "Réveillon em Paranaíba - PI 🎆",
    description:
      "Viramos o ano no Piauí, celebrando juntos com muita alegria e energia positiva.",
    images: ["/timeline/viagem-revellion-2023.png"],
  },
  {
    date: "22/01/2024",
    title: "Minha formatura 🎓",
    description:
      "Um marco especial: a conquista da formatura celebrada lado a lado, cheia de orgulho e emoção.",
    images: ["/timeline/minha-formatura.jpg"],
  },
  {
    date: "13/02/2024",
    title: "Conhecendo Taíba 🌊",
    description:
      "Descobrimos juntos a beleza da Taíba, entre ondas, vento e momentos inesquecíveis.",
    images: ["/timeline/viagem-taiba.jpg"],
  },
  {
    date: "26/03/2024",
    title: "Seus 2️⃣0️⃣ anos 🎉",
    description:
      "Mais um ano de vida comemorado com alegria, carinho e amor do jeitinho que você merece.",
    images: ["/timeline/20-anos-saomiguel.jpg"],
  },
  {
    date: "17/08/2024",
    title: "Viagem para Natal - RN 🏖️",
    description:
      "Exploramos juntos as praias e a cidaede incrível que é Natal, aproveitando cada momento como se fosse único e comemorando nossos 4 anos de namoro.",
    images: [
      "/timeline/viagem-natal-aquario.JPG",
      "/timeline/viagem-natal-pipa.jpg",
    ],
  },
  {
    date: "14/11/2024",
    title: "Casal fitness 🏋️‍♂️❤️",
    description:
      "Aquele dia em que, além de treinar, a gente decidiu eternizar o shape e a zoeira.",
    images: ["/timeline/casal-fitness.jpg"],
  },
  {
    date: "01/12/2024",
    title: "Viagem para Guaramiranga 🍃",
    description:
      "Mais uma ida para a serra, curtindo o friozinho e bons momentos juntinhos.",
    images: ["/timeline/viagem-guaramiranga-2024.jpg"],
  },
  {
    date: "25/12/2024",
    title: "Natal 2024 🎄✨",
    description:
      "Passamos o Natal juntos no São Miguel, celebrando em família e espalhando amor.",
    images: ["/timeline/natal-2024-saomiguel.jpg"],
  },
  {
    date: "01/01/2025",
    title: "Réveillon 2025 🎆",
    description:
      "Mais um ano começando, desta vez em Juatama, cheio de boas energias e união.",
    images: ["/timeline/revellion-2024-juatama.jpg"],
  },
  {
    date: "03/01/2025",
    title: "Viagem Aquiraz em família 🌊",
    description:
      "Dias incríveis em Aquiraz, curtindo a praia e a companhia especial da família.",
    images: ["/timeline/viagem-aquiraz-2025.jpg"],
  },
  {
    date: "11/01/2025",
    title: "1 ano da Aurora ✨🎂",
    description:
      "Um dia cheio de amor e sorrisos, celebrando essa sobrinha tão especial que cuidamos e amamos tanto. Foi demais ver tudo lindo na festa dela!",
    images: ["/timeline/niver-aurora.jpg"],
  },
  {
    date: "12/05/2025",
    title: "Viagem para Flecheiras 🏝️",
    description:
      "Descobrindo as belezas de Flecheiras, entre mar, sol e momentos únicos ao seu lado.",
    images: [
      "/timeline/viagem-flecheiras-praia.JPG",
      "/timeline/viagem-flecheiras-rio.JPG",
    ],
  },
  {
    date: "21/06/2025",
    title: "Arraiá da Tarcisa 2025 🎊🌽",
    description:
      "Dia de celebrar o aniversário da vó com direito a música, comida boa e, o melhor de tudo, família reunida dos dois lados. Foi especial demais!",
    images: ["/timeline/arraia-tarcisa-2025.jpg"],
  },
  {
    date: "18/07/2025",
    title: "O dia em que começamos a morar juntos 🏡💛",
    description:
      "Um marco na nossa história, cheio de expectativa, risadas e a certeza de que construiríamos nosso cantinho lado a lado.",
    images: ["/timeline/arraia-tarcisa-2025.jpg"],
  },
];

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
            className={`relative flex flex-col md:flex-row items-start gap-6 ${
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
