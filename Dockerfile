FROM node:16.14.2-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build

FROM nginx:1.21.6-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
