FROM node

# Code lives here, so move there.
WORKDIR /usr/src/app

COPY package.json .
COPY package.json package-lock.json ./

RUN npm install

# Copy the npm installs into the container /
COPY . .

CMD [ "npm", "start" ]
