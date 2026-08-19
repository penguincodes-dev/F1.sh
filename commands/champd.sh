#!/bin/bash

text=$(node commands/champd.js)

cat <<EOF

${text}

EOF