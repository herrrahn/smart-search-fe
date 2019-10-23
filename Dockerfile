FROM nginx:1.15.7-alpine

COPY dist/AIWebSearch /usr/share/nginx/html
COPY dist/AIWebSearch/assets/gui.conf /etc/nginx/conf.d/gui.conf

EXPOSE 80
