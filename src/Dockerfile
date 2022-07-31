FROM node:18

WORKDIR /api

COPY . /api/
VOLUME /api

EXPOSE 3003

ENV NODE_ENV=development

RUN npm install -g npm nodemon && \
    npm install

CMD ["npm", "run", "dev"]