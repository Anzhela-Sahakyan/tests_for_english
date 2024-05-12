const vocabularyTests = [
  {
    id: 1,
    name: "Test 1",
    questions: [
      {
        id: 1,
        text: "What do you use to eat soup?",
        choices: [
          { id: "a", text: "Fork" },
          { id: "b", text: "Spoon" },
          { id: "c", text: "Knife" },
          { id: "d", text: "Plate" },
        ],
        correctAnswer: "b",
      },
      {
        id: 2,
        text: "Which item is used for cutting food?",
        choices: [
          { id: "a", text: "Spoon" },
          { id: "b", text: "Fork" },
          { id: "c", text: "Knife" },
          { id: "d", text: "Glass" },
        ],
        correctAnswer: "c",
      },
    ],
  },
  {
    id: 2,
    name: "Test 2",
    questions: [
      {
        id: 1,
        text: "What do you use to drink water?",
        choices: [
          { id: "a", text: "Plate" },
          { id: "b", text: "Bowl" },
          { id: "c", text: "Cup" },
          { id: "d", text: "Glass" },
        ],
        correctAnswer: "d",
      },
      {
        id: 2,
        text: "What do you call the large meal eaten in the evening?",
        choices: [
          { id: "a", text: "Breakfast" },
          { id: "b", text: "Lunch" },
          { id: "c", text: "Dinner" },
          { id: "d", text: "Snack" },
        ],
        correctAnswer: "c",
      },
    ],
  },
  {
    id: 3,
    name: "Test 3",
    questions: [
      {
        id: 1,
        text: "What is the sweet yellow fruit?",
        choices: [
          { id: "a", text: "Tomato" },
          { id: "b", text: "Banana" },
          { id: "c", text: "Strawberry" },
          { id: "d", text: "Blueberry" },
        ],
        correctAnswer: "b",
      },
      {
        id: 2,
        text: "What color is a ripe banana?",
        choices: [
          { id: "a", text: "Red" },
          { id: "b", text: "Yellow" },
          { id: "c", text: "Green" },
          { id: "d", text: "Purple" },
        ],
        correctAnswer: "b",
      },
    ],
  },
];

export default vocabularyTests;
