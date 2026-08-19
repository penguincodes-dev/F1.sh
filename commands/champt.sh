#!/bin/bash

text=$(node commands/champt.js)

cat <<EOF

${text}

EOF