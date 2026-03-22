#!/bin/bash

# SVG Optimization Script for Phase 1
# This script optimizes SVG files using SVGO

cd "$(dirname "$0")/../public" || exit 1

echo "Starting SVG optimization..."
echo "========================================"

# Create backup directory if it doesn't exist
mkdir -p ../image-backups
echo "✓ Backup directory ready"

# Optimize SVG files
echo ""
echo "Optimizing SVG files..."
for file in *.svg; do
  if [ -f "$file" ]; then
    # Get original size
    original_size=$(ls -lh "$file" | awk '{print $5}')
    echo "  Processing: $file ($original_size)"

    # Backup original
    cp "$file" "../image-backups/$file.backup"

    # Optimize with SVGO
    npx svgo "$file" --multipass --precision 2 2>/dev/null

    # Get new size
    new_size=$(ls -lh "$file" | awk '{print $5}')
    echo "    ✓ Optimized: $original_size → $new_size"
  fi
done

echo ""
echo "========================================"
echo "SVG optimization complete!"
echo ""
echo "NOTE: Files over 100KB should be reviewed:"
find . -maxdepth 1 -name "*.svg" -size +100k -exec ls -lh {} \; | awk '{print "  ", $5, $9}'
