import { f1_data } from "../api.js";

const teams = await f1_data("teams");

const teams_list=
    teams.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

let arr = [
    "POS | TEAM                      | POINTS | ID",
    "────┼───────────────────────────┼────────┼──────"
];

for (const team of teams_list) {
    const position = String(team.position).padStart(3);
    const name = `${team.Constructor.name}`.padEnd(25);
    const points = String(team.points).padStart(6);
    const id = String(team.Constructor.constructorId).padEnd(10);

    arr.push(`${position} | ${name} | ${points} | ${id}`);
}

console.log(arr.join("\n"));
