#!/bin/bash

trap 'printf "\nExiting Program..\n"; exit' SIGINT


# =========================
# STARTUP SCREEN
# =========================

show_logo() {
cat <<EOF


             **********************************   *********
           ***********************************   *********
          ***********************************   *********
         ***********************************   *********
        *********                             *********    ███████╗██╗  ██╗
       *********   *********************     *********     ██╔════╝██║  ██║
      *********   ********************      *********      ███████╗███████║
     *********   ********************      *********       ╚════██║██╔══██║
    *********   *********                 *********   ███  ███████║██║  ██║
   *********   *********                 *********    ███  ╚══════╝╚═╝  ╚═╝
  *********   *********                 *********

  h    - help
  exit - exit

EOF
}

show_logo


# =========================
# MAIN LOOP
# =========================

while true
do

    read -e -p "> " input

    # Split input into command and arguments
    set -- $input

    command=$1
    arg1=$2


    case "$command" in


        h)
            cat <<EOF

  CHAMPIONSHIPS
  ────────────────────────────────────────────────────────────
    champt       Team's Championship
    champd       Driver's Championship

  DRIVERS / TEAMS
  ────────────────────────────────────────────────────────────
    driver [driver_id]     Specific driver information
    team [team_id]         Specific team information

  CHARTS
  ────────────────────────────────────────────────────────────
    tchart       Team's charts
    dchart       Driver's charts

  RACES
  ────────────────────────────────────────────────────────────
    lastrace                  shows the last race result
    schedule                  show the full season calendar
    results [race_round]      shows a specific race results

  FEATURES
  ────────────────────────────────────────────────────────────
    clear                                           clear the terminal

EOF
            ;;


        champt)
            ./commands/champt.sh
            ;;


        champd)
            ./commands/champd.sh
            ;;


        tchart)
            ./commands/tchart.sh
            ;;


        dchart)
            ./commands/dchart.sh
            ;;


        lastrace)
            ./commands/lastrace.sh
            ;;


        schedule)
            ./commands/schedule.sh
            ;;

        # Check if race round was provided
        result)
            if [ -z "$arg1" ]; then
                echo "Usage: results [race_round]"
            else
                ./commands/result.sh "$arg1"
            fi
            ;;
        driver)
            if [ -z "$arg1" ]; then
                echo "Usage: driver [driver_id]"
            else
                ./commands/driver.sh "$arg1"
            fi
            ;;
        team)
            if [ -z "$arg1" ]; then
                echo "Usage: team [team_id]"
            else
                ./commands/team.sh "$arg1"
            fi
            ;;


        clear)
            clear
            show_logo
            ;;


        exit)
            echo "Exiting F1TTY...."
            exit
            ;;


        *)
            cat <<EOF

  The command '$input' is not allowed.

  Please try these commands instead:

  h       - help
  exit    - exit

  [ for more commands press: h ]

EOF
            ;;

    esac

done