async function fetch_api(url) {
    try {
        const result = await fetch(url);

        if (!result.ok) {
            throw new Error(`HTTP ${result.status}`);
        }

        return await result.json();

    } catch (error) {
        return {
            error: "Unable to connect to Jolpica F1"
        };
    }
}


export async function f1_data(data) {

    switch (data) {

        case "teams":
            return fetch_api(
                "https://api.jolpi.ca/ergast/f1/2026/constructorstandings.json"
            );


        case "drivers":
            return fetch_api(
                "https://api.jolpi.ca/ergast/f1/2026/driverstandings.json"
            );


        case "driver":
            return fetch_api(
                "https://api.jolpi.ca/ergast/f1/drivers.json"
            );


        case "races":
            return fetch_api(
                "https://api.jolpi.ca/ergast/f1/2026.json"
            );


        default:
            return {
                error: `NO DATA FOR ${String(data).toUpperCase()}`
            };
    }
}