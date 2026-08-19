# F1 SH

A terminal-based Formula 1 information tool built with **Node.js** and **Bash**.

The project provides Formula 1 data directly inside the terminal with commands for drivers, teams, races, championships, and comparisons.

---

# Installation

## Clone the repository

```bash
git clone <repository-url>
cd f1.cli
```

---

## Install F1 SH

Run the installer:

```bash
chmod +x install.sh
./install.sh
```

The installer will:
- Make all shell scripts executable
- Create the global `f1` command
- Link the CLI to your local project folder

After installation:

```bash
f1
```

The F1 CLI terminal will start.

---

## Requirements

You need:

### Node.js

Required for running the API commands.

Check installation:

```bash
node --version
```

### Bash

Required for the CLI interface.

Check installation:

```bash
bash --version
```

---

## Uninstall

Remove the global command:

```bash
sudo rm /usr/local/bin/f1
```

The project folder can then be deleted normally.

---

# Technologies Used

## Node.js

Used for:
- API requests
- JSON processing
- Data formatting
- Terminal output generation

Main JavaScript files:

```
driver.js
team.js
result.js
lastrace.js
schedule.js
champd.js
champt.js
raceTable.js
```

---

## Bash

Used for:
- CLI interface
- Command handling
- Launching JavaScript commands
- Passing arguments

Main file:

```
main.sh
```

Example:

```
> driver max_verstappen
> team ferrari
> results 5
```

---

# APIs Used

## Jolpica F1 API

```
https://api.jolpi.ca/ergast/f1/
```

Used as the main Formula 1 data source.

Provides:

### Drivers

Used in:

```
commands/driver.js
```

Data:
- Driver name
- Nationality
- Birthday
- Driver ID
- Championship standings

---

### Teams / Constructors

Used in:

```
commands/team.js
```

Data:
- Team name
- Nationality
- Constructor standings
- Points
- Wins

---

### Race Results

Used in:

```
commands/result.js
commands/lastrace.js
```

Data:
- Driver positions
- Points
- Race time
- Laps completed

---

### Race Schedule

Used in:

```
commands/schedule.js
```

Data:
- Race dates
- Circuits
- Countries
- Season calendar

---

## Wikipedia API

```
https://en.wikipedia.org/api/rest_v1/page/summary/
```

Used for additional descriptions.

Used in:

```
commands/driver.js
commands/team.js
```

Provides:
- Driver biographies
- Team descriptions

---

# Project Structure

```
.
├── api.js
├── main.sh
│
├── commands
│   ├── champd.js
│   ├── champd.sh
│   ├── champt.js
│   ├── champt.sh
│   ├── chartd.js
│   ├── chartd.sh
│   ├── chartt.js
│   ├── chartt.sh
│   ├── compare.sh
│   ├── driver.js
│   ├── driver.sh
│   ├── lastrace.js
│   ├── lastrace.sh
│   ├── raceTable.js
│   ├── result.js
│   ├── result.sh
│   ├── schedule.js
│   ├── schedule.sh
│   ├── team.js
│   └── team.sh
```

---

# Commands

## Driver Information

```
driver [driver_id]
```

Example:

```
driver max_verstappen
```

Shows:
- Driver information
- Current season statistics
- Wikipedia biography

---

## Team Information

```
team [team_id]
```

Example:

```
team ferrari
```

Shows:
- Team information
- Championship position
- Team description

---

## Race Results

```
results [race_round]
```

Example:

```
results 3
```

Shows:
- Race classification
- Driver positions
- Points
- Race times

---

## Last Race

```
lastrace
```

Shows the latest race result.

---

## Schedule

```
schedule
```

Shows the complete season calendar.

---

# Files Vibecoded

The following files were created or heavily assisted by AI ("vibecoded"):

```
api.js


commands/driver.js
commands/team.js
commands/schedule.js

commands/driver.sh
commands/team.sh 
commands/schedule.sh
```

These files were generated/refactored with AI assistance and manually adjusted during development.

---

# Current Features

✅ Interactive terminal CLI  
✅ Driver profiles  
✅ Team profiles  
✅ Race results  
✅ Last race lookup  
✅ Full season schedule  
✅ Driver championship  
✅ Team championship  
✅ Wikipedia descriptions  
✅ Terminal formatting and colors  

---

# Future Improvements

- Add API caching
- Add historical seasons
- Add driver career statistics
- Add team comparisons
- Add more charts
- Add driver/team images
- Improve error handling
