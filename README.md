# Project Name

> anthony-titleBanner-service

## Related Projects

  - https://github.com/rpt26-sdc-factory/vbao-instructor-service
  - https://github.com/rpt26-sdc-factory/kim-syllabi-service
  - https://github.com/rpt26-sdc-factory/james-about-service

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

```
Install Dependencies:
- npm install

Start Server:
- npm start

Generate Data:
- npm run csv

Load Data into Postgres:
- log into postgres, from postgres terminal \i seed/schemas/pgSchema.sql

Start UI:
- npm run react-dev
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Travis CI
[![Build Status](https://travis-ci.org/Ingenuity-rpt26/vinay-titleBanner-service.svg?branch=main)](https://travis-ci.org/Ingenuity-rpt26/vinay-titleBanner-service)


## license
![NPM](https://img.shields.io/npm/l/express)

## CRUD APIs - Titles
```
- Type: POST
- Endpoint: /postTitle
- Expectation: a title and id to be posted to the titlesDB.

- Type: GET
- Endpoint: /getTitle/:title'
- Expectation: a title searched and returned from the titlesDB.

- Type: PUT
- Endpoint: /updateTitle/:title
- Expectation: a title searched and updated from the titlesDB.

- Type: DELETE
- Endpoint: /deleteTitle/:title
- Expectation: a title searched and deleted from the titlesDB.
```

## CRUD APIs - Enrolled Numbers
```
- Type: POST
- Endpoint: /postEnrolled
- Expectation: an enrolled number and id to be posted to the enrolledDB.

- Type: GET
- Endpoint: /getEnrolled/:enrolled
- Expectation: an enrolled number searched and returned from the enrolledDB.

- Type: PUT
- Endpoint: /updateEnrolled/:enrolled
- Expectation: an enrolled number searched and updated from the enrolledDB.

- Type: DELETE
- Endpoint: /deleteEnrolled/:enrolled
- Expectation: an enrolled number searched and deleted from the enrolledDB.
```





