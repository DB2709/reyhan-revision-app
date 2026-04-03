import type { TopicContent } from "./types";

export const waves: TopicContent = {
  flashcards: [
    { question: "What is a wave?", answer: "A transfer of energy without transfer of matter" },
    { question: "What is a transverse wave?", answer: "Oscillations perpendicular to direction of travel" },
    { question: "What is a longitudinal wave?", answer: "Oscillations parallel to direction of travel" },

    { question: "Examples of transverse waves?", answer: "Light, water waves" },
    { question: "Examples of longitudinal waves?", answer: "Sound waves" },

    { question: "What is wavelength?", answer: "Distance between two identical points on a wave" },
    { question: "What is frequency?", answer: "Number of waves per second (Hz)" },
    { question: "What is amplitude?", answer: "Maximum displacement from rest position" },

    { question: "Wave speed formula?", answer: "speed = frequency × wavelength" },

    { question: "What happens when waves reflect?", answer: "They bounce off a surface" },
    { question: "Angle of incidence equals?", answer: "Angle of reflection" },

    { question: "What is refraction?", answer: "Change in direction of wave when it enters a different medium" },
    { question: "What happens to speed in denser medium?", answer: "Wave slows down" },

    { question: "What is total internal reflection?", answer: "Complete reflection inside a medium" },

    { question: "What is the electromagnetic spectrum?", answer: "Range of electromagnetic waves" },
    { question: "Order of EM spectrum?", answer: "Radio → Microwave → Infrared → Visible → UV → X-ray → Gamma" },

    { question: "Which waves have highest energy?", answer: "Gamma rays" },
    { question: "Which waves used for communication?", answer: "Radio waves" },

    { question: "What is an echo?", answer: "Reflection of sound" },
    { question: "Speed of sound in air?", answer: "340 m/s" }
  ],

  shortQuestions: [
    { question: "What type of wave is light?", answer: "Transverse" },
    { question: "What type of wave is sound?", answer: "Longitudinal" },

    { question: "Define frequency", answer: "Number of waves per second" },
    { question: "Define wavelength", answer: "Distance between peaks" },

    { question: "What happens to light entering glass?", answer: "It slows and refracts" },
    { question: "What is the normal?", answer: "Line perpendicular to surface" },

    { question: "What happens if angle > critical angle?", answer: "Total internal reflection" },

    { question: "Which EM wave used in cooking?", answer: "Microwaves" },
    { question: "Which EM wave causes sunburn?", answer: "UV" },

    { question: "Echo heard after 1.4 s, what does it mean?", answer: "Sound travelled to object and back" },

    { question: "Why divide echo distance by 2?", answer: "Because sound travels there and back" }
  ],

  examQuestions: [
    {
      question: "Describe the difference between transverse and longitudinal waves.",
      marks: 4,
      markScheme: [
        "Transverse oscillations perpendicular",
        "Longitudinal oscillations parallel",
        "Example of transverse (light)",
        "Example of longitudinal (sound)"
      ]
    },
    {
      question: "A wave has frequency 5 Hz and wavelength 2 m. Calculate its speed.",
      marks: 3,
      markScheme: [
        "Use v = f × λ",
        "5 × 2",
        "Answer = 10 m/s"
      ]
    },
    {
      question: "Describe what happens when light passes from air into glass.",
      marks: 4,
      markScheme: [
        "Light slows down",
        "Changes direction",
        "This is refraction",
        "Bends towards normal"
      ]
    },
    {
      question: "Explain what an echo is and how it is formed.",
      marks: 3,
      markScheme: [
        "Sound reflects off surface",
        "Returns to listener",
        "Heard as echo"
      ]
    },
    {
      question: "A student hears an echo 1.4 s after shouting. Calculate the distance to the wall. Speed of sound = 340 m/s.",
      marks: 4,
      markScheme: [
        "Distance = speed × time",
        "340 × 1.4 = 476 m",
        "Divide by 2",
        "Answer = 238 m"
      ]
    },
    {
      question: "State the order of the electromagnetic spectrum.",
      marks: 3,
      markScheme: [
        "Radio",
        "Microwave",
        "Infrared",
        "Visible",
        "UV",
        "X-ray",
        "Gamma"
      ]
    },
    {
      question: "Explain total internal reflection.",
      marks: 3,
      markScheme: [
        "Occurs inside denser medium",
        "Angle greater than critical angle",
        "Wave fully reflected"
      ]
    },
    {
      question: "Describe how to measure wavelength using a ripple tank.",
      marks: 4,
      markScheme: [
        "Use ripple tank",
        "Measure distance over several waves",
        "Divide by number of waves",
        "Gives wavelength"
      ]
    }
  ]
};