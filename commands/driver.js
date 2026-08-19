import { f1_data } from "../api.js";

const driver_id = process.argv[2];

if (!driver_id) {
    console.log("Usage: driver [driver_id]");
    process.exit(1);
}

const arr = [];


// Driver data from Jolpica
const request_one = await fetch(
    `https://api.jolpi.ca/ergast/f1/drivers/${driver_id}.json`
);

const data_1 = await request_one.json();

const driver = data_1.MRData.DriverTable.Drivers[0];


// Season standings
const standings_data = await f1_data("drivers");

let driver_stats = null;

if (standings_data.MRData?.StandingsTable?.StandingsLists?.[0]) {
    driver_stats =
        standings_data.MRData.StandingsTable.StandingsLists[0]
        .DriverStandings
        .find(
            el => el.Driver.driverId === driver_id
        );
}


// Wikipedia description
const driver_page = `${driver.givenName}_${driver.familyName}`;

const request_two = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(driver_page)}`
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
║ ${`${driver.givenName} ${driver.familyName}`.toUpperCase().padEnd(40)}║
╚══════════════════════════════════════════╝

${CYAN}DRIVER${RESET}
──────────────────────────────────────────
Number      ${driver.permanentNumber ?? "N/A"}
Code        ${driver.code ?? "N/A"}
Nationality ${driver.nationality}
Birthday    ${driver.dateOfBirth}


${CYAN}2026 SEASON${RESET}
──────────────────────────────────────────
Position    ${driver_stats?.position ?? "N/A"}
Points      ${GREEN}${driver_stats?.points ?? "0"}${RESET}
Wins        ${driver_stats?.wins ?? "0"}


${CYAN}BIOGRAPHY${RESET}
──────────────────────────────────────────
${formatted_bio}
`);


console.log(arr.join("\n"));