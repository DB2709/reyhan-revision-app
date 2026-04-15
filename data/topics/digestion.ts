import type { TopicContent } from "./types";

export const digestion: TopicContent = {
  flashcards: [
    // 🔬 BASICS
    { question: "What is digestion?", answer: "The breakdown of large insoluble food molecules into small soluble molecules." },
    { question: "Why must food be digested?", answer: "So it can be absorbed into the bloodstream." },

    // 🍎 NUTRIENTS
    { question: "What are the three main macronutrients?", answer: "Carbohydrates, proteins and lipids (fats)." },
    { question: "What are carbohydrates broken down into?", answer: "Simple sugars (glucose)." },
    { question: "What are proteins broken down into?", answer: "Amino acids." },
    { question: "What are lipids broken down into?", answer: "Fatty acids and glycerol." },

    // 🧪 ENZYMES
    { question: "What is an enzyme?", answer: "A biological catalyst that speeds up reactions without being used up." },
    { question: "What does amylase do?", answer: "Breaks down starch into sugars." },
    { question: "What does protease do?", answer: "Breaks down proteins into amino acids." },
    { question: "What does lipase do?", answer: "Breaks down lipids into fatty acids and glycerol." },

    { question: "Where is amylase produced?", answer: "Salivary glands, pancreas and small intestine." },
    { question: "Where is protease produced?", answer: "Stomach, pancreas and small intestine." },
    { question: "Where is lipase produced?", answer: "Pancreas and small intestine." },

    // 🧫 CONDITIONS
    { question: "What is the optimum temperature for enzymes in humans?", answer: "Around 37°C." },
    { question: "What happens if temperature is too high?", answer: "Enzymes denature and stop working." },
    { question: "What is the effect of pH on enzymes?", answer: "Each enzyme has an optimum pH; outside it, activity decreases." },

    // 🧴 BILE
    { question: "What is bile?", answer: "A substance produced by the liver and stored in the gall bladder." },
    { question: "What does bile do?", answer: "Neutralises stomach acid and emulsifies fats." },
    { question: "What does emulsify mean?", answer: "Break fat into small droplets to increase surface area." },

    // 🧍 DIGESTIVE SYSTEM
    { question: "Where does digestion start?", answer: "In the mouth." },
    { question: "What happens in the stomach?", answer: "Protein digestion with protease and acidic conditions." },
    { question: "Where does most digestion occur?", answer: "Small intestine." },
    { question: "Where are nutrients absorbed?", answer: "Small intestine (villi)." },

    // 🧠 ABSORPTION
    { question: "What are villi?", answer: "Finger-like projections that increase surface area for absorption." },
    { question: "How are villi adapted?", answer: "Large surface area, thin walls, good blood supply." },

    // 🧪 FOOD TESTS
    { question: "Test for starch?", answer: "Iodine solution → turns blue-black if present." },
    { question: "Test for sugars?", answer: "Benedict’s solution + heat → blue to green/yellow/orange/red." },
    { question: "Test for protein?", answer: "Biuret test → purple if protein present." },
    { question: "Test for lipids?", answer: "Ethanol emulsion test → cloudy white." },

    // 🔬 EXPERIMENTS
    { question: "What is the independent variable?", answer: "The variable you change." },
    { question: "What is the dependent variable?", answer: "The variable you measure." },
    { question: "What is a control variable?", answer: "A variable kept the same for a fair test." },

    { question: "Why repeat experiments?", answer: "To improve reliability." },
    { question: "Why control temperature in enzyme experiments?", answer: "Because temperature affects enzyme activity." }
  ],

  shortQuestions: [
    { question: "What enzyme digests starch?", answer: "Amylase" },
    { question: "What enzyme digests protein?", answer: "Protease" },
    { question: "What enzyme digests fat?", answer: "Lipase" },

    { question: "Where is bile produced?", answer: "Liver" },
    { question: "Where is bile stored?", answer: "Gall bladder" },

    { question: "What is the pH of the stomach?", answer: "Acidic (around pH 2)" },
    { question: "What happens to enzymes at high temperature?", answer: "They denature" },

    { question: "What colour is a positive iodine test?", answer: "Blue-black" },
    { question: "What colour is a positive Benedict’s test?", answer: "Orange/red" },

    { question: "What structure absorbs nutrients?", answer: "Villi" },
    { question: "Why are villi important?", answer: "Increase surface area" },

    { question: "What are lipids broken into?", answer: "Fatty acids and glycerol" },
    { question: "What are proteins broken into?", answer: "Amino acids" },

    { question: "What does emulsification do?", answer: "Increases surface area of fat" }
  ],

  examQuestions: [
    {
      question: "Describe the role of enzymes in digestion.",
      marks: 4,
      markScheme: [
        "Enzymes are biological catalysts",
        "They speed up digestion",
        "Different enzymes break down different nutrients",
        "Example: amylase breaks starch into sugars"
      ]
    },
    {
      question: "Explain how bile helps digestion.",
      marks: 4,
      markScheme: [
        "Bile neutralises stomach acid",
        "Creates alkaline conditions",
        "Bile emulsifies fats",
        "Increases surface area for lipase"
      ]
    },
    {
      question: "Describe how to test a food sample for starch and sugar.",
      marks: 4,
      markScheme: [
        "Add iodine → blue-black if starch present",
        "Add Benedict’s solution",
        "Heat in water bath",
        "Colour change indicates sugar"
      ]
    },
    {
      question: "Explain the effect of temperature on enzyme activity.",
      marks: 4,
      markScheme: [
        "Rate increases with temperature",
        "More collisions",
        "Optimum temperature reached",
        "High temperature denatures enzyme"
      ]
    },
    {
      question: "Describe how the small intestine is adapted for absorption.",
      marks: 4,
      markScheme: [
        "Villi increase surface area",
        "Thin walls for short diffusion distance",
        "Good blood supply",
        "Maintains concentration gradient"
      ]
    },
    {
      question: "A student investigates how lipase breaks down fat in milk. Describe variables they should control.",
      marks: 3,
      markScheme: [
        "Temperature",
        "pH",
        "Volume of solution / concentration"
      ]
    },
    {
      question: "Explain why enzyme activity decreases at very high temperatures.",
      marks: 3,
      markScheme: [
        "Enzyme structure changes",
        "Active site changes shape",
        "Substrate no longer fits"
      ]
    },
    {
      question: "Explain why fat digestion is faster after emulsification.",
      marks: 3,
      markScheme: [
        "Fat broken into small droplets",
        "Surface area increases",
        "More enzyme collisions"
      ]
    }
  ]
};