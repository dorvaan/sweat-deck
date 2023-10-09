const deck = [
  {
    id: 1,
    name: "Cheat Meal",
    difficulty: 1,
    type: "For Time",
    description:
      "1 Mile Run, 25 Thrusters, 25 Pull-ups, 25 Push-ups, 50 Burpees, 1 Mile Run",
  },
  {
    id: 2,
    name: "MEGA Cheat Meal",
    difficulty: 1,
    type: "For Time",
    description:
      "1 Mile Run, 25 Thrusters, 25 Pull-ups, 25 Push-ups, 50 Burpees, 1 Mile Run",
  },
  {
    id: 3,
    name: "Workout Is Coming!!!",
    difficulty: 1,
    type: "For Time",
    description: "800M Run, 50 Burpess, 50 KB Swings, 50 Pull-ups, 800M Run",
  },
  {
    id: 4,
    name: "Workout Is Coming 2!!!",
    difficulty: 1,
    type: "For Time",
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
