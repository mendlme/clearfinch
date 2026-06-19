#!/bin/bash
set -e

cd /var/www/clearfin.ch/app

git pull origin prod
npm ci
npm run build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
sudo systemctl restart clearfinch-prod

echo "Deploy complete."
