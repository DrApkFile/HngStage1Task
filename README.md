# Number Classification API

This is a **Node.js + Express** API that classifies a number and returns its mathematical properties (e.g., prime, perfect, Armstrong, odd/even) along with a fun fact about the number fetched from the [Numbers API](http://numbersapi.com/).

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [API Endpoint](#api-endpoint)
4. [Request and Response Examples](#request-and-response-examples)
5. [How to Run Locally](#how-to-run-locally)
6. [Deployment](#deployment)
7. [Author](#author)
8. [Acknowledgments](#acknowledgments)

---

## Features
- Accepts a number as input and classifies it.
- Determines if the number is:
  - **Prime**
  - **Perfect**
  - **Armstrong**
  - **Odd or Even**
- Calculates the sum of the digits of the number.
- Fetches a fun fact about the number from the Numbers API.
- Returns a well-structured JSON response.
- Handles invalid inputs gracefully.

---

## Technologies Used
- **Node.js**: Runtime environment for JavaScript.
- **Express**: Web framework for building the API.
- **Axios**: HTTP client for fetching data from the Numbers API.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Git**: Version control system.
- **GitHub**: Hosting the repository.

---

## API Endpoint
### `GET /api/classify-number`
#### Query Parameters
- `number` (required): The number to classify.

#### Example Request

GET http://localhost:3000/api/classify-number?number=371




## Request and Response Examples
### Success Response (200 OK)
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)
```json
{
  "number": "alphabet",
  "error": true
}
```

---

## How to Run Locally
1. **Clone the Repository**:
   
   git clone https://github.com/DrApkFile/HngStage1Task.git
   cd HngStage1Task


2. **Install Dependencies**:
   
   npm install
  

3. **Start the Server**:
   
   node index.js
   

4. **Test the API**:
   - Use **Postman** or **cURL** to send a request:

     curl "http://localhost:3000/api/classify-number?number=371"
     

## Deployment
This API can be deployed to any cloud platform that supports Node.js applications. Below are instructions for deploying to **Render**:

1. **Create a Render Account**:
   - Sign up at [Render](https://render.com/).

2. **Create a New Web Service**:
   - Connect your GitHub repository to Render.
   - Select the repository for this project.

3. **Configure the Deployment**:
   - Set the **Build Command** to `npm install`.
   - Set the **Start Command** to `node index.js`.

4. **Deploy**:
   - Click **Deploy** and wait for the deployment to complete.
   - Once deployed, you'll receive a public URL for your API.

---


## Author
- **Your Name**
- GitHub: [DrApkFile](https://github.com/DrApkFile)
- Email: aghaken25@gmail.com


## Deployments
Deployed on Render at https://hngstage1task-ya6p.onrender.com
View at  https://hngstage1task-ya6p.onrender.com/api/classify-number?number=371

---

## Acknowledgments
- [Numbers API](http://numbersapi.com/) for providing fun facts about numbers.
- [Express](https://expressjs.com/) for making API development easy.
- [Render](https://render.com/) for seamless deployment.

---

Enjoy using the **Number Classification API**! 😊
```

---

