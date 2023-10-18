const deck = [
  {
    id: 1,
    name: "Alpha",
    difficulty: 1,
    equipment: "",
    style: "AMRAP",
    desc1: "10 Alternating Lunges",
    desc2: "10 Air Squats",
    desc3: "10 Push-Ups",
    desc4: "10 Crunches",
    desc5: "",
    desc6: "",
    time: 15,
    reps: "",
    randomizer: "Push-ups",
    randReps: 25,
    randDist: "",
    finisher: "Bicycle Crunches",
    finishReps: 25,
    finishDist: "",
  },
  {
    id: 2,
    name: "Fast Track",
    difficulty: 1,
    equipment: "",
    style: "AMRAP",
    desc1: "400M Run",
    desc2: "15 Jump Squats",
    desc3: "15 Push-Ups",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 12,
    reps: "",
    randomizer: "Run",
    randReps: "",
    randDist: 800,
    finisher: "Air Squats",
    finishReps: 25,
    finishDist: "",
  },
  {
    id: 3,
    name: "Beginner's Luck",
    difficulty: 1,
    equipment: "Rower, Barbell, Box",
    style: "AMRAP",
    desc1: "25 Calorie Row",
    desc2: "10 Thrusters",
    desc3: "10 Box Jumps",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 10,
    reps: "",
    randomizer: "Row",
    randReps: "",
    randDist: 500,
    finisher: "Push-Ups",
    finishReps: 50,
    finishDist: "",
  },
  {
    id: 4,
    name: "Gut Feeling",
    difficulty: 1,
    equipment: "",
    style: "EMOM",
    desc1: "25 Bicycle Crunches",
    desc2: "20 Lying Leg Raises",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 10,
    reps: "",
    randomizer: "Pull-Up",
    randReps: 25,
    randDist: "",
    finisher: "Star Toe Touch Sit-Ups",
    finishReps: 25,
    finishDist: "",
  },
  {
    id: 5,
    name: "Break a Sweat",
    difficulty: 1,
    equipment: "Pull-Up Bar",
    style: "AMRAP",
    desc1: "10 Pull-Ups",
    desc2: "10 Burpees",
    desc3: "10 Air Squats",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 15,
    reps: "",
    randomizer: "Sit-Up",
    randReps: 25,
    randDist: "",
    finisher: "Bicycle Crunches",
    finishReps: 50,
    finishDist: "",
  },
  {
    id: 6,
    name: "Pushover",
    difficulty: 1,
    equipment: "Barbell",
    style: "AMRAP",
    desc1: "8 Thrusters",
    desc2: "8 Burpees over Barbell",
    desc3: "8 Air Squats",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 8,
    reps: "",
    randomizer: "Burpee",
    randReps: 25,
    randDist: "",
    finisher: "Burpee",
    finishReps: 25,
    finishDist: "",
  },
  {
    id: 7,
    name: "Tread Carefully",
    difficulty: 1,
    equipment: "Kettlebell",
    style: "EMOM",
    desc1: "Minute 1: Run",
    desc2: "Minute 2: 15 Kettlebell Goblet Squats",
    desc3: "Minute 3: 15 Push-Ups",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 12,
    reps: "",
    randomizer: "Kettlebell Swing",
    randReps: 25,
    randDist: "",
    finisher: "Run",
    finishReps: "",
    finishDist: 800,
  },
  {
    id: 8,
    name: "Duck Soup",
    difficulty: 1,
    equipment: "Pull-Up Bar, Dumbells",
    style: "AMRAP",
    desc1: "8 Dumbbell Front Squats",
    desc2: "8 Push-Ups",
    desc3: "8 Pull-Ups",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 8,
    reps: "",
    randomizer: "Thruster",
    randReps: "10",
    randDist: "",
    finisher: "Dumbell Sumo Squats",
    finishReps: 20,
    finishDist: "",
  },
  {
    id: 9,
    name: "Fresh Start",
    difficulty: 1,
    equipment: "Pull-Up Bar, Barbell",
    style: "AMRAP",
    desc1: "10 Pull-Ups",
    desc2: "10 Deadlifts",
    desc3: "10 Air Squats",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 15,
    reps: "",
    randomizer: "Farmer's Walk",
    randReps: "",
    randDist: 30,
    finisher: "Sit-Ups",
    finishReps: 50,
    finishDist: "",
  },
  {
    id: 10,
    name: "Irons in the Fire",
    difficulty: 1,
    equipment: "Kettlebell",
    style: "AMRAP",
    desc1: "20 Kettlebell Swings",
    desc2: "15 Kettlebell Goblet Squats",
    desc3: "15 Push-Ups",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 15,
    reps: "",
    randomizer: "High Knees",
    randReps: "50",
    randDist: "",
    finisher: "Run",
    finishReps: "",
    finishDist: 800,
  },
  {
    id: 11,
    name: "Hard Knocks",
    difficulty: 1,
    equipment: "Pull-Up Bar",
    style: "EMOM",
    desc1: "Minute 1: 10 Pull-Ups",
    desc2: "Minute 2: 10 Burpees",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 10,
    reps: "",
    randomizer: "Push Press",
    randReps: "15",
    randDist: "",
    finisher: "Wall Sit",
    finishReps: 1,
    finishDist: "",
  },
  {
    id: 12,
    name: "Juggernaut",
    difficulty: 1,
    equipment: "Dumbbells",
    style: "EMOM",
    desc1: "Minute 1: 10 Dumbbell Thrusters",
    desc2: "Minute 2: 5 Burpees over Dumbbells",
    desc3: "",
    desc4: "",
    desc5: "",
    desc6: "",
    time: 15,
    reps: "",
    randomizer:
      "Double Cross: Double the reps/distance/time of the next card selected",
    randReps: "",
    randDist: "",
    finisher: "Dumbbell Suitcase Squats",
    finishReps: 12,
    finishDist: "",
  },
  {
    id: 13,
    name: "Back to Basics",
    difficulty: 1,
    equipment: "",
    style: "AMRAP",
    desc1: "20 Burpees",
    desc2: "20 Air Squats",
    desc3: "20 Reverse Lunges",
    desc4: "20 Side Lunges",
    desc5: "",
    desc6: "",
    time: 15,
    reps: "",
    randomizer: "Deadlift",
    randReps: "10",
    randDist: "",
    finisher: "Run",
    finishReps: "",
    finishDist: 800,
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
