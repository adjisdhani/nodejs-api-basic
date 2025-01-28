# Node.js API Basic

This project demonstrates a simple Node.js API with CRUD operations for managing a book database. Follow the steps below to set up and run the project on your local machine.

## Getting Started

### Prerequisites
Ensure that you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14.x or later is recommended)
- npm (comes with Node.js)
- Git

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/adjisdhani/nodejs-api-basic
   ```

2. **Navigate to the Project Folder**:
   ```bash
   cd nodejs-api-basic
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Server**:
   ```bash
   node index.js
   ```
   The server will start and run on `http://localhost:3000`.

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

#### 1. Get All Books
- **Method**: `GET`
- **URL**: `/books`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925
    },
    {
      "id": 2,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960
    }
  ]
  ```

#### 2. Get a Single Book
- **Method**: `GET`
- **URL**: `/books/:id`
- **Response**:
  ```json
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  }
  ```

#### 3. Add a New Book
- **Method**: `POST`
- **URL**: `/books`
- **Body**:
  ```json
  {
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  }
  ```
- **Response**:
  ```json
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  }
  ```

#### 4. Update a Book
- **Method**: `PUT`
- **URL**: `/books/:id`
- **Body**:
  ```json
  {
    "title": "Nineteen Eighty-Four"
  }
  ```
- **Response**:
  ```json
  {
    "id": 3,
    "title": "Nineteen Eighty-Four",
    "author": "George Orwell",
    "year": 1949
  }
  ```

#### 5. Delete a Book
- **Method**: `DELETE`
- **URL**: `/books/:id`
- **Response**:
  ```json
  {
    "id": 3,
    "title": "Nineteen Eighty-Four",
    "author": "George Orwell",
    "year": 1949
  }
  ```

## Testing the API
You can test the API using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/). Below are examples of how to test each endpoint:

### Example using cURL
- **Get all books**:
  ```bash
  curl -X GET http://localhost:3000/books
  ```
- **Add a new book**:
  ```bash
  curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "1984", "author": "George Orwell", "year": 1949}'
  ```

## Contributing
If you'd like to contribute, feel free to submit a pull request or open an issue on the repository.

---

### Notes
- Ensure the server is running before making requests.
- For any questions or support, feel free to reach out via the repository's issue tracker.

Enjoy exploring the API!

