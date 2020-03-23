FROM node:13-alpine

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY . /usr/src/app
RUN yarn

CMD [ "yarn", "start" ]