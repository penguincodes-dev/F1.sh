import { f1_data } from "../api.js";

const team_id = process.argv[2];

if (!team_id) {
    console.log("Usage: team [team_id]");
    process.exit(1);
}

const arr = [];


// Team data from Jolpica
const request_one = await fetch(
    `https://api.jolpi.ca/ergast/f1/constructors/${team_id}.json`
);

const data_1 = await request_one.json();

const team = data_1.MRData.ConstructorTable.Constructors[0];


// Season standings
const standings_data = await f1_data("teams");

let team_stats = null;

if (standings_data.MRData?.StandingsTable?.StandingsLists?.[0]) {
    team_stats =
        standings_data.MRData.StandingsTable.StandingsLists[0]
        .ConstructorStandings
        .find(
            el => el.Constructor.constructorId === team_id
        );
}


// Wikipedia pages for F1 teams
const wiki_pages = {
    mercedes: "Mercedes_AMG_Petronas_F1_Team",
    ferrari: "Scuderia_Ferrari",
    red_bull: "Red_Bull_Racing",
    mclaren: "McLaren",
    aston_martin: "Aston_Martin_in_Formula_One",
    alpine: "Alpine_F1_Team",
    williams: "Williams_Racing",
    haas: "Haas_F1_Team",
    rb: "Racing_Bulls",
    audi: "Audi_in_Formula_One",
    cadillac: "Cadillac_Formula_One_Team"
};


const team_page =
    wiki_pages[team_id] ?? team.name.replaceAll(" ", "_");


// Wikipedia description
const request_two = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(team_page)}`
);

const data_2 = await request_two.json();


// Format biography
const bio = data_2.extract ?? "No description available.";

const bio_width = 42;

const formatted_bio = bio
    .match(new RegExp(`.{1,${bio_width}}(\\s|$)`, "g"))
    ?.map(line => line.trim())
    .join("\n")
    ?? bio;


const CYAN = "\x1b[96m";
const GREEN = "\x1b[92m";
const RESET = "\x1b[0m";


// Output
arr.push(`
╔══════════════════════════════════════════╗
║ ${team.name.toUpperCase().padEnd(40)}║
╚══════════════════════════════════════════╝

${CYAN}TEAM${RESET}
──────────────────────────────────────────
Name        ${team.name}
Nationality ${team.nationality}


${CYAN}2026 SEASON${RESET}
──────────────────────────────────────────
Position    ${team_stats?.position ?? "N/A"}
Points      ${GREEN}${team_stats?.points ?? "0"}${RESET}
Wins        ${team_stats?.wins ?? "0"}


${CYAN}BIOGRAPHY${RESET}
──────────────────────────────────────────
${formatted_bio}
`);


console.log(arr.join("\n"));