FROM node:18

WORKDIR /api

COPY . /api/
VOLUME /api

EXPOSE 3003

ENV ENVIRONMENT=DEV
ENV MIGRATED=0

RUN npm install -g npm nodemon   && \
    npm install -g sequelize-cli && \
    npm install && \
    sequelize db:create

CMD ["npm", "run", "dev"]