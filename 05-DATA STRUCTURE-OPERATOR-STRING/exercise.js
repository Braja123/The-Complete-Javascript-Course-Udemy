// Exercise 1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Create one player array for each team (variables 'players1' and
// 'players2')

// For team1
// const players1 = game.players[0];
// // For team2
// const players2 = game.players[1];

// const [players1, players2] = game.players;

// The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// For team1
// const gk = players1[0];
// const fieldPlayers = players1.slice(1);
// const [gk, ...fieldPlayers] = players1;

// Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];

// During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = (...players) => {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator
// team1 < team2 && console.log("Team1 is more likely to win");
// team1 > team2 && console.log("Team2 is more likely to win");

// Exercise 2
// 1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2
// let average = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3
// // const {odds: {team1: }} = game;
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(`Odd of victory ${game[team] ?? "draw"}: ${odd}`);
// }

// Exercise 3
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// 1
const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2
const removeEvent = gameEvents.delete(64);
// console.log(gameEvents);

// 3
const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4
for (const [key, value] of gameEvents) {
  // console.log(
  //   `${key <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${key}: ${value}`
  // );

  // OR

  const half = key <= 45 ? "FIRST" : "SECOND";
  // console.log(`[${half} HALF] ${key}: ${value}`);
}

// Exercise 4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
let text = document.querySelector("textarea").value;
// console.log(value);

document.querySelector("button").addEventListener("click", () => {
  let text = document.querySelector("textarea").value;
  let rows = text.split("\n");
  for (let [i, row] of rows.entries()) {
    const [first, last] = row.toLowerCase().trim().split("_");
    const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
    console.log(`${output.padEnd(25)}${"✔".repeat(i + 1)}`);
    count++;
  }
  console.log(rows);
});

// Exercise 5 - Extra exercise which is not in exercise pdf
