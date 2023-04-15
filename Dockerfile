FROM node:18-alpine
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
CMD ["serve", "-s", "build"]
