# question-api

An easy way to get started with Node.js and Express to offer a REST API using JSON as data source

## Features
- Express
- REST API

## Requirements
- [node & npm] (https://nodejs.org/en)
- [git] 

## Installations

- `git clone https://github.com/Nazaf/question-api.git`
- `cd question-api`
- `npm install or npm i`
- `npm run start`

## GET routes
- visit http://localhost:3000
  - /questions
  - /questions/1
  - /questions/1/answer
  
#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3000/questions
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{
                   
                           "id": 6,
                           "text": "Was it really there??",
                           "user": "nazaf",
                           "creationDate": "2020-01-01 12:00:00"
                   }`
        