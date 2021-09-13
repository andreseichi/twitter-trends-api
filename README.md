# To use my project

## Clone it

`git clone https://github.com/andreseichi/twitter-trends-api`

## Install all dependencies

`npm install`

## Create a environment variable

In the .env file, create a variable `TWITTER_BEARER_TOKEN` with the Bearer token with your twitter application

## Configure the CORS to work properly wherever you want

```
const corsOptions = {
  origin: ['http://localhost:3000', 'https://twitter-trends.netlify.app'],
  optionsSuccessStatus: 200,
};
```

## The route /trends get the global trends, and the route /trends/:id get dynamically trends based on the woeid
