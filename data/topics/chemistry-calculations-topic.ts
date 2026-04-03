import type { TopicContent } from "./types";

export const chemistryCalculations: TopicContent = {
  flashcards: [
    { question: "What is a mole?", answer: "A mole is the amount of substance containing 6.02 * 10^23 particles." },
    { question: "Formula to calculate moles from mass?", answer: "moles = mass / Mr" },
    { question: "Formula to calculate mass?", answer: "mass = moles * Mr" },
    { question: "What does Mr mean?", answer: "Relative formula mass (sum of atomic masses)." },
    { question: "Formula for concentration?", answer: "concentration = moles / volume (dm3)" },
    { question: "Formula for moles from concentration?", answer: "moles = concentration * volume" },
    { question: "Convert cm3 to dm3?", answer: "Divide by 1000" },
    { question: "Gas volume at RTP?", answer: "1 mole = 24 dm3" },
    { question: "Formula for gas moles?", answer: "moles = volume / 24" },
    { question: "Empirical formula?", answer: "Simplest ratio of atoms" },
    { question: "Molecular formula?", answer: "Actual number of atoms" },
    { question: "Percentage yield formula?", answer: "(actual / theoretical) * 100" },
    { question: "Percentage purity formula?", answer: "(pure / total) * 100" },
    { question: "What is limiting reactant?", answer: "Reactant used up first" },
    { question: "What must equations be?", answer: "Balanced" }
  ],

  shortQuestions: [
    {
      question: "Calculate moles in 12 g of Mg (Ar = 24)",
      answer: "moles = 12 / 24 = 0.5 mol"
    },
    {
      question: "Calculate Mr of CaCO3",
      answer: "40 + 12 + 48 = 100"
    },
    {
      question: "Mass of 0.25 mol NaCl (Mr = 58.5)",
      answer: "mass = 0.25 * 58.5 = 14.6 g"
    },
    {
      question: "Concentration of 0.4 mol in 2 dm3",
      answer: "0.4 / 2 = 0.2 mol/dm3"
    },
    {
      question: "Convert 250 cm3 to dm3",
      answer: "250 / 1000 = 0.25 dm3"
    },
    {
      question: "Moles in 500 cm3 of 0.2 mol/dm3",
      answer: "0.2 * 0.5 = 0.1 mol"
    },
    {
      question: "Volume of 0.75 mol gas",
      answer: "0.75 * 24 = 18 dm3"
    },
    {
      question: "Moles in 48 dm3 gas",
      answer: "48 / 24 = 2 mol"
    },
    {
      question: "Empirical formula from 12g C and 32g O",
      answer: "C = 1, O = 2 → CO2"
    },
    {
      question: "Empirical CH2, Mr 56 → molecular?",
      answer: "56 / 14 = 4 → C4H8"
    },
    {
      question: "Percentage yield from 8.5 / 10",
      answer: "(8.5 / 10) * 100 = 85%"
    },
    {
      question: "Purity from 15g in 20g",
      answer: "(15 / 20) * 100 = 75%"
    },
    {
      question: "2H2 + O2 → 2H2O, 4 mol H2 → H2O?",
      answer: "ratio 1:1 → 4 mol"
    },
    {
      question: "N2 + 3H2 → 2NH3, 6 mol H2 → NH3?",
      answer: "ratio 3:2 → 4 mol"
    },
    {
      question: "Zn + 2HCl → ZnCl2 + H2, 0.5 mol Zn → HCl?",
      answer: "ratio 1:2 → 1 mol"
    }
  ],

  examQuestions: [
  {
    question: "Carbon burns in oxygen according to the equation: C + O2 → CO2. Calculate the mass of carbon dioxide produced when 5.0 g of carbon reacts completely. (C = 12, O = 16)",
    marks: 5,
    markScheme: [
      "Calculate moles of carbon: 5.0 / 12 = 0.417 mol",
      "Use mole ratio C : CO2 = 1 : 1",
      "Moles of CO2 = 0.417 mol",
      "Mr of CO2 = 44",
      "Mass of CO2 = 0.417 * 44 = 18.3 g"
    ]
  },
  {
    question: "Magnesium reacts with hydrochloric acid: Mg + 2HCl → MgCl2 + H2. Calculate the volume of hydrogen gas produced at RTP when 4.8 g of magnesium reacts completely. (Mg = 24)",
    marks: 6,
    markScheme: [
      "Moles of Mg = 4.8 / 24 = 0.20 mol",
      "Use mole ratio Mg : H2 = 1 : 1",
      "Moles of H2 = 0.20 mol",
      "Use gas volume at RTP = 24 dm3 per mole",
      "Volume = 0.20 * 24",
      "Answer = 4.8 dm3"
    ]
  },
  {
    question: "A solution is made by dissolving 5.85 g of sodium chloride (NaCl) in water to make 500 cm3 of solution. Calculate the concentration of the solution in mol/dm3. (Na = 23, Cl = 35.5)",
    marks: 6,
    markScheme: [
      "Mr of NaCl = 58.5",
      "Moles = 5.85 / 58.5 = 0.10 mol",
      "Convert 500 cm3 to dm3: 0.500 dm3",
      "Use concentration = moles / volume",
      "Concentration = 0.10 / 0.500",
      "Answer = 0.20 mol/dm3"
    ]
  },
  {
    question: "A compound contains 2.4 g of magnesium and 1.6 g of oxygen. Determine the empirical formula of the compound. (Mg = 24, O = 16)",
    marks: 6,
    markScheme: [
      "Moles Mg = 2.4 / 24 = 0.10",
      "Moles O = 1.6 / 16 = 0.10",
      "Divide by smallest value",
      "Ratio Mg : O = 1 : 1",
      "Empirical formula = MgO"
    ]
  },
  {
    question: "A hydrocarbon has an empirical formula CH2 and a relative formula mass (Mr) of 84. Calculate its molecular formula.",
    marks: 5,
    markScheme: [
      "Empirical formula mass of CH2 = 14",
      "84 / 14 = 6",
      "Multiply empirical formula by 6",
      "C6H12",
      "Correct answer"
    ]
  },
  {
    question: "Calcium carbonate decomposes when heated: CaCO3 → CaO + CO2. Calculate the mass of calcium oxide formed from 25.0 g of calcium carbonate. (Ca = 40, C = 12, O = 16)",
    marks: 6,
    markScheme: [
      "Mr of CaCO3 = 100",
      "Moles of CaCO3 = 25.0 / 100 = 0.25 mol",
      "Use ratio CaCO3 : CaO = 1 : 1",
      "Moles of CaO = 0.25 mol",
      "Mr of CaO = 56",
      "Mass = 0.25 * 56 = 14.0 g"
    ]
  },
  {
    question: "In a titration, 25.0 cm3 of sodium hydroxide solution is neutralised by 20.0 cm3 of 0.100 mol/dm3 hydrochloric acid. Calculate the concentration of the sodium hydroxide solution. Equation: HCl + NaOH → NaCl + H2O",
    marks: 6,
    markScheme: [
      "Convert 20.0 cm3 to dm3 = 0.0200 dm3",
      "Moles of HCl = 0.100 * 0.0200 = 0.00200 mol",
      "Use ratio HCl : NaOH = 1 : 1",
      "Moles NaOH = 0.00200 mol",
      "Convert 25.0 cm3 to dm3 = 0.0250 dm3",
      "Concentration = 0.00200 / 0.0250 = 0.0800 mol/dm3"
    ]
  },
  {
    question: "Iron is produced by the reaction: Fe2O3 + 3CO → 2Fe + 3CO2. Calculate the mass of iron produced from 16.0 g of Fe2O3. (Fe = 56, O = 16)",
    marks: 7,
    markScheme: [
      "Mr of Fe2O3 = 160",
      "Moles = 16.0 / 160 = 0.10 mol",
      "Use ratio Fe2O3 : Fe = 1 : 2",
      "Moles of Fe = 0.20 mol",
      "Ar of Fe = 56",
      "Mass = 0.20 * 56",
      "Answer = 11.2 g"
    ]
  },
  {
    question: "The theoretical yield of a reaction is 12.0 g, but only 9.0 g of product is obtained. Calculate the percentage yield and suggest one reason why the yield is less than 100%.",
    marks: 4,
    markScheme: [
      "Use formula (actual / theoretical) * 100",
      "9.0 / 12.0 * 100 = 75%",
      "Correct percentage = 75%",
      "Valid reason (e.g. incomplete reaction / product loss / side reactions)"
    ]
  },
      {
      question: "A 40.0 g sample of limestone contains 80% calcium carbonate (CaCO3). The limestone is heated: CaCO3 → CaO + CO2. Calculate the maximum mass of carbon dioxide that can be produced. (Ca = 40, C = 12, O = 16)",
      marks: 8,
      markScheme: [
        "Mass of pure CaCO3 = 0.80 * 40.0 = 32.0 g",
        "Mr of CaCO3 = 100",
        "Moles of CaCO3 = 32.0 / 100 = 0.32 mol",
        "Use ratio CaCO3 : CO2 = 1 : 1",
        "Moles of CO2 = 0.32 mol",
        "Mr of CO2 = 44",
        "Mass = 0.32 * 44",
        "Answer = 14.1 g"
      ]
    }
  ]
};