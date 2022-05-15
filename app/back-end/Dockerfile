FROM node:16-alpine
COPY package* ./
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3001
