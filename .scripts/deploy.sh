#!/bin/bash
set -e

echo "Deployment started...for main branch"

# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

echo "Installing Dependencies..."

npm install --yes


echo "Creating Production Build..."
npm run --max-old-space-size=2048 build

#echo "PM2 Reload for TomorrowDubai.com"
#pm2 reload tomorrowdubai

echo "Deployment Finished!"