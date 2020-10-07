#FROM node:8.11
FROM registry-ds1.cnt.team:35000/webapp-prod:v1.1
WORKDIR /var/www/linkmuse.com/
COPY . ./
CMD pm2-runtime ./ecosystem.config.js --only webapp-prod
