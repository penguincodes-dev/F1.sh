import { f1_data } from "../api.js";

const teams = await f1_data("teams");

const teams_list =
    teams.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

let arr = [];


// =========================
// CHART SCALE
// =========================

const leader_points = Number(teams_list[0].points);

const max_points_graph = leader_points + 40;

const points_per_char = max_points_graph / 60;


// =========================
// CREATE CHART
// =========================

for (const team of teams_list) {

    const position = String(team.position).padStart(2);

    const points = Number(team.points);

    const points_display = String(points).padStart(4);

    const name = team.Constructor.constructorId
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