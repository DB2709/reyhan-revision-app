import type { TopicContent } from "./types";

export const acidSaltsSolubility: TopicContent = {
  flashcards: [
    { question: "What is an acid?", answer: "A substance that produces H+ ions in solution." },
    { question: "What is an alkali?", answer: "A base that dissolves in water to produce OH- ions." },
    { question: "What is neutralisation?", answer: "Acid + base → salt + water" },
    { question: "General reaction acid + metal?", answer: "Acid + metal → salt + hydrogen" },
    { question: "General reaction acid + oxide?", answer: "Acid + metal oxide → salt + water" },
    { question: "General reaction acid + hydroxide?", answer: "Acid + hydroxide → salt + water" },
    { question: "General reaction acid + carbonate?", answer: "Acid + carbonate → salt + water + CO2" },
    { question: "Test for CO2?", answer: "Limewater turns milky" },
    { question: "What gas is produced with metals?", answer: "Hydrogen" },
    { question: "Test for hydrogen?", answer: "Squeaky pop" },

    { question: "What is a salt?", answer: "A compound formed when H+ in an acid is replaced by a metal or ammonium ion." },
    { question: "Hydrochloric acid forms what salts?", answer: "Chlorides" },
    { question: "Sulfuric acid forms what salts?", answer: "Sulfates" },
    { question: "Nitric acid forms what salts?", answer: "Nitrates" },

    { question: "What is solubility?", answer: "The amount of substance that dissolves in a solvent." },
    { question: "What is a soluble salt?", answer: "A salt that dissolves in water" },
    { question: "What is an insoluble salt?", answer: "A salt that does not dissolve in water" },

    { question: "How to make a soluble salt from insoluble base?", answer: "Add excess base, filter, evaporate, crystallise" },
    { question: "Why add excess solid?", answer: "To ensure all acid is neutralised" },
    { question: "Why filter?", answer: "To remove unreacted solid" },
    { question: "Why heat solution?", answer: "To evaporate water and concentrate solution" },
    { question: "Why cool slowly?", answer: "To form crystals" },

    { question: "What is crystallisation?", answer: "Formation of solid crystals from solution" },
    { question: "What is filtration?", answer: "Separating solid from liquid" },

    { question: "What is precipitation?", answer: "Formation of an insoluble solid from two solutions" },
    { question: "What is a precipitate?", answer: "An insoluble solid formed in a reaction" },

    { question: "All nitrates are?", answer: "Soluble" },
    { question: "All sodium, potassium, ammonium salts?", answer: "Soluble" },
    { question: "Most chlorides?", answer: "Soluble (except AgCl, PbCl2)" },
    { question: "Most sulfates?", answer: "Soluble (except BaSO4, PbSO4)" },
    { question: "Most carbonates?", answer: "Insoluble (except Na, K, NH4)" }
  ],

  shortQuestions: [
    { question: "Name salt from HCl + NaOH", answer: "Sodium chloride" },
    { question: "Name salt from H2SO4 + CuO", answer: "Copper sulfate" },
    { question: "Name salt from HNO3 + KOH", answer: "Potassium nitrate" },

    { question: "What is produced when acid reacts with carbonate?", answer: "Salt + water + CO2" },
    { question: "Why is excess base added?", answer: "To ensure all acid reacts" },

    { question: "What does filtration remove?", answer: "Unreacted solid" },
    { question: "What is left after filtration?", answer: "Salt solution" },

    { question: "Why evaporate solution?", answer: "To form crystals" },
    { question: "What happens if heated too much?", answer: "No crystals form / decomposition risk" },

    { question: "What is a precipitate?", answer: "Insoluble solid" },

    { question: "Silver nitrate + sodium chloride produces?", answer: "Silver chloride precipitate" },
    { question: "Barium chloride + sulfate produces?", answer: "Barium sulfate precipitate" },

    { question: "Why use titration instead?", answer: "When both reactants are soluble" },

    { question: "What is the state symbol for aqueous?", answer: "(aq)" },
    { question: "What is the state symbol for solid?", answer: "(s)" }
  ],

  examQuestions: [
    {
      question: "Describe how to prepare a pure sample of copper sulfate crystals from copper oxide and sulfuric acid.",
      marks: 6,
      markScheme: [
        "Add copper oxide to sulfuric acid",
        "Heat gently",
        "Add excess copper oxide until no more reacts",
        "Filter to remove excess solid",
        "Evaporate filtrate to concentrate",
        "Leave to cool to form crystals"
      ]
    },
    {
      question: "Explain why excess copper oxide is added when preparing a salt.",
      marks: 3,
      markScheme: [
        "Ensures all acid reacts",
        "No acid left in solution",
        "Solid can be removed by filtration"
      ]
    },
    {
      question: "Explain how crystals are obtained from a salt solution.",
      marks: 4,
      markScheme: [
        "Heat solution to evaporate water",
        "Solution becomes concentrated",
        "Leave to cool",
        "Crystals form"
      ]
    },
    {
      question: "Silver nitrate solution is mixed with sodium chloride solution. Describe what happens and write the ionic equation.",
      marks: 5,
      markScheme: [
        "White precipitate forms",
        "Silver chloride produced",
        "Ag+ + Cl- → AgCl",
        "Precipitate is insoluble"
      ]
    },
    {
      question: "Describe how to prepare sodium chloride using titration.",
      marks: 6,
      markScheme: [
        "Use acid and alkali",
        "Add indicator",
        "Titrate to end point",
        "Repeat without indicator",
        "Evaporate solution",
        "Crystals form"
      ]
    },
    {
      question: "Explain why filtration is used in preparing salts.",
      marks: 2,
      markScheme: [
        "Removes excess solid",
        "Leaves pure solution"
      ]
    },
    {
      question: "A student mixes two solutions and forms a precipitate. Explain what has happened.",
      marks: 3,
      markScheme: [
        "Two soluble salts react",
        "An insoluble salt forms",
        "This solid is a precipitate"
      ]
    },
    {
      question: "Describe the steps to obtain dry crystals from a solution.",
      marks: 4,
      markScheme: [
        "Evaporate some water",
        "Allow to cool",
        "Crystals form",
        "Dry using filter paper"
      ]
    },
    {
      question: "Explain why slow cooling is important in crystallisation.",
      marks: 2,
      markScheme: [
        "Allows larger crystals to form",
        "Improves purity"
      ]
    },
    {
      question: "Describe how to prepare magnesium nitrate from magnesium oxide and nitric acid.",
      marks: 6,
      markScheme: [
        "Add magnesium oxide to nitric acid",
        "Heat gently",
        "Add excess solid",
        "Filter excess",
        "Evaporate solution",
        "Cool to form crystals"
      ]
    }
  ]
};