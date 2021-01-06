FROM node:15.5-alpine3.12
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install --production
COPY . .
RUN mkdir -p /carltonData/cj_pics/pics2020/hawaii
RUN npm run link:pics
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]