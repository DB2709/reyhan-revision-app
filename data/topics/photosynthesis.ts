import type { TopicContent } from "./types";

export const photosynthesis: TopicContent = {
  flashcards: [
    { question: "What is photosynthesis?", answer: "The process by which plants make glucose using light energy, carbon dioxide and water." },
    { question: "Where does photosynthesis happen?", answer: "In the chloroplasts of plant cells." },
    { question: "What pigment absorbs light for photosynthesis?", answer: "Chlorophyll." },

    { question: "Word equation for photosynthesis?", answer: "Carbon dioxide + water → glucose + oxygen" },
    { question: "Symbol equation for photosynthesis?", answer: "6CO2 + 6H2O → C6H12O6 + 6O2" },

    { question: "What are the raw materials for photosynthesis?", answer: "Carbon dioxide and water." },
    { question: "What provides the energy for photosynthesis?", answer: "Light energy." },
    { question: "What is the main product of photosynthesis?", answer: "Glucose." },
    { question: "What gas is released in photosynthesis?", answer: "Oxygen." },

    { question: "What is glucose used for in plants?", answer: "Respiration, making cellulose, making amino acids, stored as starch, making lipids." },
    { question: "Why is glucose converted to starch?", answer: "Starch is insoluble and can be stored." },

    { question: "What are the limiting factors of photosynthesis?", answer: "Light intensity, carbon dioxide concentration, temperature and chlorophyll." },
    { question: "What is a limiting factor?", answer: "A factor that restricts the rate of photosynthesis." },

    { question: "How does increasing light intensity affect photosynthesis?", answer: "It increases the rate until another factor becomes limiting." },
    { question: "How does increasing carbon dioxide affect photosynthesis?", answer: "It increases the rate until another factor becomes limiting." },
    { question: "How does temperature affect photosynthesis?", answer: "The rate increases to an optimum, then decreases if enzymes denature." },

    { question: "Why does photosynthesis level off on a graph?", answer: "Another factor becomes limiting." },

    { question: "What is an independent variable?", answer: "The variable you change." },
    { question: "What is a dependent variable?", answer: "The variable you measure." },
    { question: "What is a control variable?", answer: "A variable kept the same to make the test fair." },

    { question: "What might be measured in a photosynthesis experiment?", answer: "Rate of oxygen production, bubble count, or volume of gas produced." },

    { question: "How is a leaf adapted for photosynthesis?", answer: "Large surface area, thin, many chloroplasts, stomata for gas exchange, veins for transport." },
    { question: "Why is a leaf thin?", answer: "So gases diffuse in and out quickly." },
    { question: "Why does the palisade layer contain many chloroplasts?", answer: "To absorb as much light as possible." },
    { question: "What do stomata do?", answer: "Allow gas exchange." },

    { question: "How do plants get carbon dioxide?", answer: "Through the stomata by diffusion." },
    { question: "How do plants get water?", answer: "Through the roots and xylem." }
  ],

  shortQuestions: [
    { question: "What gas is used in photosynthesis?", answer: "Carbon dioxide" },
    { question: "What gas is made in photosynthesis?", answer: "Oxygen" },
    { question: "What green substance is needed for photosynthesis?", answer: "Chlorophyll" },

    { question: "What organelle carries out photosynthesis?", answer: "Chloroplast" },
    { question: "What is glucose often stored as?", answer: "Starch" },

    { question: "Name one limiting factor of photosynthesis.", answer: "Light intensity / carbon dioxide concentration / temperature / chlorophyll" },
    { question: "What happens to the rate if light intensity increases?", answer: "It increases until another factor becomes limiting" },

    { question: "Why does the rate fall at high temperature?", answer: "Enzymes denature" },

    { question: "In an experiment, what is the independent variable?", answer: "The variable changed" },
    { question: "In an experiment, what is the dependent variable?", answer: "The variable measured" },
    { question: "Why keep control variables the same?", answer: "To make it a fair test" },

    { question: "What leaf structure lets carbon dioxide in?", answer: "Stomata" },
    { question: "What tissue has many chloroplasts?", answer: "Palisade mesophyll" },

    { question: "Why is a large surface area useful for a leaf?", answer: "It absorbs more light" },
    { question: "Why are leaves thin?", answer: "Short diffusion distance" }
  ],

  examQuestions: [
    {
      question: "Write the word equation for photosynthesis and state the energy source.",
      marks: 3,
      markScheme: [
        "Carbon dioxide + water → glucose + oxygen",
        "Light is needed",
        "Energy source is light / sunlight"
      ]
    },
    {
      question: "State two limiting factors of photosynthesis and explain what a limiting factor is.",
      marks: 4,
      markScheme: [
        "Two from light intensity / carbon dioxide concentration / temperature / chlorophyll",
        "A limiting factor restricts the rate",
        "If increased, the rate increases",
        "Until another factor becomes limiting"
      ]
    },
    {
      question: "Explain why the rate of photosynthesis increases as light intensity increases and then levels off.",
      marks: 4,
      markScheme: [
        "More light means more energy absorbed",
        "So photosynthesis rate increases",
        "Eventually another factor becomes limiting",
        "So the rate levels off"
      ]
    },
    {
      question: "A student investigates the effect of light intensity on the rate of photosynthesis in pondweed. Identify the independent variable, dependent variable and two control variables.",
      marks: 4,
      markScheme: [
        "Independent variable = light intensity / distance from lamp",
        "Dependent variable = rate of photosynthesis / oxygen produced / bubble count",
        "Control variable example: temperature",
        "Control variable example: carbon dioxide concentration / type of pondweed / time"
      ]
    },
    {
      question: "Explain how temperature affects photosynthesis.",
      marks: 4,
      markScheme: [
        "Photosynthesis is enzyme-controlled",
        "Rate increases as temperature increases to optimum",
        "At high temperatures enzymes denature",
        "Rate then decreases"
      ]
    },
    {
      question: "Describe three adaptations of a leaf for photosynthesis.",
      marks: 3,
      markScheme: [
        "Large surface area",
        "Thin leaf / short diffusion distance",
        "Many chloroplasts in palisade cells",
        "Stomata for gas exchange",
        "Veins for transport"
      ]
    },
    {
      question: "Explain why plants convert glucose to starch.",
      marks: 2,
      markScheme: [
        "Starch is insoluble",
        "So it can be stored"
      ]
    },
    {
      question: "A graph shows the rate of photosynthesis increasing and then decreasing at very high temperature. Explain this pattern.",
      marks: 4,
      markScheme: [
        "Rate increases as enzymes and particles have more kinetic energy",
        "More successful collisions",
        "Above optimum temperature enzymes denature",
        "Photosynthesis rate decreases"
      ]
    }
  ]
};