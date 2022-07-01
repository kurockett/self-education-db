FROM strapi/base
RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV production
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]