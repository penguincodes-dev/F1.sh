import raceTable from "./raceTable.js";

// Get race round from CLI argument
const round = process.argv[2];

if (!round) {
    console.log("Usage: results <round>");
    process.exit(1);
}

const arr = [
    "   POS | DRIVER                    | POINTS |  TIME  |",
    "   ────┼───────────────────────────┼────────|────────|"
];

const request = await fetch(
    `https://api.jolpi.ca/ergast/f1/2026/${round}/results.json`
);


const data = await request.json();

const race = data.MRData.RaceTable.Races[0];

if (!race) {
    console.log(`No results found for round ${round}`);
    process.exit(1);
}

const driver_results = race.Results;

const max_laps = driver_results[0].laps;

arr.unshift(`\n${race.raceName}\n`);

for (const driver of driver_results) {
    raceTable(driver, max_laps, arr);
}

console.log(arr.join("\n"));