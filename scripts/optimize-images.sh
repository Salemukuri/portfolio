#!/bin/bash

# Image Optimization Script for Phase 1
# This script compresses PNG and JPG images using sharp-cli

cd "$(dirname "$0")/../public" || exit 1

echo "Starting image optimization..."
echo "========================================"

# Create backup directory
mkdir -p ../image-backups
echo "✓ Created backup directory"

# Compress PNG files
echo ""
echo "Optimizing PNG files..."
for file in *.png; do
  if [ -f "$file" ]; then
    echo "  Processing: $file"
    # Backup original
    cp "$file" "../image-backups/$file.backup"
    # Optimize with sharp (85% quality, compression level 9)
    npx sharp-cli -i "$file" -o "$file.tmp" --format png --compressionLevel 9 --quality 85 2>/dev/null
    if [ -f "$file.tmp" ]; then
      mv "$file.tmp" "$file"
      echo "    ✓ Optimized"
    else
      echo "    ⚠ Skipped (already optimized or error)"
    fi
  fi
done

# Compress JPG files
echo ""
echo "Optimizing JPG files..."
for file in *.jpg; do
  if [ -f "$file" ]; then
    echo "  Processing: $file"
    # Backup original
    cp "$file" "../image-backups/$file.backup"
    # Optimize with sharp (85% quality, progressive)
    npx sharp-cli -i "$file" -o "$file.tmp" --format jpeg --quality 85 --progressive 2>/dev/null
    if [ -f "$file.tmp" ]; then
      mv "$file.tmp" "$file"
      echo "    ✓ Optimized"
    else
      echo "    ⚠ Skipped (already optimized or error)"
    fi
  fi
done

echo ""
echo "========================================"
echo "Image optimization complete!"
echo ""
echo "Backups saved to: image-backups/"
echo ""
echo "To see size comparison:"
echo "  ls -lh image-backups/ | awk '{print \$5, \$9}'"
echo "  ls -lh *.{png,jpg} 2>/dev/null | awk '{print \$5, \$9}'"
