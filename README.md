# Opinionated React + Express Boilerplate

## Project Structure

```
├── client
│   ├── config
│   │   ├── env.js
│   │   ├── getHttpsConfig.js
│   │   ├── jest
│   │   │   ├── cssTransform.js
│   │   │   └── fileTransform.js
│   │   ├── modules.js
│   │   ├── paths.js
│   │   ├── pnpTs.js
│   │   ├── webpack.config.js
│   │   └── webpackDevServer.config.js
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   ├── scripts
│   │   ├── build.js
│   │   ├── start.js
│   │   └── test.js
│   ├── src
│   │   ├── app
│   │   │   ├── app.component.jsx
│   │   │   ├── app.module.scss
│   │   │   └── index.jsx
│   │   ├── index.jsx
│   │   └── styles
│   │       ├── index.scss
│   │       └── _variables.scss
│   └── yarn.lock
├── README.md
└── server
    ├── package.json
    ├── src
    │   ├── app
    │   │   ├── app.js
    │   │   ├── app.test.js
    │   │   └── index.js
    │   ├── index.js
    │   └── middlewares
    │       ├── errorHandler.js
    │       ├── index.js
    │       └── notFound.js
    └── yarn.lock
```

## How to use

The easiest way is to use degit.

```sh
    npx degit https://github.com/proforty7/project-boilerplate.git
```

### Manual Installation

1. Clone the repository

```sh
    git clone https://github.com/proforty7/project-boilerplate.git
```

2. Remove .git folder

```sh
    rm -rf .git
```

## Features

### Client

- create-react-app ejected
- eslint with prettier and airbnb config enabled by default
- SASS enabled by default

### Server

- Express server
- Morgan with dev config
- Helmet enabled
- Dotenv enabled
- Cors enabled
- Middlewares for NotFound and ErrorHandling added
- Jest configured with supertest
- Nodemon added
