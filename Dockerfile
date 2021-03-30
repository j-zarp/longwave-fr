FROM node:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

#RUN git clone https://github.com/cynicaloptimist/longwave.git /longwave \
COPY ./longwave /longwave-fr

WORKDIR /longwave

RUN npm update --save \
    && npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]


