#!/bin/bash

text=$(node commands/chartd.js)

cat <<EOF

${text}

EOF