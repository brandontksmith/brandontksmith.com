FROM node:lts-alpine as builder

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn install

COPY ./public /app/public/
COPY ./src /app/src/

RUN yarn build

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html
