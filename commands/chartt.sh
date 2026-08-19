#!/bin/bash

text=$(node commands/chartt.js)

cat <<EOF

${text}

EOF