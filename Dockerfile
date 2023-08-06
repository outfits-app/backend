FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install pm2 -g

RUN npm install

RUN npm install --save dotenv 

RUN npm run build

CMD ["pm2-runtime", "start", "lib/index.js"]
