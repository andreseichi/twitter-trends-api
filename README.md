# Twitter Trends API

> Provides the trends endpoint based on the location, with CORS enabled

<p align="center">
    <img alt="Yarn package" src="https://img.shields.io/badge/Node.JS-000?style=for-the-badge&logo=node.js">
    <img alt="Expressjs" src="https://img.shields.io/badge/Express-fff?style=for-the-badge&logo=express&logoColor=000">
    <img alt="Github repo size" src="https://img.shields.io/github/repo-size/andreseichi/twitter-trends-api?style=for-the-badge">
    <a href="https://github.com/andreseichi/twitter-trends-api/commits"><img alt="Last commit" src="https://img.shields.io/github/last-commit/andreseichi/twitter-trends-api?style=for-the-badge" /></a>
</p>

## 🚀 How to use the project

### 🛹 Clone the repo

`git clone https://github.com/andreseichi/twitter-trends-api.git`

### 📒 Acess the repo

`cd twitter-trends-api`

### 🧭 Install all dependencies with yarn

`npm install`

### 🔑 Create an environment variable

In the .env file, create a variable `TWITTER_BEARER_TOKEN` with the Bearer token with your twitter application

### 🎫 Configure the CORS to work properly wherever you want

```
const corsOptions = {
  origin: ['http://localhost:3000', 'https://yourfrontendapp.com'],
  optionsSuccessStatus: 200,
};
```

## The route /trends get the global trends, and the route /trends/:id get dynamically trends based on the woeid
