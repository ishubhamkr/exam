const questions = [
  // ============================================================
  // EASY — 15 Questions × 2 Marks = 30 Marks
  // ============================================================

  {
    chapter: "Number System",
    difficulty: "Easy",
    marks: 2,
    question: "Which of the following numbers is irrational?",
    options: [
      "0.125",
      "√2",
      "7/9",
      "0.333..."
    ],
    correctAnswer: 1,
    explanation:
      "√2 is irrational. The other three numbers can be expressed in the form p/q."
  },

  {
    chapter: "Number System",
    difficulty: "Easy",
    marks: 2,
    question: "If x = 3 + √5, then x - 3 is equal to:",
    options: [
      "√5",
      "5",
      "3√5",
      "1/√5"
    ],
    correctAnswer: 0,
    explanation:
      "Subtracting 3 from both sides gives x - 3 = √5."
  },

  {
    chapter: "Exponents",
    difficulty: "Easy",
    marks: 2,
    question: "Simplify: 2³ × 2⁵",
    options: [
      "2⁸",
      "4⁸",
      "2¹⁵",
      "2²"
    ],
    correctAnswer: 0,
    explanation:
      "When multiplying powers having the same base, add the exponents. Therefore 2³ × 2⁵ = 2⁸."
  },

  {
    chapter: "Algebraic Identities",
    difficulty: "Easy",
    marks: 2,
    question: "Which of the following identities is correct?",
    options: [
      "(a + b)² = a² + b²",
      "(a + b)² = a² + 2ab + b²",
      "(a - b)² = a² - b²",
      "a² - b² = (a - b)²"
    ],
    correctAnswer: 1,
    explanation:
      "The standard identity is (a + b)² = a² + 2ab + b²."
  },

  {
    chapter: "Polynomials",
    difficulty: "Easy",
    marks: 2,
    question: "What is the degree of the polynomial 7x⁴ - 3x² + 5?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: 2,
    explanation:
      "The highest exponent of x is 4. Therefore, the degree is 4."
  },

  {
    chapter: "Linear Equations",
    difficulty: "Easy",
    marks: 2,
    question: "Which ordered pair satisfies the equation 2x + y = 7?",
    options: [
      "(1, 5)",
      "(2, 2)",
      "(3, 2)",
      "(4, 1)"
    ],
    correctAnswer: 0,
    explanation:
      "For (1,5), 2(1) + 5 = 7. Hence (1,5) satisfies the equation."
  },

  {
    chapter: "Coordinate Geometry",
    difficulty: "Easy",
    marks: 2,
    question: "The point (0, -5) lies on:",
    options: [
      "x-axis",
      "y-axis",
      "the origin",
      "first quadrant"
    ],
    correctAnswer: 1,
    explanation:
      "Any point whose x-coordinate is zero lies on the y-axis."
  },

  {
    chapter: "Lines and Angles",
    difficulty: "Easy",
    marks: 2,
    question: "The sum of two supplementary angles is:",
    options: [
      "90°",
      "120°",
      "180°",
      "360°"
    ],
    correctAnswer: 2,
    explanation:
      "By definition, supplementary angles have a sum of 180°."
  },

  {
    chapter: "Triangles",
    difficulty: "Easy",
    marks: 2,
    question: "The sum of the three interior angles of a triangle is:",
    options: [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    correctAnswer: 1,
    explanation:
      "According to the angle-sum property of a triangle, the three interior angles add up to 180°."
  },

  {
    chapter: "Quadrilaterals",
    difficulty: "Easy",
    marks: 2,
    question: "The diagonals of a parallelogram:",
    options: [
      "are always equal",
      "bisect each other",
      "are always perpendicular",
      "never intersect"
    ],
    correctAnswer: 1,
    explanation:
      "A fundamental property of a parallelogram is that its diagonals bisect each other."
  },

  {
    chapter: "Circles",
    difficulty: "Easy",
    marks: 2,
    question: "A chord of a circle that passes through its centre is called:",
    options: [
      "Radius",
      "Arc",
      "Diameter",
      "Secant"
    ],
    correctAnswer: 2,
    explanation:
      "A chord passing through the centre of a circle is its diameter."
  },

  {
    chapter: "Heron's Formula",
    difficulty: "Easy",
    marks: 2,
    question:
      "For a triangle whose sides are a, b and c, its semi-perimeter s is:",
    options: [
      "a + b + c",
      "(a + b + c) / 2",
      "ab + bc + ca",
      "abc / 2"
    ],
    correctAnswer: 1,
    explanation:
      "The semi-perimeter is half the perimeter, so s = (a + b + c)/2."
  },

  {
    chapter: "Surface Areas and Volumes",
    difficulty: "Easy",
    marks: 2,
    question: "The volume of a cube having side a is:",
    options: [
      "a²",
      "4a²",
      "a³",
      "6a²"
    ],
    correctAnswer: 2,
    explanation:
      "Volume of a cube = side × side × side = a³."
  },

  {
    chapter: "Statistics",
    difficulty: "Easy",
    marks: 2,
    question: "The arithmetic mean of 3, 5 and 7 is:",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    correctAnswer: 1,
    explanation:
      "Mean = (3 + 5 + 7)/3 = 15/3 = 5."
  },

  {
    chapter: "Probability",
    difficulty: "Easy",
    marks: 2,
    question:
      "A fair coin is tossed once. What is the probability of getting a head?",
    options: [
      "0",
      "1/4",
      "1/2",
      "1"
    ],
    correctAnswer: 2,
    explanation:
      "There are two equally likely outcomes, H and T. One is favourable, so P(H) = 1/2."
  },

  // ============================================================
  // HARD — 20 Questions × 4 Marks = 80 Marks
  // ============================================================

  {
    chapter: "Number System",
    difficulty: "Hard",
    marks: 4,
    question: "Simplify: 1 / (√5 - 2)",
    options: [
      "√5 + 2",
      "√5 - 2",
      "(√5 + 2) / 9",
      "1 / (√5 + 2)"
    ],
    correctAnswer: 0,
    explanation:
      "Rationalising the denominator gives (√5 + 2)/(5 - 4) = √5 + 2."
  },

  {
    chapter: "Exponents",
    difficulty: "Hard",
    marks: 4,
    question: "If 3ˣ = 27√3, then the value of x is:",
    options: [
      "3",
      "7/2",
      "4",
      "9/2"
    ],
    correctAnswer: 1,
    explanation:
      "27√3 = 3³ × 3^(1/2) = 3^(7/2). Therefore x = 7/2."
  },

  {
    chapter: "Algebraic Identities",
    difficulty: "Hard",
    marks: 4,
    question:
      "If a + b = 10 and ab = 21, then the value of a² + b² is:",
    options: [
      "42",
      "58",
      "79",
      "100"
    ],
    correctAnswer: 1,
    explanation:
      "a² + b² = (a + b)² - 2ab = 100 - 42 = 58."
  },

  {
    chapter: "Factorisation",
    difficulty: "Hard",
    marks: 4,
    question: "Factorise: x² - 7x + 12",
    options: [
      "(x - 3)(x - 4)",
      "(x + 3)(x + 4)",
      "(x - 2)(x - 6)",
      "(x + 2)(x - 6)"
    ],
    correctAnswer: 0,
    explanation:
      "We need two numbers whose product is 12 and whose sum is -7. They are -3 and -4."
  },

  {
    chapter: "Polynomials",
    difficulty: "Hard",
    marks: 4,
    question:
      "If p(x) = x² - 5x + k and x = 2 is a zero of p(x), then k equals:",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correctAnswer: 2,
    explanation:
      "Since p(2)=0, 4 - 10 + k = 0. Therefore k = 6."
  },

  {
    chapter: "Linear Equations",
    difficulty: "Hard",
    marks: 4,
    question: "Which point lies on the line 3x - 2y = 4?",
    options: [
      "(2, 1)",
      "(4, 4)",
      "(0, -2)",
      "(1, 1)"
    ],
    correctAnswer: 0,
    explanation:
      "For (2,1), 3(2) - 2(1) = 6 - 2 = 4."
  },

  {
    chapter: "Coordinate Geometry",
    difficulty: "Hard",
    marks: 4,
    question:
      "A point is 4 units to the left of the y-axis and 3 units above the x-axis. Its coordinates are:",
    options: [
      "(4, 3)",
      "(-4, 3)",
      "(4, -3)",
      "(-4, -3)"
    ],
    correctAnswer: 1,
    explanation:
      "Left of the y-axis gives a negative x-coordinate and above the x-axis gives a positive y-coordinate."
  },

  {
    chapter: "Lines and Angles",
    difficulty: "Hard",
    marks: 4,
    question:
      "Two parallel lines are cut by a transversal. If one interior angle is 68°, its alternate interior angle is:",
    options: [
      "22°",
      "68°",
      "112°",
      "136°"
    ],
    correctAnswer: 1,
    explanation:
      "Alternate interior angles formed by a transversal with parallel lines are equal."
  },

  {
    chapter: "Triangles",
    difficulty: "Hard",
    marks: 4,
    question:
      "In ΔABC, ∠A = 50° and ∠B = 60°. What is the exterior angle at C?",
    options: [
      "70°",
      "100°",
      "110°",
      "120°"
    ],
    correctAnswer: 2,
    explanation:
      "An exterior angle equals the sum of the two opposite interior angles. Therefore 50° + 60° = 110°."
  },

  {
    chapter: "Congruence of Triangles",
    difficulty: "Hard",
    marks: 4,
    question:
      "Which of the following is NOT generally a criterion for congruence of two triangles?",
    options: [
      "SSS",
      "SAS",
      "AAA",
      "RHS"
    ],
    correctAnswer: 2,
    explanation:
      "AAA establishes similarity, not congruence. Triangles can have the same angles but different sizes."
  },

  {
    chapter: "Quadrilaterals",
    difficulty: "Hard",
    marks: 4,
    question:
      "One angle of a parallelogram is 72°. What is the measure of an adjacent angle?",
    options: [
      "72°",
      "98°",
      "108°",
      "144°"
    ],
    correctAnswer: 2,
    explanation:
      "Adjacent angles of a parallelogram are supplementary. Therefore 180° - 72° = 108°."
  },

  {
    chapter: "Areas of Parallelograms and Triangles",
    difficulty: "Hard",
    marks: 4,
    question:
      "Two triangles standing on the same base and lying between the same parallel lines have:",
    options: [
      "equal perimeters",
      "equal areas",
      "equal corresponding sides",
      "equal angles"
    ],
    correctAnswer: 1,
    explanation:
      "Triangles on the same base and between the same parallels have equal areas."
  },

  {
    chapter: "Circles",
    difficulty: "Hard",
    marks: 4,
    question:
      "In the same circle, two equal chords subtend:",
    options: [
      "equal angles at the centre",
      "supplementary angles at the centre",
      "right angles only",
      "unequal arcs in every case"
    ],
    correctAnswer: 0,
    explanation:
      "Equal chords of the same circle subtend equal angles at the centre."
  },

  {
    chapter: "Constructions",
    difficulty: "Hard",
    marks: 4,
    question:
      "While constructing the perpendicular bisector of a line segment AB, the compass radius used from A and B should normally be:",
    options: [
      "less than half of AB",
      "exactly half of AB",
      "greater than half of AB",
      "zero"
    ],
    correctAnswer: 2,
    explanation:
      "The two pairs of arcs must intersect. Therefore the compass radius must be greater than half of AB."
  },

  {
    chapter: "Heron's Formula",
    difficulty: "Hard",
    marks: 4,
    question:
      "What is the area of a triangle whose sides are 5 cm, 12 cm and 13 cm?",
    options: [
      "24 cm²",
      "30 cm²",
      "60 cm²",
      "78 cm²"
    ],
    correctAnswer: 1,
    explanation:
      "The sides form a 5-12-13 right triangle. Area = (1/2) × 5 × 12 = 30 cm²."
  },

  {
    chapter: "Surface Areas and Volumes",
    difficulty: "Hard",
    marks: 4,
    question:
      "A cuboid has dimensions 8 cm × 5 cm × 3 cm. What is its volume?",
    options: [
      "40 cm³",
      "80 cm³",
      "120 cm³",
      "160 cm³"
    ],
    correctAnswer: 2,
    explanation:
      "Volume = length × breadth × height = 8 × 5 × 3 = 120 cm³."
  },

  {
    chapter: "Surface Areas and Volumes",
    difficulty: "Hard",
    marks: 4,
    question:
      "The curved surface area of a cylinder of radius r and height h is:",
    options: [
      "πr²h",
      "2πrh",
      "2πr(r + h)",
      "πr²"
    ],
    correctAnswer: 1,
    explanation:
      "The curved surface area of a cylinder is 2πrh."
  },

  {
    chapter: "Statistics",
    difficulty: "Hard",
    marks: 4,
    question: "What is the median of 3, 7, 9, 11, 15?",
    options: [
      "7",
      "8",
      "9",
      "11"
    ],
    correctAnswer: 2,
    explanation:
      "There are five ordered observations, so the middle or third observation is the median. It is 9."
  },

  {
    chapter: "Statistics",
    difficulty: "Hard",
    marks: 4,
    question:
      "Find the mode of the observations: 2, 3, 4, 4, 4, 5, 5, 6.",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 1,
    explanation:
      "4 occurs three times, more frequently than any other observation."
  },

  {
    chapter: "Probability",
    difficulty: "Hard",
    marks: 4,
    question:
      "A fair die is rolled once. What is the probability of obtaining a prime number?",
    options: [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    correctAnswer: 2,
    explanation:
      "The prime numbers on a die are 2, 3 and 5. Therefore probability = 3/6 = 1/2."
  },

  // ============================================================
  // SUPER HARD — 10 Questions × 5 Marks = 50 Marks
  // ============================================================

  {
    chapter: "Number System",
    difficulty: "Super Hard",
    marks: 5,
    question:
      "If x = √3 + √2, then the value of 1/x is:",
    options: [
      "√3 - √2",
      "√3 + √2",
      "(√3 - √2) / 5",
      "1 / (√3 - √2)"
    ],
    correctAnswer: 0,
    explanation:
      "Rationalising: 1/(√3+√2) = (√3-√2)/(3-2) = √3-√2."
  },

  {
    chapter: "Algebraic Identities",
    difficulty: "Super Hard",
    marks: 5,
    question:
      "If x + 1/x = 3, then the value of x² + 1/x² is:",
    options: [
      "5",
      "7",
      "9",
      "11"
    ],
    correctAnswer: 1,
    explanation:
      "Squaring gives (x + 1/x)² = x² + 2 + 1/x² = 9. Hence x² + 1/x² = 7."
  },

  {
    chapter: "Polynomials",
    difficulty: "Super Hard",
    marks: 5,
    question:
      "If p(x) = x³ - 4x² + x + 6 and p(2) = 0, which expression must be a factor of p(x)?",
    options: [
      "x + 2",
      "x - 2",
      "x - 1",
      "x + 1"
    ],
    correctAnswer: 1,
    explanation:
      "According to the Factor Theorem, if p(2)=0 then (x-2) is a factor of p(x)."
  },

  {
    chapter: "Factorisation",
    difficulty: "Super Hard",
    marks: 5,
    question: "Factorise completely: x⁴ - 16",
    options: [
      "(x - 2)(x + 2)(x² + 4)",
      "(x - 4)(x + 4)",
      "(x² - 4)²",
      "(x - 2)²(x + 2)²"
    ],
    correctAnswer: 0,
    explanation:
      "x⁴ - 16 = (x² - 4)(x² + 4) = (x - 2)(x + 2)(x² + 4)."
  },

  {
    chapter: "Triangles",
    difficulty: "Super Hard",
    marks: 5,
    question:
      "In isosceles ΔABC, AB = AC. The bisector of ∠A meets BC at D. Which statement must be true?",
    options: [
      "BD ≠ DC",
      "AD ⟂ BC and BD = DC",
      "AD = BC",
      "∠B ≠ ∠C"
    ],
    correctAnswer: 1,
    explanation:
      "In an isosceles triangle, the angle bisector drawn from the vertex between the equal sides is also the median and altitude. Hence BD=DC and AD is perpendicular to BC."
  },

  {
    chapter: "Quadrilaterals",
    difficulty: "Super Hard",
    marks: 5,
    question:
      "The diagonals of a rhombus are 10 cm and 24 cm. Find the length of each side of the rhombus.",
    options: [
      "12 cm",
      "13 cm",
      "14 cm",
      "17 cm"
    ],
    correctAnswer: 1,
    explanation:
      "The diagonals of a rhombus bisect each other at right angles. Half-diagonals are 5 cm and 12 cm. Therefore side = √(5²+12²) = √169 = 13 cm."
  },

  {
    chapter: "Circles",
    difficulty: "Super Hard",
    marks: 5,
    question:
      "A chord of a circle is 16 cm long and its perpendicular distance from the centre is 6 cm. What is the radius of the circle?",
    options: [
      "8 cm",
      "10 cm",
      "12 cm",
      "14 cm"
    ],
    correctAnswer: 1,
    explanation:
      "The perpendicular from the centre bisects the chord. Half the chord is 8 cm. Thus r² = 8² + 6² = 100, giving r = 10 cm."
  },

  {
    chapter: "Heron's Formula",
    difficulty: "Super Hard",
    marks: 5,
    question:
      "A triangular field has sides 13 m, 14 m and 15 m. What is its area?",
    options: [
      "72 m²",
      "84 m²",
      "90 m²",
      "96 m²"
    ],
    correctAnswer: 1,
    explanation:
      "Semi-perimeter s = 21. By Heron's formula, area = √[21(21-13)(21-14)(21-15)] = √(21×8×7×6) = √7056 = 84 m²."
  },

  {
    chapter: "Surface Areas and Volumes",
    difficulty: "Super Hard",
    marks: 5,
    question:
      "A cylinder has radius 7 cm and height 10 cm. Using π = 22/7, find its total surface area.",
    options: [
      "616 cm²",
      "704 cm²",
      "748 cm²",
      "770 cm²"
    ],
    correctAnswer: 2,
    explanation:
      "Total surface area = 2πr(r+h) = 2 × (22/7) × 7 × 17 = 748 cm²."
  },

  {
    chapter: "Probability",
    difficulty: "Super Hard",
    marks: 5,
    question:
      "Two fair coins are tossed simultaneously. What is the probability of obtaining at least one head?",
    options: [
      "1/4",
      "1/2",
      "3/4",
      "1"
    ],
    correctAnswer: 2,
    explanation:
      "The equally likely outcomes are HH, HT, TH and TT. Three outcomes contain at least one head. Therefore the probability is 3/4."
  }
];

export default {
  title: "Class IX Mathematics — RD Sharma Foundation Challenge",

  shortTitle: "Maths IX Test 1",

  subject: "Mathematics",

  className: "Class IX",

  testNumber: 1,

  // 3 hours
  durationMinutes: 180,

  // Wrong answer penalty = 1/4 of question marks
  negativeFraction: 0.25,

  description:
    "A 3-hour Class IX Mathematics competitive examination with original questions based on standard Class IX concepts and RD Sharma-level problem solving, progressing from foundation questions to challenging competitive problems.",

  instructions: [
    "The examination contains 45 single-correct multiple-choice questions.",

    "The total duration of the examination is 3 hours (180 minutes).",

    "The maximum score is 160 marks.",

    "There are 15 Easy questions carrying 2 marks each.",

    "There are 20 Hard questions carrying 4 marks each.",

    "There are 10 Super Hard questions carrying 5 marks each.",

    "Only one option is correct for each question.",

    "For every incorrect answer, 1/4 of the marks assigned to that question will be deducted.",

    "Therefore, a wrong Easy answer deducts 0.5 marks.",

    "A wrong Hard answer deducts 1 mark.",

    "A wrong Super Hard answer deducts 1.25 marks.",

    "There is no penalty for an unattempted question.",

    "Students should use rough work carefully and check calculations before submitting.",

    "The examination will be submitted automatically when the timer reaches zero."
  ],

  questions
};
