#!/bin/bash
set -e

cd /var/www/znik.org/clearfinch

git pull origin main
npm ci
npm run build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
systemctl restart clearfinch

echo "Deploy complete."
