import { f1_data } from "../api.js";

const drivers = await f1_data("drivers");

const drivers_list =
    drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings;

let arr = [
    "POS | DRIVER                    | POINTS | ID",
    "────┼───────────────────────────┼────────┼──────"
];

for (const driver of drivers_list) {
    const position = String(driver.position).padStart(3);
    const name = `${driver.Driver.givenName} ${driver.Driver.familyName}`.padEnd(25);
    const points = String(driver.points).padStart(6);
    const id = String(driver.Driver.driverId).padEnd(18);

    arr.push(`${position} | ${name} | ${points} | ${id}`);
}

console.log(arr.join("\n"));
