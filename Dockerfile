FROM node:20.11.0

RUN mkdir -p /usr/src/logcomex-test

WORKDIR /usr/src/logcomex-test

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]