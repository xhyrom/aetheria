#!/bin/bash

# This script is used to convert slugs.txt to packwiz format

SLUGS_FILE=$1
PACKWIZ_MODPACK_FOLDER=$2

if [ -z "$SLUGS_FILE" ]; then
    echo "Please provide a slugs file"
    exit 1
fi

if [ -z "$PACKWIZ_MODPACK_FOLDER" ]; then
    echo "Please provide a packwiz modpack folder"
    exit 1
fi

if [ ! -f "$SLUGS_FILE" ]; then
    echo "Slugs file not found"
    exit 1
fi

if [ ! -d "$PACKWIZ_MODPACK_FOLDER" ]; then
    echo "Packwiz modpack folder not found"
    exit 1
fi

SLUGS=$(<"$SLUGS_FILE")

echo "Moving to $PACKWIZ_MODPACK_FOLDER"
cd "$PACKWIZ_MODPACK_FOLDER"

length=$(echo "$SLUGS" | wc -l)

i=1
for slug in $SLUGS; do
    echo "Processing $slug ($i / $length)"

    output=$(echo "y" | packwiz modrinth add $slug)
    echo "$output"

    i=$((i+1))
    echo ""
done