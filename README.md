# InstaNotary Express App

This app is a skeleton application for express with nodemon and docker.

## Tech stack used

- Express JS
- Nodemons
- Docker

## Setup env

- Create a .env file in this server folder with `nano .env`
- Copy paste the below text and provide your own keys and save it

```
# Set to production when deploying to production
NODE_ENV=development

# Node.js server configuration
SERVER_PORT=5000

```

## How to install Docker?

To install the docker ce and docker-compose on EC2 instance, just follow this simple instruction one by one:

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update
$ sudo apt-get install docker-ce // installing the docker
$ sudo apt-get install docker-compose // installing the docker-compose
```

## How to run?

To run this app you just have to clone the whole app and then follow these steps:

```
docker-compose up --build // if you are running for the first time or change and packages
docker-compose up // if you have already build the container
```

## How to deploy in AWS?

To deploy this app you have to `Launch an EC2 instance` and `SSH into your instance` using the ssh keys from the aws instance. Here is great article that you can follow to get it done with the setup for aws instance and run the app on the instance [Deploy Node JS App to AWS EC2 Server](https://ourcodeworld.com/articles/read/977/how-to-deploy-a-node-js-application-on-aws-ec2-server)

- Run and build with docker - `docker-compose up --build`
- Run with docker - `docker-compose up`
- Once the server is up, you have expose the port whatever you get in the console in the earlier step.
