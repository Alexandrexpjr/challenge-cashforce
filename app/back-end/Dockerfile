FROM node:16-alpine
COPY package* ./
RUN npm install
COPY . .
CMD ["node", "build/server.js"]
EXPOSE 3001
