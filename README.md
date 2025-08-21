# 💖 V&E – Uma homenagem interativa

Uma experiência web romântica, construída com **React**, **TypeScript** e **Vite**, que celebra momentos especiais com fotos, timeline animada, efeitos visuais e trilha sonora.  
Um presente digital íntimo e memorável.  

---

## 🛠 Tecnologias Utilizadas

- **React** com **TypeScript** — componentes tipados e interatividade moderna  
- **Vite** — bundler rápido para desenvolvimento e build otimizado  
- **Tailwind CSS** — estilização ágil, responsiva e elegante  
- **Framer Motion** — animações suaves e envolventes (digitação, imagens, timeline)  
- 🎵 **Áudio dinâmico** — playlist que avança automaticamente conforme cada música termina  

---

## 🚀 Como clonar e rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/VitinhoSouza/ved.git
cd ved

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

Depois, abra http://localhost:5173 (ou a porta indicada) para visualizar.
```
## 📂 Estrutura do Projeto

- App.tsx — orquestra as seções: Splash (Start), Boas-vindas (Welcome) e Timeline (Timeline), com scroll suave entre elas

- Welcome — animação de digitação, música com playlist e seção de introdução visual

- Timeline — eventos em linha do tempo com fotos (1-3 por evento), alternância visual e animações ao entrar na viewport

- public/ — imagens e arquivos de áudio acessíveis no frontend

## ✨ Detalhes marcantes

- Tela inicial personalizada com botão que inicia a trilha sonora e a animação

- Efeito de digitação romântico sincronizado com entrada musical

- Fotos em estilo “polaroid” com animações de entrada e hover

- Timeline visual com alternância de layout, pontos centrais e responsividade completa

- Playlist de músicas que avança automaticamente conforme cada faixa termina

## 🌎 Visualização Online

O projeto está disponível online e otimizado para dispositivos móveis e desktop: https://ved-vitinho.vercel.app/.
