FROM node:20.12.2-slim
WORKDIR /app
COPY . .
RUN npm install --quiet
RUN npm test
RUN npx expo export --platform web
RUN npm install -g pm2
EXPOSE 3000
CMD ["pm2-runtime", "start", "app.config.js"]