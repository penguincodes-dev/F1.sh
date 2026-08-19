import { f1_data } from "../api.js";

const drivers = await f1_data("drivers");

const drivers_list =
    drivers.MRData.StandingsTable.StandingsLists[0].DriverStandings;

let arr = [];


// =========================
// CHART SCALE
// =========================

const leader_points = Number(drivers_list[0].points);

const max_points_graph = leader_points + 20;

const points_per_char = max_points_graph / 60;


// =========================
// CREATE CHART
// =========================

for (const driver of drivers_list) {

    const position = String(driver.position).padStart(2);

    const points = Number(driver.points);

    const points_display = String(points).padStart(4);

    const name = driver.Driver.driverId
        .toUpperCase()
        .replace("_", " ")
        .padEnd(15);

    let chart_length = Math.round(
        points / points_per_char
    );

    // Every team with at least 1 point gets 1 #
    if (points > 0 && chart_length < 1) {
        chart_length = 1;
    }

    const chart_column = "#"
        .repeat(chart_length)
        .padEnd(60);

    arr.push(
        `${position} | ${name} | ${chart_column} | ${points_display}`
    );
}


// =========================
// OUTPUT
// =========================

console.log(arr.join("\n"));