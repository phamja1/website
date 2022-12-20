# Website

# Prerequisites:
- NodeJS
- Docker


To run app:
1. Clone repository into desired destination
2. cd into the repository (`cd path/to/website`)
3. Create docker image with `docker build . -t <image name>`
4. Create and run a docker container with `docker run -p 3000:5173 -d <image name>`
5. Navigate to <a href='http://localhost:3000' target="_blank">localhost:3000</a>
6. Test the website!
