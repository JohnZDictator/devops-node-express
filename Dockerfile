FROM node:16
WORKDIR /devops-node-app
COPY package.json .
RUN npm install
COPY . ./
CMD [ "node", "index.js" ]