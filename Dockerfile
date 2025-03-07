FROM node:20

WORKDIR /app

COPY package.json package-lock.json* ./

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm install --only=production; \
    else \
        npm install; \
        npm install -g nodemon; \
    fi

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start-dev"]
