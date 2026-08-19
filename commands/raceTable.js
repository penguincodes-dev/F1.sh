


export default function raceTable(driver, max_laps, arr) {
    const position = driver.position;
    const points = driver.points;
    const name = `${driver.Driver.givenName} ${driver.Driver.familyName}`;

    let time;

    const laps = driver.laps;
    if (driver.status == "Finished" || driver.status == "Lapped") {
        if (laps < max_laps) {
            time = `+${max_laps - laps} Lap`;
        } else {
            time = driver.Time.time;
        }
    }
    else {
        if (driver.status == "Retired") {
            time = `DNF`;
        } else if (driver.status == "Did not start") {
            time = `DNS`;
        } else {
            time = `DSQ`;
        }
    }
    arr.push(
        `   ${String(position).padStart(3)} | ${name.padEnd(25)} | ${String(points).padStart(6)} | ${time}`
    );

}