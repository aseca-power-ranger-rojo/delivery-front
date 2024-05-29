FROM node:20-slim AS build

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8081

CMD ["npm", "run", "start"]