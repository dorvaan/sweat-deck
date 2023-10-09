const deck = [
  {
    id: 1,
    type: "Workout",
    name: "Cheat Meal",
    difficulty: 3,
    style: "For Time",
    description:
      "1 Mile Run, 25 Thrusters, 25 Pull-ups, 25 Push-ups, 50 Burpees, 1 Mile Run",
  },
  {
    id: 2,
    type: "Workout",
    name: "Break a Sweat",
    difficulty: 1,
    style: "15 Min AMRAP",
    description: "10 Pullups, 10 Burpees, 10 Air Squats",
  },
  {
    id: 3,
    type: "Workout",
    name: "Workout Is Coming",
    difficulty: 2,
    style: "For Time",
    description: "800M Run, 50 Burpess, 50 KB Swings, 50 Pull-ups, 800M Run",
  },
  {
    id: 4,
    type: "Finisher",
    name: "Workout Is Coming 2!!!",
    difficulty: 1,
    style: "For Time",
    description: "1600M Run, 50 Burpess, 50 KB Swings, 50 Pull-ups, 800M Run",
  },
];

let a = 1;

const newArray = deck.filter(function (diff) {
  return diff.difficulty === 1;
});

let random = Math.floor(Math.random() * newArray.length);
console.log(random);

let workout = newArray[random];
console.log(workout);
