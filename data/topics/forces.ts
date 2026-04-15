import type { TopicContent } from "./types";

export const forces: TopicContent = {
  flashcards: [
    { question: "What is a scalar quantity?", answer: "A quantity with magnitude only." },
    { question: "What is a vector quantity?", answer: "A quantity with magnitude and direction." },
    { question: "Give examples of scalar quantities.", answer: "Speed, distance, mass, time, energy." },
    { question: "Give examples of vector quantities.", answer: "Velocity, force, displacement, acceleration, weight." },

    { question: "What is speed?", answer: "Distance travelled per unit time." },
    { question: "What is velocity?", answer: "Speed in a given direction." },
    { question: "What is acceleration?", answer: "Change in velocity per unit time." },
    { question: "What does deceleration mean?", answer: "Negative acceleration / slowing down." },

    { question: "What is the equation for speed?", answer: "speed = distance ÷ time" },
    { question: "What is the equation for acceleration?", answer: "acceleration = change in velocity ÷ time" },
    { question: "What is the equation linking force, mass and acceleration?", answer: "force = mass × acceleration" },

    { question: "What is Newton's First Law?", answer: "An object remains at rest or moving at constant velocity unless acted on by a resultant force." },
    { question: "What is Newton's Second Law?", answer: "The resultant force causes acceleration proportional to force and inversely proportional to mass." },

    { question: "What is inertia?", answer: "The tendency of an object to resist changes in its motion." },
    { question: "How does mass affect inertia?", answer: "The greater the mass, the greater the inertia." },

    { question: "What is a resultant force?", answer: "The overall force acting on an object after all forces are combined." },
    { question: "What happens if forces are balanced?", answer: "Resultant force is zero, so no change in motion." },
    { question: "What happens if forces are unbalanced?", answer: "There is a non-zero resultant force, so motion changes." },

    { question: "What is friction?", answer: "A force that opposes motion between surfaces in contact." },
    { question: "What is air resistance?", answer: "A frictional force that opposes motion through air." },
    { question: "What is drag?", answer: "A resistive force opposing motion through a fluid such as air or water." },

    { question: "What is weight?", answer: "The force acting on an object due to gravity." },
    { question: "What is the equation for weight?", answer: "weight = mass × gravitational field strength" },
    { question: "What is gravitational field strength on Earth?", answer: "About 9.8 N/kg (often rounded to 10 N/kg)." },

    { question: "What is thrust?", answer: "A force that pushes an object forwards." },
    { question: "What is lift?", answer: "An upwards force on an object moving through a fluid." },
    { question: "What is tension?", answer: "A pulling force transmitted through a rope, cable or string." },
    { question: "What is normal contact force?", answer: "The support force exerted by a surface on an object." },

    { question: "What does the gradient of a distance-time graph represent?", answer: "Speed." },
    { question: "What does the gradient of a velocity-time graph represent?", answer: "Acceleration." },
    { question: "What does the area under a velocity-time graph represent?", answer: "Displacement." },

    { question: "What does a flat line on a distance-time graph mean?", answer: "The object is stationary." },
    { question: "What does a straight sloping line on a distance-time graph mean?", answer: "Constant speed." },
    { question: "What does a steeper line on a distance-time graph mean?", answer: "Greater speed." },

    { question: "What does a flat line on a velocity-time graph mean?", answer: "Constant velocity." },
    { question: "What does an upward slope on a velocity-time graph mean?", answer: "Acceleration." },
    { question: "What does a downward slope on a velocity-time graph mean?", answer: "Deceleration." },

    { question: "What is an independent variable?", answer: "The variable you change." },
    { question: "What is a dependent variable?", answer: "The variable you measure." },
    { question: "What is a control variable?", answer: "A variable kept the same to make the test fair." },

    { question: "Why are control variables important?", answer: "They make the investigation valid and fair." },
    { question: "Why repeat measurements?", answer: "To improve reliability and identify anomalies." }
  ],

  shortQuestions: [
    { question: "Is speed scalar or vector?", answer: "Scalar" },
    { question: "Is velocity scalar or vector?", answer: "Vector" },
    { question: "Is force scalar or vector?", answer: "Vector" },
    { question: "Is mass scalar or vector?", answer: "Scalar" },

    { question: "What is the resultant force if 10 N acts right and 6 N acts left?", answer: "4 N to the right" },
    { question: "What is the resultant force if forces are equal and opposite?", answer: "0 N" },

    { question: "What happens to motion when resultant force is zero?", answer: "It stays at rest or moves at constant velocity" },
    { question: "What happens when resultant force is not zero?", answer: "The object accelerates" },

    { question: "What is the unit of force?", answer: "Newton (N)" },
    { question: "What is the unit of acceleration?", answer: "m/s²" },
    { question: "What is the unit of velocity?", answer: "m/s" },

    { question: "What force opposes motion between surfaces?", answer: "Friction" },
    { question: "What force opposes a falling skydiver?", answer: "Air resistance" },
    { question: "What force pulls objects toward Earth?", answer: "Weight / gravity" },

    { question: "What is the acceleration of a 2 kg object acted on by a 10 N resultant force?", answer: "5 m/s²" },
    { question: "What is the force needed to accelerate a 3 kg mass at 4 m/s²?", answer: "12 N" },

    { question: "What does the slope of a velocity-time graph show?", answer: "Acceleration" },
    { question: "What does the area under a velocity-time graph show?", answer: "Displacement" },

    { question: "In an experiment, which variable do you change?", answer: "Independent variable" },
    { question: "In an experiment, which variable do you measure?", answer: "Dependent variable" },
    { question: "Which variables must stay the same?", answer: "Control variables" }
  ],

  examQuestions: [
    {
      question: "Explain the difference between scalar and vector quantities and give two examples of each.",
      marks: 4,
      markScheme: [
        "Scalar has magnitude only",
        "Vector has magnitude and direction",
        "Examples of scalar such as speed and mass",
        "Examples of vector such as velocity and force"
      ]
    },
    {
      question: "A car increases its velocity from 6 m/s to 18 m/s in 4 s. Calculate its acceleration.",
      marks: 3,
      markScheme: [
        "Use acceleration = change in velocity ÷ time",
        "(18 - 6) ÷ 4",
        "Answer = 3 m/s²"
      ]
    },
    {
      question: "State Newton's First Law and explain how it links to inertia.",
      marks: 4,
      markScheme: [
        "Object remains at rest or constant velocity unless acted on by resultant force",
        "Inertia is resistance to change in motion",
        "More mass means more inertia",
        "So more force is needed to change motion"
      ]
    },
    {
      question: "A resultant force of 15 N acts on a 3 kg object. Calculate its acceleration.",
      marks: 3,
      markScheme: [
        "Use F = ma",
        "a = F ÷ m = 15 ÷ 3",
        "Answer = 5 m/s²"
      ]
    },
    {
      question: "Describe the difference between balanced and unbalanced forces.",
      marks: 4,
      markScheme: [
        "Balanced forces are equal and opposite",
        "Resultant force is zero",
        "Unbalanced forces give a non-zero resultant force",
        "This causes a change in motion / acceleration"
      ]
    },
    {
      question: "A cyclist moves at constant velocity. Explain what this tells you about the forces acting.",
      marks: 3,
      markScheme: [
        "Resultant force is zero",
        "Forces are balanced",
        "Driving force equals resistive forces"
      ]
    },
    {
      question: "A student draws a velocity-time graph for a moving object. Explain what the gradient and the area under the graph represent.",
      marks: 4,
      markScheme: [
        "Gradient represents acceleration",
        "Steeper gradient means greater acceleration",
        "Area under graph represents displacement",
        "Can be used to calculate distance in a straight line with direction considered"
      ]
    },
    {
      question: "Explain what friction is and describe one advantage and one disadvantage of friction.",
      marks: 4,
      markScheme: [
        "Friction is a force opposing motion between surfaces",
        "Advantage example: grip for walking or braking",
        "Disadvantage example: causes wear",
        "Disadvantage example: transfers energy as heat"
      ]
    },
    {
      question: "A box is pushed with 30 N to the right. Friction acts with 12 N to the left. Calculate the resultant force and state the direction.",
      marks: 3,
      markScheme: [
        "Resultant force = 30 - 12",
        "Answer = 18 N",
        "Direction = to the right"
      ]
    },
    {
      question: "A student investigates how the force applied to a trolley affects its acceleration. Identify the independent, dependent and two control variables.",
      marks: 4,
      markScheme: [
        "Independent variable = force applied",
        "Dependent variable = acceleration",
        "Control variable example: mass of trolley",
        "Control variable example: surface / ramp angle / method of measurement kept same"
      ]
    }
  ]
};