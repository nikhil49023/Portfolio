FROM node:22-alpine

WORKDIR /app

# Install common dev tools
RUN apk add --no-cache git curl bash

EXPOSE 3000 5173 4321

CMD ["sh"]
