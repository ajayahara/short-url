# Your URL Shortener App

## Description

Your URL Shortener App is a web application that allows users to shorten long URLs, manage their generated short URLs, and more. This README provides comprehensive documentation for both the backend and frontend components.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Cloning the Repository](#cloning-the-repository)
   - [Backend Setup](#backend-setup)
     - [Prerequisites](#prerequisites)
     - [Installation](#installation)
     - [Environment Variables](#environment-variables)
     - [Running the Backend](#running-the-backend)
   - [Frontend Setup](#frontend-setup)
     - [Installation](#installation-1)
     - [Environment Variables](#environment-variables-1)
     - [Running the Frontend](#running-the-frontend)
2. [API Documentation](#api-documentation)
3. [Frontend Documentation](#frontend-documentation)
4. [Contributing](#contributing)
5. [License](#license)

# Getting Started

## Cloning the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/ajayahara/short-url.git
```
### Backend Setup

#### Prerequisites

- Node.js installed
- Pnpm installed
- Mongo DB database

#### Installation

```bash
# Navigate to the backend directory
cd backend
# Install dependencies
pnpm install
```
#### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=3001
URI=your-mongodb-uri
SECRETKEY='your-secret-key'
```

#### Running the Backend
```bash
# Start the backend server
pnpm dev
```
### Frontend Setup

#### Installation

```bash
# Navigate to the frontend directory
cd frontend
# Install dependencies
pnpm install
```

#### Environment Variables

Create a `.env` file in the `frontend` directory with the following variables:

```env
VITE_SERVER=http://localhost:3001
```

#### Running the Frontend
```bash
# Start the developement server
pnpm dev
```
# API Documentation
## Authentication API

The Authentication API provides endpoints for user registration and login.

### 1. Register a New User

### Endpoint: `POST auth/register`

Register a new user with the provided details.

#### Request

- **Method:** `POST`
- **URL:** `auth/register`
- **Headers:**
  - Content-Type: application/json
- **Body:**
  - `userName` (string, required): User's username.
  - `email` (string, required): User's email address.
  - `password` (string, required): User's password.

#### Response

- **Status Code:** 201 Created
- **Body:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```
### 2. Login User

### Endpoint: `POST auth/login`

Login an existing user with the provided email and password.

#### Request

- **Method:** `POST`
- **URL:** `auth/login`
- **Headers:**
  - Content-Type: application/json
- **Body:**
  - `email` (string, required): User's email address.
  - `password` (string, required): User's password.

#### Response

- **Status Code:** 200 OK
- **Body:**
  ```json
  {
    "token": "generated-jwt-token",
    "userName": "user-username"
  }
  ```
### Error Responses

- **400 Bad Request:**
  - If some fields are missing or invalid.

- **401 Unauthorized:**
  - If the user does not exist or invalid credentials.

- **500 Internal Server Error:**
  - If there's an error during registration or login.

## URL API 

### 1. Create Short URL

### Endpoint: `POST url/create`

Create a new short URL with the provided information.

#### Request

- **Method:** `POST`
- **URL:** `url/create`
- **Headers:**
  - Authorization Token: Bearer `<Your_JWT_Token>`
  - Content-Type: application/json
- **Body:**
  - `originalUrl` (string, required): Original URL to be shortened.
  - `title` (string, required): Title for the short URL.
  - `description` (string, required): Description for the short URL.
  - `startDate` (string): Start date for the short URL (optional).
  - `expireDate` (string, required): Expiration date for the short URL.

#### Response

- **Status Code:** 201 Created
- **Body:**
  ```json
  {
    "newUrl": {
      "_id": "generated-url-id",
      "originalUrl": "original-url",
      "userId": "user-id",
      "title": "short-url-title",
      "description": "short-url-description",
      "startDate": "start-date",
      "expireDate": "expire-date",
      "shortId": "generated-short-id",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```
### Error Responses

- **400 Bad Request:**
  - If some fields are missing or invalid.

- **500 Internal Server Error:**
  - If there's an error during the URL creation.
### 2. Get All Shortened URLs

### Endpoint: `GET url/get/all`

Retrieve a paginated list of all shortened URLs for the authenticated user.

#### Request

- **Method:** `GET`
- **URL:** `url/get/all`
- **Headers:**
  - Authorization Token: Bearer `<Your_JWT_Token>`
- **Query Parameters:**
  - `page` (integer): Page number for pagination (optional, default: 1).
  - `limit` (integer): Number of items per page (optional, default: 10).
  - `order` (string): Sort order for items (optional, default: "desc").

#### Response

- **Status Code:** 200 OK
- **Body:**
  ```json
  {
    "shortUrls": [
      {
        "_id": "url-id-1",
        "originalUrl": "original-url-1",
        "userId": "user-id",
        "title": "short-url-title-1",
        "description": "short-url-description-1",
        "startDate": "start-date-1",
        "expireDate": "expire-date-1",
        "shortId": "generated-short-id-1",
        "createdAt": "timestamp-1",
        "updatedAt": "timestamp-1"
      },
      // Additional short URLs...
    ]
  }
  ```
### Error Responses

- **500 Internal Server Error:**
  - If there's an error during the retrieval of shortened URLs.

### 3. Get Shortened URL by ID

### Endpoint: `GET url/get/:id`

Retrieve details of a specific shortened URL by its ID for the authenticated user.

#### Request

- **Method:** `GET`
- **URL:** `url/get/:id`
- **Headers:**
  - Authorization Token: Bearer `<Your_JWT_Token>`
- **URL Parameters:**
  - `id` (string): ID of the shortened URL to retrieve.

#### Response

- **Status Code:** 200 OK
- **Body:**
  ```json
  {
    "shortUrl": {
      "_id": "url-id",
      "originalUrl": "original-url",
      "userId": "user-id",
      "title": "short-url-title",
      "description": "short-url-description",
      "startDate": "start-date",
      "expireDate": "expire-date",
      "shortId": "generated-short-id",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  }
  ```
### Error Responses

- **400 Bad Request:**
  - If the provided ID is invalid.

- **500 Internal Server Error:**
  - If there's an error during the retrieval of the shortened URL.
### 4. Modify Shortened URL by ID

### Endpoint: `PATCH url/modify/:id`

Modify details of a specific shortened URL by its ID for the authenticated user.

#### Request

- **Method:** `PATCH`
- **URL:** `url/modify/:id`
- **Headers:**
  - Authorization Token: Bearer `<Your_JWT_Token>`
  - Content-Type: application/json
- **URL Parameters:**
  - `id` (string): ID of the shortened URL to modify.
- **Body:**
  ```json
  {
    "title": "new-title",
    "description": "new-description",
    "expireDate": "new-expire-date"
  }
  ```
  #### Response

- **Status Code:** 200 OK
- **Body:**
  ```json
  {
  "message": "Shortened URL updated"
  }
  ```
### Error Responses

- **400 Bad Request:**
  - If the provided ID is invalid.

- **500 Internal Server Error:**
  - If there's an error during the retrieval of the shortened URL.

### 5. Delete Shortened URL by ID

### Endpoint: `DELETE url/delete/:id`

Delete a specific shortened URL by its ID for the authenticated user.

#### Request

- **Method:** `DELETE`
- **URL:** `url/delete/:id`
- **Headers:**
  - Authorization Token: Bearer `<Your_JWT_Token>`
- **URL Parameters:**
  - `id` (string): ID of the shortened URL to delete.

#### Response

- **Status Code:** 200 OK
- **Body:**
  ```json
  {
    "message": "Shortened URL along with visitors deleted"
  }
  ```

### Error Responses

- **400 Bad Request:**
  - If the provided ID is invalid.

- **500 Internal Server Error:**
  - If there's an error during the retrieval of the shortened URL.

### 6. Redirect URL

Redirects to the original URL associated with the given short ID.

#### Endpoint

- **Method:** GET
- **URL:** `/:shortId`

#### Request Parameters

- `shortId` (string, required): Short ID associated with the URL.

#### Response

- **Status Code:** 302 Found (Redirect)
- **Redirect:** Redirects to the original URL

#### Error Response

- **Status Code:** 400 Bad Request
  - **Message:** No short URL found with this short ID.

- **Status Code:** 500 Internal Server Error
  - **Error:** Error while finding all visitors.

## Visitors API

### 1. Get all visitors

API for retrieving visitor information related to a specific URL.

#### Endpoint

- **Method:** GET
- **URL:** `/get/:urlId`

#### Request Parameters

- `urlId` (string, required): ID of the URL for which visitor information is requested.

#### Authorization

This endpoint requires authorization.

#### Response

- **Status Code:** 200 OK
- **Body:** JSON object containing the array of visitors.

```json
{
  "visitors": [
    {
      "ipAddress": "127.0.0.1",
      "urlId": "urlId1",
      "referFrom": "http://referer.com",
      "createdAt": "2023-01-01T12:00:00.000Z"
    },
    // Additional visitors...
  ]
}
  ```
  #### Error Response

- **Status Code:** 400 Bad Request
  - **Message:** No short URL found with this ID.

- **Status Code:** 500 Internal Server Error
  - **Error:** Error while finding all visitors.

## Frontend Documentation

1. [Project Structure](#project-structure)
2. [Key Components](#key-components)
3. [Screenshots](#screenshots)
4. [Main Libraries](#main-libraries)

### Project Structure

The frontend of the project is organized into the following pages:

- Login
- Register
- Home
- About
- All URLs
- Details
- Not Found

### Key Components

1. **Login Page**
   - Form for user login.
   ![Login Page](/screenshots/login.png)

2. **Register Page**
   - Form for user registration.
  ![Register Page](/screenshots/register.png)
3. **Home Page**
   - Form to generate a short URL.
   ![Home Page](/screenshots/home.png)

4. **About Page**
   - Provides information on the usage and features of the website.
  ![About Page](/screenshots/about.png)
5. **All URLs Page**
   - Displays all URLs created by the user.
   - Allows modification and deletion of URLs.
  ![All URLs Page](/screenshots/all-url.png)

6. **Details Page**
   - Shows detailed information about a specific URL.
   - Includes visitor information.
  ![Details Page](/screenshots/detail.png)

7. **Not Found Page**
   - Displays when a route is not found.
  ![Details Page](/screenshots/not-found.png)

### Main Libraries

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): Declarative routing for React.js.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.

## Contributing

Thank you for considering contributing to our project! Whether it's reporting a bug, suggesting a feature, or submitting a pull request, we appreciate your involvement. To contribute, please follow these guidelines:

- **Bug Reports:** If you encounter any issues, please create a detailed bug report with information on how to reproduce the problem.

- **Feature Requests:** If you have ideas for new features or improvements, feel free to submit a feature request. Describe the proposed functionality and its use case.

- **Pull Requests:** We welcome contributions! If you have code changes you'd like to make, open a pull request with a clear description of the changes.

### How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push the changes to your branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
