
# Fulhaus Acronyms REST API 

This project is a back-end technical assessment for Fulhaus. The objective of this assessment is to create RESTful API with Node.js and Express.js for managing acronyms. This API supports basic CRUD operations on acronyms.


## Requirements

The application must meet the following requirements:

- Build a REST API for acronyms (a basic CRUD Operation).
- Create a NodeJS server using ExpressJS and modern best practices for API development.


## Technologies and Libraries

- Node.js
- Express.js
- MongoDB
- Middleware cors
- express-async-handler
- Mongoose
- Nodemon

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine
`git@github.com:NavGithub15/fulhaus-test-BE.git`
- `cd` into `fulhaus-backend`

- Add the Envireonment Variables
`MONGO_URI=mongodb+srv://username:KjiZwBdDVs0y5D1s@cluster0.lbpbt05.mongodb.net/?retryWrites=true&w=majority`
- Install the necessary dependencies using `npm install`.
- Start the development server using `npm start`.
- The server will run on http://localhost:8000

## Endpoints
The following endpoints are available in this API:

### GET /acronym?page=1&limit=10&search=:search
Returns a list of acronyms, pagination using query parameters. Response headers indicate if there are more results. Returns all acronyms that fuzzy match against :search.

### POST /acronym
Receives an acronym and definition string. Adds the acronym definition to the database.

### PATCH /acronym/:acronymID
Updates the acronym for :acronymID.

### DELETE /acronym/:acronymID
Deletes the acronym for :acronymID.





## Conclusion
This backend technical assessment required creating a REST API for acronyms with CRUD operations using NodeJS and best practices. The solution met all requirements and demonstrated a well-organized and easily understandable codebase.