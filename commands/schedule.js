const request = await fetch(
    "https://api.openf1.org/v1/sessions?year=2026&session_type=Race&is_cancelled=false"
);

const arr = [];

const response = await request.json();

const now = new Date().toISOString().split("T")[0];

let coming = false;

const GREEN = "\x1b[92m";
const RED = "\x1b[91m";
const RESET = "\x1b[0m";

for (const race of response) {
    const date = race.date_start.split("T")[0];
    const name = race.circuit_short_name;
    const country = race.country_name;

    let status;
    let color;

    if (date < now) {
        status = "Raced";
        color = GREEN;
    } else if (!coming) {
        status = "Upcoming";
        color = RED;
        coming = true;
    } else {
        status = "Upcoming";
        color = RED;
    }

    arr.push({
        name,
        country,
        date,
        status,
        color
    });
}

const width = 30;

function formatRace(race) {
    const name = race.name.padEnd(width);
    const country = race.country.padEnd(width);
    const date = race.date.padEnd(width);
    const status = `${race.color}${race.status}${RESET}`.padEnd(width + 9);

    return {
        name,
        country,
        date,
        status
    };
}

for (let i = 0; i < arr.length; i += 3) {

    const races = arr.slice(i, i + 3).map(formatRace);

    console.log(
        races.map(race => race.name).join("")
    );

    console.log(
        races.map(race => race.country).join("")
    );

    console.log(
        races.map(race => race.date).join("")
    );

    console.log(
        races.map(race => race.status).join("")
    );

    console.log();
}