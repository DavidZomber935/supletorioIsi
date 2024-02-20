FROM nginx:1.25.4-alpine

COPY dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]

