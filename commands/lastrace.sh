#!/bin/bash

text=$(node commands/lastrace.js)

cat <<EOF

${text}

EOF