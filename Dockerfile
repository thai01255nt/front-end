FROM node:18-alpine as build
RUN npm install -g serve

WORKDIR /app
ADD ./yarn.lock ./yarn.lock
ADD ./package.json ./package.json
RUN yarn install
ADD ./tsconfig.json ./tsconfig.json
ADD ./public ./public
ADD ./src ./src
ADD ./.env ./.env
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
