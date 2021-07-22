FROM node:12-alpine as builder
WORKDIR /test_task
COPY package.json /test_task/package.json
RUN npm install --only=prod
COPY . /test_task
RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=builder /test_task/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]