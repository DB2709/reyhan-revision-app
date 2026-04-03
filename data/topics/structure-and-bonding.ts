import type { TopicContent } from "./types";

export const structureAndBonding: TopicContent = {
  flashcards: [
    { question: "What is an ionic bond?", answer: "The electrostatic attraction between oppositely charged ions." },
    { question: "What is a covalent bond?", answer: "A shared pair of electrons between two atoms." },
    { question: "What is metallic bonding?", answer: "The electrostatic attraction between positive metal ions and delocalised electrons." },
    { question: "What is a simple molecular substance?", answer: "A substance made of small molecules with strong covalent bonds inside each molecule and weak intermolecular forces between molecules." },
    { question: "What is a giant ionic lattice?", answer: "A regular arrangement of oppositely charged ions held together by strong electrostatic attractions." },
    { question: "What is a giant covalent structure?", answer: "A structure where many atoms are joined by strong covalent bonds in a giant network." },
    { question: "What is a giant metallic lattice?", answer: "A regular arrangement of positive metal ions in a sea of delocalised electrons." },

    { question: "Why do ionic compounds have high melting points?", answer: "Because a lot of energy is needed to overcome the strong electrostatic attractions between ions." },
    { question: "Why do simple molecular substances have low melting points?", answer: "Because only weak intermolecular forces need to be overcome." },
    { question: "Why do giant covalent substances have high melting points?", answer: "Because many strong covalent bonds must be broken." },
    { question: "Why do metals conduct electricity?", answer: "Because they contain delocalised electrons that can move through the structure." },
    { question: "Why do ionic compounds conduct electricity when molten or dissolved?", answer: "Because the ions are free to move and carry charge." },
    { question: "Why do ionic compounds not conduct when solid?", answer: "Because the ions are fixed in position and cannot move." },

    { question: "What is the electronic configuration of sodium?", answer: "2,8,1" },
    { question: "What ion does sodium form?", answer: "Na+" },
    { question: "Why does sodium form Na+?", answer: "It loses one electron to get a full outer shell." },
    { question: "What ion does chlorine form?", answer: "Cl-" },
    { question: "Why does chlorine form Cl-?", answer: "It gains one electron to complete its outer shell." },

    { question: "What is the formula of water?", answer: "H2O" },
    { question: "Why is water covalent?", answer: "Hydrogen and oxygen are both non-metals and share electrons." },
    { question: "What is the formula of calcium fluoride?", answer: "CaF2" },
    { question: "Why is calcium fluoride CaF2?", answer: "Calcium forms Ca2+ and fluorine forms F-, so two fluoride ions are needed to balance the +2 charge." },
    { question: "What is the formula of beryllium fluoride?", answer: "BeF2" },
    { question: "Why is beryllium fluoride BeF2?", answer: "Beryllium forms Be2+ and fluorine forms F-, so two fluoride ions are needed." },

    { question: "What is an alloy?", answer: "A mixture of a metal with other elements." },
    { question: "Why are alloys harder than pure metals?", answer: "Different-sized atoms distort the layers and make them harder to slide over each other." },

    { question: "What are intermolecular forces?", answer: "Forces of attraction between molecules." },
    { question: "Are intermolecular forces stronger or weaker than covalent bonds?", answer: "Weaker." },

    { question: "What structure does diamond have?", answer: "A giant covalent structure." },
    { question: "Why is diamond very hard?", answer: "Each carbon atom forms four strong covalent bonds in a rigid giant structure." },
    { question: "Why does diamond have a very high melting point?", answer: "Many strong covalent bonds must be broken." },
    { question: "Why does diamond not conduct electricity?", answer: "It has no delocalised electrons or free ions." },

    { question: "What structure does graphite have?", answer: "A giant covalent structure made of layers." },
    { question: "Why is graphite soft and slippery?", answer: "The layers can slide over each other." },
    { question: "Why does graphite conduct electricity?", answer: "Each carbon atom has one delocalised electron that can move." },

    { question: "What structure does graphene have?", answer: "A single layer of carbon atoms in a giant covalent structure." },
    { question: "Why is graphene useful?", answer: "It is strong, thin and conducts electricity." },

    { question: "What structure does silicon dioxide have?", answer: "A giant covalent structure." },
    { question: "Why does silicon dioxide have a high melting point?", answer: "It has many strong covalent bonds." },

    { question: "Which substances have simple molecular structures?", answer: "Examples include oxygen, methane, bromine and water." },
    { question: "Which substances have giant metallic structures?", answer: "Metals such as copper, aluminium and iron." },
    { question: "Which substances have giant ionic structures?", answer: "Compounds such as sodium chloride and magnesium oxide." },

    { question: "What is the formula of oxygen molecule?", answer: "O2" },
    { question: "What is the formula of nitrogen molecule?", answer: "N2" },
    { question: "What is the formula of methane?", answer: "CH4" },
    { question: "What is the formula of bromine molecule?", answer: "Br2" },

    { question: "What happens during freezing?", answer: "A liquid changes to a solid." },
    { question: "What happens during melting?", answer: "A solid changes to a liquid." },
    { question: "What happens during condensation?", answer: "A gas changes to a liquid." },
    { question: "What happens during evaporation?", answer: "A liquid changes to a gas." },

    { question: "What is the key idea behind bonding?", answer: "Atoms bond to get a full outer shell and become more stable." }
  ],

  shortQuestions: [
    { question: "What type of bond forms when a metal reacts with a non-metal?", answer: "Ionic bond." },
    { question: "What is a covalent bond?", answer: "A shared pair of electrons." },
    { question: "What is the formula of sodium ion?", answer: "Na+" },
    { question: "Why do ionic compounds have high melting points?", answer: "Strong electrostatic attractions between oppositely charged ions." },
    { question: "Which type of substance has weak intermolecular forces?", answer: "Simple molecular substances." },
    { question: "Which structure does diamond have?", answer: "Giant covalent." },
    { question: "Why does graphite conduct electricity?", answer: "It has delocalised electrons." },
    { question: "Why are alloys harder than pure metals?", answer: "Different-sized atoms disrupt the layers." },
    { question: "What is the formula of calcium fluoride?", answer: "CaF2" },
    { question: "What is the formula of beryllium fluoride?", answer: "BeF2" },
    { question: "Why does sodium form Na+?", answer: "It loses one electron." },
    { question: "Why does chlorine form Cl-?", answer: "It gains one electron." },
    { question: "State one difference between diamond and graphite.", answer: "Diamond does not conduct electricity, but graphite does." },
    { question: "What is a giant metallic structure?", answer: "Positive metal ions with delocalised electrons." },
    { question: "What happens during condensation?", answer: "A gas becomes a liquid." }
  ],

  examQuestions: [
    {
      question: "The diagrams show the electronic configurations of six different atoms. Identify: a noble gas, an atom with three protons, phosphorus, an element in Group 4, an element in Period 3, and an atom with a full outer shell.",
      marks: 6,
      markScheme: [
        "Correct identification of the noble gas",
        "Correct identification of the atom with three protons",
        "Correct identification of phosphorus",
        "Correct identification of the Group 4 element",
        "Correct identification of the Period 3 element",
        "Correct identification of the atom with a full outer shell"
      ]
    },
    {
      question: "A covalent bond is the electrostatic attraction between a pair of ____ and the ____ of two atoms. Complete the sentence.",
      marks: 2,
      markScheme: [
        "shared electrons",
        "nuclei"
      ]
    },
    {
      question: "Suggest, with reference to electronic configurations, the most likely formula of the compound formed between atoms of A and D.",
      marks: 3,
      markScheme: [
        "Recognises the number of outer-shell electrons in each atom",
        "Uses this to work out the bonding ratio",
        "Correct formula given"
      ]
    },
    {
      question: "Explain why calcium fluoride has the formula CaF2 and beryllium fluoride has the formula BeF2.",
      marks: 4,
      markScheme: [
        "Calcium forms Ca2+ ions / beryllium forms Be2+ ions",
        "Fluorine forms F- ions",
        "Two fluoride ions are needed for each 2+ ion",
        "Therefore formulas are CaF2 and BeF2"
      ]
    },
    {
      question: "Compare simple molecular, giant covalent, giant ionic and giant metallic structures in terms of bonding and melting point.",
      marks: 6,
      markScheme: [
        "Simple molecular substances have strong covalent bonds within molecules but weak intermolecular forces",
        "Simple molecular substances have low melting points",
        "Giant covalent structures have many strong covalent bonds",
        "Giant covalent structures have high melting points",
        "Giant ionic structures have strong electrostatic attractions between ions",
        "Giant metallic structures have strong attraction between metal ions and delocalised electrons"
      ]
    },
    {
      question: "Explain why graphite conducts electricity but diamond does not.",
      marks: 4,
      markScheme: [
        "Graphite has delocalised electrons",
        "These electrons can move through the structure",
        "Diamond has no delocalised electrons",
        "So diamond cannot conduct electricity"
      ]
    },
    {
      question: "Describe the structure and properties of graphite.",
      marks: 5,
      markScheme: [
        "Graphite has a giant covalent structure",
        "Carbon atoms are arranged in layers",
        "Each carbon atom forms three covalent bonds",
        "Layers can slide over each other",
        "Graphite conducts electricity because it has delocalised electrons"
      ]
    },
    {
      question: "Explain why a substance with a giant ionic lattice conducts electricity when molten but not when solid.",
      marks: 4,
      markScheme: [
        "In the solid state, ions are fixed in position",
        "So they cannot move and carry charge",
        "When molten, ions are free to move",
        "So they can carry charge"
      ]
    },
    {
      question: "A student says that bromine and methane have low boiling points because they are simple molecular substances. Explain why this is true.",
      marks: 4,
      markScheme: [
        "Bromine and methane are simple molecular substances",
        "There are weak intermolecular forces between molecules",
        "These forces require only a small amount of energy to overcome",
        "So they have low boiling points"
      ]
    },
    {
      question: "Explain why alloys are harder than pure metals.",
      marks: 3,
      markScheme: [
        "Alloys contain different-sized atoms",
        "These distort the layers",
        "So the layers cannot slide over each other as easily"
      ]
    }
  ]
};