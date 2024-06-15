#!/bin/bash

# This script is used to convert .mrpack to slugs.txt

MRPACK_FILE=$1

if [ -z "$MRPACK_FILE" ]; then
    echo "Please provide a .mrpack file"
    exit 1
fi

MRPACK_NAME=$(basename "$MRPACK_FILE" ".mrpack")
MRPACK_NAME=${MRPACK_NAME// /-}

mkdir -p .cache
rm -rf .cache/*

mkdir -p .output/$MRPACK_NAME

# Extract the .mrpack file
unzip -o "$MRPACK_FILE" -d .cache/$MRPACK_NAME

# Chmod the index
chmod 755 .cache/$MRPACK_NAME/modrinth.index.json

# Get the slugs
length=$(jq -r '.files | length' .cache/$MRPACK_NAME/modrinth.index.json)
i=1
jq -r '.files[] | .downloads[0]' .cache/$MRPACK_NAME/modrinth.index.json | while read -r url; do
    project_id=$(echo $url | cut -d'/' -f5)

    slug=$(curl -s https://api.modrinth.com/v2/project/$project_id | jq -r '.slug')
    echo "$slug ($project_id) ($i / $length)"

    echo $slug >> .output/$MRPACK_NAME/slugs.txt

    i=$((i+1))
done