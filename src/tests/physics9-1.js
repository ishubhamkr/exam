// Add new tests by copying this file, renaming it, and changing the metadata/questions.
// The filename becomes the URL, e.g. physics9-1.js -> /test/physics9-1.html

const questions = [
  // EASY — 15 × 2 marks
  {
    chapter: "Measurement", difficulty: "Easy", marks: 2,
    question: "A metre scale has 10 equal subdivisions between two consecutive centimetre marks. Its least count is:",
    options: ["1 cm", "0.1 cm", "0.01 cm", "10 cm"], correctAnswer: 1,
    explanation: "1 cm divided into 10 equal parts gives 0.1 cm = 1 mm as the least count."
  },
  {
    chapter: "Measurement", difficulty: "Easy", marks: 2,
    question: "Which of the following is the SI unit of density?",
    options: ["kg m⁻³", "g cm⁻²", "N m⁻²", "kg m⁻²"], correctAnswer: 0,
    explanation: "Density = mass/volume, so its SI unit is kg/m³."
  },
  {
    chapter: "Motion", difficulty: "Easy", marks: 2,
    question: "A cyclist covers 150 m in 30 s at uniform speed. The speed is:",
    options: ["3 m/s", "5 m/s", "15 m/s", "45 m/s"], correctAnswer: 1,
    explanation: "Speed = distance/time = 150/30 = 5 m/s."
  },
  {
    chapter: "Motion", difficulty: "Easy", marks: 2,
    question: "The velocity of a body changes uniformly from 5 m/s to 17 m/s in 4 s. Its acceleration is:",
    options: ["2 m/s²", "3 m/s²", "4 m/s²", "5.5 m/s²"], correctAnswer: 1,
    explanation: "a = (v − u)/t = (17 − 5)/4 = 3 m/s²."
  },
  {
    chapter: "Motion", difficulty: "Easy", marks: 2,
    question: "A car moves at a constant speed of 12 m/s for 25 s. How far does it travel?",
    options: ["37 m", "120 m", "300 m", "625 m"], correctAnswer: 2,
    explanation: "Distance = speed × time = 12 × 25 = 300 m."
  },
  {
    chapter: "Force & Newton's Laws", difficulty: "Easy", marks: 2,
    question: "Which object has the greatest inertia?",
    options: ["A 0.5 kg football", "A 2 kg school bag", "A 50 kg student", "A 1000 kg parked car"], correctAnswer: 3,
    explanation: "Inertia increases with mass. The 1000 kg car has the greatest inertia."
  },
  {
    chapter: "Force & Newton's Laws", difficulty: "Easy", marks: 2,
    question: "A net force produces an acceleration of 3 m/s² in a 2 kg body. The force is:",
    options: ["1.5 N", "5 N", "6 N", "9 N"], correctAnswer: 2,
    explanation: "From F = ma, F = 2 × 3 = 6 N."
  },
  {
    chapter: "Force & Newton's Laws", difficulty: "Easy", marks: 2,
    question: "The momentum of a 5 kg object moving at 4 m/s is:",
    options: ["1.25 kg·m/s", "9 kg·m/s", "20 kg·m/s", "25 kg·m/s"], correctAnswer: 2,
    explanation: "Momentum p = mv = 5 × 4 = 20 kg·m/s."
  },
  {
    chapter: "Gravitation", difficulty: "Easy", marks: 2,
    question: "The weight of a 6 kg body on Earth, taking g = 10 m/s², is:",
    options: ["0.6 N", "6 N", "60 N", "600 N"], correctAnswer: 2,
    explanation: "Weight W = mg = 6 × 10 = 60 N."
  },
  {
    chapter: "Gravitation", difficulty: "Easy", marks: 2,
    question: "A stone is dropped from rest. Neglecting air resistance, its speed after 2 s is:",
    options: ["5 m/s", "10 m/s", "20 m/s", "40 m/s"], correctAnswer: 2,
    explanation: "v = u + gt = 0 + 10 × 2 = 20 m/s."
  },
  {
    chapter: "Floating Bodies", difficulty: "Easy", marks: 2,
    question: "A block of density 800 kg/m³ floats in water of density 1000 kg/m³. What fraction of its volume is submerged?",
    options: ["20%", "50%", "80%", "100%"], correctAnswer: 2,
    explanation: "For a floating body, submerged fraction = density of body/density of liquid = 800/1000 = 0.8 = 80%."
  },
  {
    chapter: "Work, Energy & Power", difficulty: "Easy", marks: 2,
    question: "A horizontal force of 20 N moves a box 5 m in the direction of the force. Work done is:",
    options: ["4 J", "25 J", "100 J", "400 J"], correctAnswer: 2,
    explanation: "W = Fs = 20 × 5 = 100 J."
  },
  {
    chapter: "Work, Energy & Power", difficulty: "Easy", marks: 2,
    question: "The kinetic energy of a 2 kg object moving at 3 m/s is:",
    options: ["3 J", "6 J", "9 J", "18 J"], correctAnswer: 2,
    explanation: "K = ½mv² = ½ × 2 × 3² = 9 J."
  },
  {
    chapter: "Sound", difficulty: "Easy", marks: 2,
    question: "A tuning fork vibrates at 250 Hz. Its time period is:",
    options: ["0.004 s", "0.04 s", "0.25 s", "4 s"], correctAnswer: 0,
    explanation: "T = 1/f = 1/250 = 0.004 s."
  },
  {
    chapter: "Sound", difficulty: "Easy", marks: 2,
    question: "A sound wave has wavelength 0.68 m and speed 340 m/s. Its frequency is:",
    options: ["50 Hz", "200 Hz", "500 Hz", "680 Hz"], correctAnswer: 2,
    explanation: "f = v/λ = 340/0.68 = 500 Hz."
  },

  // HARD — 20 × 4 marks
  {
    chapter: "Measurement", difficulty: "Hard", marks: 4,
    question: "A screw gauge has pitch 1 mm and 100 divisions on its circular scale. For an object, the main-scale reading is 4.5 mm and the circular-scale coincidence is 28. Ignoring zero error, the measured thickness is:",
    options: ["4.28 mm", "4.50 mm", "4.78 mm", "7.30 mm"], correctAnswer: 2,
    explanation: "Least count = 1/100 = 0.01 mm. Reading = 4.5 + 28×0.01 = 4.78 mm."
  },
  {
    chapter: "Motion", difficulty: "Hard", marks: 4,
    question: "A car covers 30 km at 30 km/h and the next 30 km at 60 km/h. Its average speed for the whole journey is:",
    options: ["40 km/h", "45 km/h", "48 km/h", "50 km/h"], correctAnswer: 0,
    explanation: "Total distance = 60 km. Total time = 30/30 + 30/60 = 1.5 h. Average speed = 60/1.5 = 40 km/h."
  },
  {
    chapter: "Motion", difficulty: "Hard", marks: 4,
    question: "A body starts from rest, reaches 20 m/s uniformly in 5 s, then continues at 20 m/s for another 5 s. The total distance travelled in 10 s is:",
    options: ["100 m", "125 m", "150 m", "200 m"], correctAnswer: 2,
    explanation: "Distance is area under the velocity-time graph: ½×5×20 + 5×20 = 50 + 100 = 150 m."
  },
  {
    chapter: "Motion", difficulty: "Hard", marks: 4,
    question: "Two runners move in the same direction at constant speeds of 8 m/s and 5 m/s. The faster runner is initially 60 m behind. After how long will the faster runner catch the slower one?",
    options: ["10 s", "20 s", "30 s", "60 s"], correctAnswer: 1,
    explanation: "Relative speed = 8 − 5 = 3 m/s. Catch-up time = 60/3 = 20 s."
  },
  {
    chapter: "Motion", difficulty: "Hard", marks: 4,
    question: "A ball is thrown vertically upward with speed 20 m/s. Neglect air resistance. The total time after which it returns to the point of projection is:",
    options: ["2 s", "3 s", "4 s", "5 s"], correctAnswer: 2,
    explanation: "Time to rise = u/g = 20/10 = 2 s. Total time = 4 s."
  },
  {
    chapter: "Force & Newton's Laws", difficulty: "Hard", marks: 4,
    question: "A 2 kg body changes its velocity from 5 m/s to 15 m/s in 4 s under a constant net force. The force is:",
    options: ["2.5 N", "5 N", "10 N", "20 N"], correctAnswer: 1,
    explanation: "a = (15−5)/4 = 2.5 m/s², so F = 2×2.5 = 5 N."
  },
  {
    chapter: "Force & Newton's Laws", difficulty: "Hard", marks: 4,
    question: "A swimmer moves forward by pushing water backward. The best explanation is:",
    options: ["Newton's first law only", "Newton's second law only", "Newton's third law", "Law of gravitation"], correctAnswer: 2,
    explanation: "The swimmer pushes water backward; water exerts an equal and opposite force on the swimmer, propelling the swimmer forward."
  },
  {
    chapter: "Force & Newton's Laws", difficulty: "Hard", marks: 4,
    question: "A 1000 kg car moving at 20 m/s is brought uniformly to rest in 50 m. The magnitude of the braking force is:",
    options: ["2000 N", "4000 N", "8000 N", "10000 N"], correctAnswer: 1,
    explanation: "Using v² = u² + 2as: 0 = 400 + 100a, so a = −4 m/s². Force magnitude = 1000×4 = 4000 N."
  },
  {
    chapter: "Force & Newton's Laws", difficulty: "Hard", marks: 4,
    question: "Two blocks of 2 kg and 3 kg are in contact on a smooth horizontal surface. A 20 N force pushes the 2 kg block toward the 3 kg block. The contact force on the 3 kg block is:",
    options: ["8 N", "10 N", "12 N", "20 N"], correctAnswer: 2,
    explanation: "System acceleration = 20/(2+3) = 4 m/s². The only horizontal force accelerating the 3 kg block is the contact force: 3×4 = 12 N."
  },
  {
    chapter: "Gravitation", difficulty: "Hard", marks: 4,
    question: "An object has weight W at Earth's surface. At a height equal to Earth's radius above the surface, its weight (ideal inverse-square model) becomes:",
    options: ["W/2", "W/4", "W/8", "W/16"], correctAnswer: 1,
    explanation: "Distance from Earth's centre changes from R to 2R. Gravitational force varies as 1/r², so weight becomes W/4."
  },
  {
    chapter: "Gravitation", difficulty: "Hard", marks: 4,
    question: "A 12 kg object is taken from Earth to the Moon, where gravitational acceleration is about one-sixth of Earth's. Which statement is correct?",
    options: ["Mass becomes 2 kg and weight remains same", "Mass remains 12 kg and weight becomes one-sixth", "Both mass and weight become one-sixth", "Both remain unchanged"], correctAnswer: 1,
    explanation: "Mass is intrinsic and remains 12 kg. Weight = mg, so it becomes one-sixth on the Moon."
  },
  {
    chapter: "Gravitation", difficulty: "Hard", marks: 4,
    question: "A stone is dropped from a height of 45 m. Ignoring air resistance, the time taken to reach the ground is:",
    options: ["2 s", "3 s", "4.5 s", "9 s"], correctAnswer: 1,
    explanation: "s = ½gt² ⇒ 45 = 5t² ⇒ t² = 9 ⇒ t = 3 s."
  },
  {
    chapter: "Floating Bodies", difficulty: "Hard", marks: 4,
    question: "A 2 kg solid of volume 1.5 × 10⁻³ m³ is fully submerged in water. Its apparent weight is:",
    options: ["5 N", "10 N", "15 N", "20 N"], correctAnswer: 0,
    explanation: "True weight = 20 N. Buoyant force = ρVg = 1000×1.5×10⁻³×10 = 15 N. Apparent weight = 20−15 = 5 N."
  },
  {
    chapter: "Floating Bodies", difficulty: "Hard", marks: 4,
    question: "A body floats with three-fourths of its volume immersed in a liquid of density 1000 kg/m³. The density of the body is:",
    options: ["250 kg/m³", "750 kg/m³", "1000 kg/m³", "1333 kg/m³"], correctAnswer: 1,
    explanation: "For floating equilibrium, density of body = immersed fraction × density of liquid = ¾×1000 = 750 kg/m³."
  },
  {
    chapter: "Work, Energy & Power", difficulty: "Hard", marks: 4,
    question: "A force of 50 N acts on an object through a displacement of 4 m. The angle between force and displacement is 60°. Work done by the force is:",
    options: ["50 J", "100 J", "150 J", "200 J"], correctAnswer: 1,
    explanation: "W = Fs cosθ = 50×4×cos60° = 200×½ = 100 J."
  },
  {
    chapter: "Work, Energy & Power", difficulty: "Hard", marks: 4,
    question: "A machine lifts a 200 kg load vertically through 10 m in 5 s. Its useful power output is:",
    options: ["400 W", "1000 W", "2000 W", "4000 W"], correctAnswer: 3,
    explanation: "Work = mgh = 200×10×10 = 20000 J. Power = 20000/5 = 4000 W."
  },
  {
    chapter: "Work, Energy & Power", difficulty: "Hard", marks: 4,
    question: "A 2 kg body is dropped from rest from a height of 20 m. Ignoring air resistance, its kinetic energy when it is 5 m above the ground is:",
    options: ["100 J", "200 J", "300 J", "400 J"], correctAnswer: 2,
    explanation: "It has fallen 15 m. Loss in potential energy = mgΔh = 2×10×15 = 300 J, equal to the gained kinetic energy."
  },
  {
    chapter: "Work, Energy & Power", difficulty: "Hard", marks: 4,
    question: "The speed of a 1 kg body increases from 10 m/s to 20 m/s. The net work done on it is:",
    options: ["50 J", "100 J", "150 J", "200 J"], correctAnswer: 2,
    explanation: "Net work = change in kinetic energy = ½×1×(20²−10²) = ½×300 = 150 J."
  },
  {
    chapter: "Sound", difficulty: "Hard", marks: 4,
    question: "A student hears an echo 0.60 s after shouting toward a large wall. The distance of the wall from the student is:",
    options: ["51 m", "102 m", "170 m", "204 m"], correctAnswer: 1,
    explanation: "The sound makes a round trip. Distance to wall = vt/2 = 340×0.60/2 = 102 m."
  },
  {
    chapter: "Sound", difficulty: "Hard", marks: 4,
    question: "A sound wave of frequency 680 Hz travels through air at 340 m/s. The separation between two consecutive compressions is:",
    options: ["0.25 m", "0.50 m", "1.0 m", "2.0 m"], correctAnswer: 1,
    explanation: "Consecutive compressions are one wavelength apart. λ = v/f = 340/680 = 0.50 m."
  },

  // SUPER HARD — 10 × 5 marks
  {
    chapter: "Measurement", difficulty: "Super Hard", marks: 5,
    question: "The radius of a sphere is measured with a maximum percentage error of 2%. Ignoring all other errors, the maximum percentage error in the calculated volume of the sphere is approximately:",
    options: ["2%", "4%", "6%", "8%"], correctAnswer: 2,
    explanation: "For V ∝ r³, the fractional/percentage error in V is approximately 3 times that in r: 3×2% = 6%."
  },
  {
    chapter: "Motion", difficulty: "Super Hard", marks: 5,
    question: "Car A starts from rest with constant acceleration 2 m/s². At the same instant, Car B is 12 m ahead and moves in the same direction at a constant 4 m/s. When does A catch B?",
    options: ["3 s", "4 s", "6 s", "8 s"], correctAnswer: 2,
    explanation: "For A: xA = ½at² = t². For B: xB = 12 + 4t. Setting equal gives t² − 4t − 12 = 0 ⇒ (t−6)(t+2)=0, so t = 6 s."
  },
  {
    chapter: "Force & Newton's Laws", difficulty: "Super Hard", marks: 5,
    question: "A 60 kg student stands on a weighing scale in a lift accelerating upward at 2 m/s². What reading (normal force) does the scale show?",
    options: ["480 N", "600 N", "720 N", "840 N"], correctAnswer: 2,
    explanation: "For upward acceleration, N − mg = ma. Thus N = m(g+a) = 60(10+2) = 720 N."
  },
  {
    chapter: "Force & Newton's Laws", difficulty: "Super Hard", marks: 5,
    question: "A 0.15 kg ball moving east at 20 m/s is hit and rebounds west at 10 m/s. If contact lasts 0.05 s, the magnitude of the average force on the ball is:",
    options: ["30 N", "60 N", "90 N", "120 N"], correctAnswer: 2,
    explanation: "Take east positive: Δp = m(v−u) = 0.15(−10−20) = −4.5 kg·m/s. Average force magnitude = |Δp|/Δt = 4.5/0.05 = 90 N."
  },
  {
    chapter: "Gravitation", difficulty: "Super Hard", marks: 5,
    question: "Planet P has the same average density as Earth but twice Earth's radius. Ignoring rotation, the surface gravitational acceleration on P is:",
    options: ["g/2", "g", "2g", "4g"], correctAnswer: 2,
    explanation: "For equal density, M ∝ R³. Surface g = GM/R² ∝ R, so doubling radius doubles surface g."
  },
  {
    chapter: "Floating Bodies", difficulty: "Super Hard", marks: 5,
    question: "A 6 kg block of density 600 kg/m³ floats in water. What minimum downward force is needed to keep it just completely submerged and at rest?",
    options: ["20 N", "40 N", "60 N", "100 N"], correctAnswer: 1,
    explanation: "Volume = m/ρ = 6/600 = 0.01 m³. Fully submerged buoyant force = 1000×0.01×10 = 100 N. Weight = 60 N, so 40 N downward is needed for equilibrium."
  },
  {
    chapter: "Floating Bodies", difficulty: "Super Hard", marks: 5,
    question: "A uniform body of density 800 kg/m³ floats at the interface of water (1000 kg/m³) and another immiscible liquid, with exactly half its volume in each liquid. The density of the second liquid is:",
    options: ["400 kg/m³", "600 kg/m³", "800 kg/m³", "1000 kg/m³"], correctAnswer: 1,
    explanation: "Buoyancy = weight: (½ρwater + ½ρ₂)Vg = 800Vg. Thus (1000 + ρ₂)/2 = 800, giving ρ₂ = 600 kg/m³."
  },
  {
    chapter: "Work, Energy & Power", difficulty: "Super Hard", marks: 5,
    question: "A pump raises 500 kg of water every minute through a vertical height of 12 m. If the pump is 75% efficient, its required input power is closest to:",
    options: ["750 W", "1000 W", "1333 W", "1600 W"], correctAnswer: 2,
    explanation: "Useful power = mgh/t = 500×10×12/60 = 1000 W. Input power = 1000/0.75 ≈ 1333 W."
  },
  {
    chapter: "Sound", difficulty: "Super Hard", marks: 5,
    question: "A person stands between two parallel cliffs and hears the first echoes from them 1.0 s and 1.4 s after a shout. Assuming each time is for one round trip, the distance between the cliffs is:",
    options: ["238 m", "340 m", "408 m", "476 m"], correctAnswer: 2,
    explanation: "Distances to the cliffs are 340×1.0/2 = 170 m and 340×1.4/2 = 238 m. Separation = 170 + 238 = 408 m."
  },
  {
    chapter: "Gravitation", difficulty: "Super Hard", marks: 5,
    question: "A ball is thrown vertically upward from the top of a 20 m high building with speed 20 m/s. Ignoring air resistance, its speed just before hitting the ground is:",
    options: ["20 m/s", "20√2 m/s", "30 m/s", "40 m/s"], correctAnswer: 1,
    explanation: "Using v² = u² + 2g(20) for the net 20 m drop from launch point to ground: v² = 400 + 400 = 800, so v = 20√2 m/s."
  }
];

export default {
  title: "Class IX Physics — IIT Foundation Challenge",
  shortTitle: "Physics IX Test 1",
  subject: "Physics",
  className: "Class IX",
  testNumber: 1,
  durationMinutes: 180,
  negativeFraction: 0.25,
  description: "45-question competitive Physics practice test progressing from fundamentals to multi-step IIT-foundation-style problems.",
  instructions: [
    "The paper contains 45 single-correct multiple-choice questions.",
    "Easy questions carry 2 marks, Hard questions carry 4 marks, and Super Hard questions carry 5 marks.",
    "For every wrong answer, 1/4 of that question's marks will be deducted.",
    "Unattempted questions carry 0 marks.",
    "You may mark questions for review and return to them before submitting.",
    "The test is automatically submitted when the 3-hour timer reaches zero."
  ],
  questions
};
