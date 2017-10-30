FROM node

# CD to directory where node code lives.
WORKDIR /usr/src/app

# Copy files from Dockerfile folder to the current container directory.
COPY package.json .
COPY package.json package-lock.json ./

RUN npm install

# Copy the npm installs into the container.
COPY . .

CMD [ "npm", "start" ]
