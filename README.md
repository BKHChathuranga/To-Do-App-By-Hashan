# Project Name

This project consists of two sections: a React frontend and a Node.js backend.

## Getting Started

Follow the steps below to set up and run the project on your local environment.

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourproject.git](https://github.com/BKHChathuranga/To-Do-App-By-Hashan
   cd yourproject
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # For the frontend
   cd web
   npm install

   # For the backend
   cd ../api
   npm install
   ```

### Running the Frontend

To run the frontend on your local environment, open a terminal and navigate to the `./web` folder, then execute:
```bash
npm run dev
```

### Running the Backend

To run the backend on your local environment, open a terminal and navigate to the `./api` folder, then execute:
```bash
npm start
```

### Environment Variables

Ensure you have a `.env` file in the root of the `./api` folder with the following values:
```env
PORT = 8000
MONGO_URL = "mongodb+srv://vladhmier246:mK7KbMe8MCyJTYR0@todo.szpuhnk.mongodb.net/"
```

## Project Structure

```
yourproject/
├── web/           # React frontend
│   ├── src/
│   ├── public/
│   └── ...
├── api/           # Node.js backend
│   ├── src/
│   ├── models/
│   └── ...
└── README.md
```

