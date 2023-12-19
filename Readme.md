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

## Getting Started

### Cloning the Repository

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
MONGODB_URI=your-mongodb-uri
```

#### Running the Backend
```bash
# Start the backend server
pnpm dev
```
### Frontend Setup

#### Installation

```bash
# Navigate to the backend directory
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
## API Documentation
## Frontend Documentation
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
