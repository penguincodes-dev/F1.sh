#!/bin/bash

PROJECT_PATH=$(pwd)

echo "Installing F1 CLI..."

cat <<EOF | sudo tee /usr/local/bin/f1 > /dev/null
#!/bin/bash
cd $PROJECT_PATH
./main.sh
EOF

sudo chmod +x /usr/local/bin/f1

echo "Installed! Run: f1"