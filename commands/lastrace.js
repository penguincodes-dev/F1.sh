import raceTable  from "../commands/raceTable.js"


const arr = [
    "   POS | DRIVER                    | POINTS |  TIME  |",
    "   ────┼───────────────────────────┼────────|────────|"
];

const response = await fetch(
    "https://api.jolpi.ca/ergast/f1/2026/last/results.json"
);

const data = await response.json();

const race = data.MRData.RaceTable.Races[0];

const driver_results = race.Results;

const max_laps = driver_results[0].laps;

for (const driver of driver_results) {
    raceTable(driver, max_laps, arr)
}

console.log(arr.join("\n"));