FROM nginx:latest
COPY ./app /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

# docker build -t kinoba .
# docker run -it --rm -d -p 80:80 -v /$(pwd)/app:/usr/share/nginx/html --name kinoba kinoba
