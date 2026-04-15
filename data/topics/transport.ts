import type { TopicContent } from "./types";

export const transport: TopicContent = {
  flashcards: [
    // ❤️ CIRCULATION
    { question: "What is a double circulatory system?", answer: "A system where blood passes through the heart twice per circuit." },
    { question: "What are the two circulations?", answer: "Pulmonary (heart ↔ lungs) and systemic (heart ↔ body)." },

    { question: "What is the function of the heart?", answer: "To pump blood around the body." },

    // 🩸 BLOOD VESSELS
    { question: "What do arteries do?", answer: "Carry blood away from the heart at high pressure." },
    { question: "What do veins do?", answer: "Carry blood towards the heart at low pressure." },
    { question: "What do capillaries do?", answer: "Allow exchange of substances between blood and cells." },

    { question: "Why do arteries have thick walls?", answer: "To withstand high pressure." },
    { question: "Why do veins have valves?", answer: "To prevent backflow of blood." },

    // 🧬 BLOOD
    { question: "What do red blood cells do?", answer: "Carry oxygen using haemoglobin." },
    { question: "Why are red blood cells biconcave?", answer: "To increase surface area for oxygen absorption." },
    { question: "Why do red blood cells have no nucleus?", answer: "To carry more haemoglobin." },

    { question: "What do white blood cells do?", answer: "Defend against pathogens." },
    { question: "What does plasma transport?", answer: "Nutrients, hormones, carbon dioxide and urea." },
    { question: "What do platelets do?", answer: "Help blood clot." },

    // ❤️ HEART
    { question: "What happens when the heart contracts?", answer: "Pressure increases and blood is pumped out." },
    { question: "What do ventricles do?", answer: "Pump blood out of the heart." },

    // 🌬️ EXERCISE
    { question: "Why does heart rate increase during exercise?", answer: "To deliver more oxygen to muscles." },
    { question: "Why do fit people recover faster?", answer: "Their heart is more efficient." },

    // 🌿 PLANTS
    { question: "What is xylem?", answer: "Tissue that transports water and minerals upwards." },
    { question: "What is phloem?", answer: "Tissue that transports sugars around the plant." },

    { question: "What is transpiration?", answer: "Loss of water vapour from leaves." },
    { question: "What causes transpiration pull?", answer: "Evaporation of water from leaves." },

    { question: "What is translocation?", answer: "Movement of sugars in phloem." },

    // 🌱 FACTORS
    { question: "Effect of temperature on transpiration?", answer: "Increases transpiration rate." },
    { question: "Effect of humidity?", answer: "Higher humidity decreases transpiration." },
    { question: "Effect of wind?", answer: "Increases transpiration." },
    { question: "Effect of light?", answer: "Increases transpiration (stomata open)." },

    // 🔬 KEY DEFINITIONS
    { question: "What is diffusion?", answer: "Movement of particles from high to low concentration." },
    { question: "What is osmosis?", answer: "Movement of water across a partially permeable membrane." },
    { question: "What is active transport?", answer: "Movement against concentration gradient using energy." }
  ],

  shortQuestions: [
    { question: "Which vessel carries blood away from heart?", answer: "Artery" },
    { question: "Which vessel has valves?", answer: "Vein" },
    { question: "Where does exchange happen?", answer: "Capillaries" },

    { question: "What carries oxygen?", answer: "Red blood cells" },
    { question: "What fights infection?", answer: "White blood cells" },

    { question: "Which side of heart goes to lungs?", answer: "Right side" },
    { question: "Which side pumps to body?", answer: "Left side" },

    { question: "What does xylem transport?", answer: "Water and minerals" },
    { question: "What does phloem transport?", answer: "Sugars" },

    { question: "What increases transpiration?", answer: "Heat, wind, light" },
    { question: "What decreases transpiration?", answer: "Humidity" }
  ],

  examQuestions: [
    {
      question: "Describe how the structure of red blood cells is adapted to their function.",
      marks: 2,
      markScheme: [
        "Biconcave shape increases surface area",
        "No nucleus allows more haemoglobin"
      ]
    },
    {
      question: "Explain why arteries have thicker walls than veins.",
      marks: 3,
      markScheme: [
        "Arteries carry blood at high pressure",
        "Thick muscular walls",
        "Elastic fibres allow stretch and recoil"
      ]
    },
    {
      question: "Describe how blood is moved by the heart.",
      marks: 4,
      markScheme: [
        "Heart contracts increasing pressure",
        "Blood forced out into arteries",
        "Right side to lungs",
        "Left side to body"
      ]
    },
    {
      question: "Explain how heart rate increases during exercise.",
      marks: 3,
      markScheme: [
        "Muscles need more oxygen",
        "Respiration increases",
        "Heart pumps faster"
      ]
    },
    {
      question: "Describe the role of xylem and phloem.",
      marks: 4,
      markScheme: [
        "Xylem transports water and minerals",
        "Movement upwards only",
        "Phloem transports sugars",
        "Movement in both directions"
      ]
    },
    {
      question: "Explain why transpiration rate increases on a hot, dry and windy day.",
      marks: 3,
      markScheme: [
        "Heat increases evaporation",
        "Dry air increases gradient",
        "Wind removes water vapour"
      ]
    },
    {
      question: "Describe translocation in plants.",
      marks: 4,
      markScheme: [
        "Sugars move from leaves (source)",
        "To other parts (sink)",
        "Active transport involved",
        "Water follows by osmosis creating pressure"
      ]
    }
  ]
};