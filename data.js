const deck = [
  {
    id: 1,
    name: "Cheat Meal",
    difficulty: "3",
    type: "For Time",
    description:
      "1 Mile Run, 25 Thrusters, 25 Pull-ups, 25 Push-ups, 50 Burpees, 1 Mile Run",
  },
  {
    id: 2,
    name: "Workout Is Coming!!!",
    difficulty: "2",
    type: "For Time",
    description: "800M Run, 50 Burpess, 50 KB Swings, 50 Pull-ups, 800M Run",
  },
  {
    id: 3,
    name: "Workout Is Coming 2!!!",
    difficulty: "2",
    type: "For Time",
    description: "1600M Run, 50 Burpess, 50 KB Swings, 50 Pull-ups, 800M Run",
  },
];

const newArray = deck.filter(function (diff) {
  return diff.difficulty === "2";
});
console.log(newArray);

let a = 1;

var result2 = deck.filter((obj) => {
  return obj.id === a;
});
console.log(result2[0]);

let workoutName = result2.map((a) => a.name);
let description = result2.map((a) => a.description);
let type = result2.map((a) => a.type);
console.log(workoutName);
console.log(type);
console.log(description);
