FROM node:22-alpine

LABEL maintainer="a2k42"

USER node

WORKDIR /home/node/app

COPY --chown=node package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
