#!/bin/bash

text=$(node commands/schedule.js)

cat <<EOF

${text}

EOF