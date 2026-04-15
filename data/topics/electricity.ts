import type { TopicContent } from "./types";

export const electricity: TopicContent = {
  flashcards: [
    { question: "What is current?", answer: "The flow of electric charge." },
    { question: "What is the unit of current?", answer: "Ampere (A)" },
    { question: "What is the equation for current?", answer: "I = Q / t" },

    { question: "What is voltage (potential difference)?", answer: "Energy transferred per unit charge." },
    { question: "What is the unit of voltage?", answer: "Volt (V)" },
    { question: "What is the equation for voltage?", answer: "V = E / Q" },

    { question: "What is resistance?", answer: "How much a component opposes current." },
    { question: "What is the unit of resistance?", answer: "Ohm (Ω)" },

    { question: "What is Ohm’s Law?", answer: "V = I × R" },

    { question: "What is power?", answer: "Energy transferred per second." },
    { question: "What is the equation for power?", answer: "Power = energy / time" },
    { question: "What is the unit of power?", answer: "Watt (W)" },

    { question: "What is a series circuit?", answer: "Components connected in a single loop." },
    { question: "What happens to current in series?", answer: "It is the same everywhere." },
    { question: "What happens to voltage in series?", answer: "It is shared between components." },

    { question: "What is a parallel circuit?", answer: "Components connected on separate branches." },
    { question: "What happens to current in parallel?", answer: "It splits between branches." },
    { question: "What happens to voltage in parallel?", answer: "It is the same across each branch." },

    { question: "What happens if one component breaks in series?", answer: "The whole circuit stops." },
    { question: "What happens if one component breaks in parallel?", answer: "Other branches still work." },

    { question: "What is a diode?", answer: "A component that only allows current to flow in one direction." },

    { question: "What is an ammeter used for?", answer: "To measure current (in series)." },
    { question: "What is a voltmeter used for?", answer: "To measure voltage (in parallel)." },

    { question: "How does temperature affect resistance?", answer: "Higher temperature increases resistance." },
    { question: "How does light affect an LDR?", answer: "More light decreases resistance." },
    { question: "How does temperature affect a thermistor?", answer: "Higher temperature decreases resistance." }
  ],

  shortQuestions: [
    { question: "Unit of current?", answer: "Ampere (A)" },
    { question: "Unit of voltage?", answer: "Volt (V)" },
    { question: "Unit of resistance?", answer: "Ohm (Ω)" },

    { question: "Equation for current?", answer: "I = Q / t" },
    { question: "Equation for voltage?", answer: "V = E / Q" },
    { question: "Ohm’s Law?", answer: "V = I × R" },

    { question: "What happens to current in series?", answer: "Same everywhere" },
    { question: "What happens to current in parallel?", answer: "Splits" },

    { question: "What happens to voltage in series?", answer: "Shared" },
    { question: "What happens to voltage in parallel?", answer: "Same" },

    { question: "Where is an ammeter placed?", answer: "In series" },
    { question: "Where is a voltmeter placed?", answer: "In parallel" },

    { question: "What does a diode do?", answer: "Allows current one way only" },

    { question: "If resistance increases, what happens to current?", answer: "Current decreases" },

    { question: "What affects readings on meters?", answer: "Temperature, light, resistance changes" }
  ],

  examQuestions: [
    {
      question: "Explain the difference between series and parallel circuits.",
      marks: 4,
      markScheme: [
        "Series has one loop",
        "Parallel has branches",
        "Current same in series but splits in parallel",
        "Voltage shared in series but same in parallel"
      ]
    },
    {
      question: "A charge of 10 C flows in 2 seconds. Calculate the current.",
      marks: 3,
      markScheme: [
        "Use I = Q / t",
        "10 ÷ 2",
        "Answer = 5 A"
      ]
    },
    {
      question: "A device transfers 100 J of energy with 10 C of charge. Calculate the voltage.",
      marks: 3,
      markScheme: [
        "Use V = E / Q",
        "100 ÷ 10",
        "Answer = 10 V"
      ]
    },
    {
      question: "A resistor has resistance 5 Ω and current 2 A. Calculate the voltage.",
      marks: 3,
      markScheme: [
        "Use V = I × R",
        "2 × 5",
        "Answer = 10 V"
      ]
    },
    {
      question: "Explain how a diode works.",
      marks: 3,
      markScheme: [
        "Allows current one direction",
        "Blocks reverse current",
        "Used for protection or rectification"
      ]
    },
    {
      question: "Describe how an ammeter and voltmeter are used in a circuit.",
      marks: 4,
      markScheme: [
        "Ammeter measures current",
        "Connected in series",
        "Voltmeter measures voltage",
        "Connected in parallel"
      ]
    },
    {
      question: "Explain how temperature affects resistance and meter readings.",
      marks: 4,
      markScheme: [
        "Higher temperature increases resistance",
        "More collisions in conductor",
        "Current decreases",
        "Ammeter reading decreases"
      ]
    },
    {
      question: "Explain how light affects an LDR and the circuit.",
      marks: 3,
      markScheme: [
        "More light reduces resistance",
        "Current increases",
        "Ammeter reading increases"
      ]
    }
  ]
};