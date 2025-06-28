export interface Conteudo {
  titulo: string;
  subtitulo: string;
  resumo: string;
  completo: string;
  status: string;
  videoUrl?: string;
  tipo?: string;
  alternativas?: { id: string; texto: string }[];
  respostaCorreta?: string;
}

const conteudosJava: Conteudo[] = [
  {
    titulo: "1. Conceitos Básicos da Linguagem",
    subtitulo: "O que é Java?",
    resumo: "Java é uma linguagem de programação de alto nível...",
    completo: `Java é uma linguagem de programação de alto nível, orientada a objetos e portátil, 
    o que significa que seu código pode ser executado em diferentes sistemas operacionais sem modificações, 
    graças à Java Virtual Machine (JVM). Criada por James Gosling em 1991, enquanto trabalhava na Sun Microsystems, 
    a linguagem foi projetada para ser simples, segura e eficiente.
    O Java ganhou destaque com seu princípio de "Write Once, Run Anywhere" (Escreva uma vez, execute em qualquer lugar), 
    permitindo a execução de um programa Java em qualquer dispositivo que possua a JVM.
    A Java Virtual Machine (JVM) é uma parte fundamental do ecossistema Java. Ela é responsável por executar o código Java 
    compilado, chamado de bytecode, em qualquer plataforma (Windows, macOS, Linux, etc.). A JVM funciona como uma máquina 
    virtual que interpreta e executa bytecode, convertendo-o em instruções específicas da máquina física em que o programa 
    está sendo executado.`,
    status: "Não iniciado",
  },
  {
    titulo: "2. Onde Java é utilizado?",
    subtitulo: "Assista o vídeo",
    resumo: "Java é amplamente utilizado em vários setores...",
    completo: `Java é amplamente utilizado em vários setores...`,
    status: "Não iniciado",
    videoUrl: "https://www.youtube.com/embed/dyikn8fM1jI",
  },
  {
    titulo: "3. Vamos Treinar!",
    subtitulo: "Responda o exercício abaixo",
    resumo:
      "Teste seus conhecimentos sobre as características da linguagem Java.",
    completo: `Qual das alternativas descreve corretamente uma das principais características da linguagem Java?`,
    status: "Não iniciado",
    tipo: "quiz", // novo campo
    alternativas: [
      {
        id: "A",
        texto:
          "Java é uma linguagem compilada exclusivamente para sistemas operacionais Windows.",
      },
      {
        id: "B",
        texto:
          "Java permite a execução de código em qualquer dispositivo com uma JVM instalada, por meio do bytecode.",
      },
      {
        id: "C",
        texto: "Java não suporta o paradigma de orientação a objetos.",
      },
      {
        id: "D",
        texto:
          "Java é uma linguagem interpretada que não precisa de compilação.",
      },
    ],
    respostaCorreta: "B",
  },
];

export default conteudosJava;
