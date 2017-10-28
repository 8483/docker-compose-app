FROM node

# Code lives here, so move there.
WORKDIR /usr/src/app

COPY package.json .
COPY package.json package-lock.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
