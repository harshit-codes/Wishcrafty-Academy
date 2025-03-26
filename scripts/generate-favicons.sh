#!/bin/bash

# Script to generate favicons from the logo file
# Requires ImageMagick to be installed: brew install imagemagick

# Location of original logo
LOGO_SOURCE="./src/assets/images/logo.png"

# Destination folder
DEST_FOLDER="./public"

# Create destination if it doesn't exist
mkdir -p $DEST_FOLDER

# Generate favicon.ico (multi-size icon)
convert $LOGO_SOURCE -background none -resize 16x16 $DEST_FOLDER/favicon-16x16.png
convert $LOGO_SOURCE -background none -resize 32x32 $DEST_FOLDER/favicon-32x32.png
convert $LOGO_SOURCE -background none -resize 48x48 $DEST_FOLDER/favicon-48x48.png
convert $LOGO_SOURCE -background none -resize 64x64 $DEST_FOLDER/favicon-64x64.png

# Combine into .ico file
convert $DEST_FOLDER/favicon-16x16.png $DEST_FOLDER/favicon-32x32.png \
        $DEST_FOLDER/favicon-48x48.png $DEST_FOLDER/favicon-64x64.png \
        $DEST_FOLDER/favicon.ico

# Generate Apple Touch Icon and Android icons
convert $LOGO_SOURCE -background none -resize 192x192 $DEST_FOLDER/logo192.png
convert $LOGO_SOURCE -background none -resize 512x512 $DEST_FOLDER/logo512.png

# Copy the original logo to public folder as well
cp $LOGO_SOURCE $DEST_FOLDER/logo.png

echo "Generated favicon files in $DEST_FOLDER:"
ls -la $DEST_FOLDER/favicon*
ls -la $DEST_FOLDER/logo*

echo "Done!"
