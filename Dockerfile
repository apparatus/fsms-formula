FROM node
ADD ./package.json /
RUN npm install
ADD srv /
CMD npm start
EXPOSE 6000
