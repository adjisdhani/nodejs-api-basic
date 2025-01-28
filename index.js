// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory data storage
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];

// Routes

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Get a single book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// Add a new book
app.post('/books', (req, res) => {
  const { title, author, year } = req.body;
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    year
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author, year } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.year = year || book.year;

  res.json(book);
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).json({ message: 'Book not found' });

  const deletedBook = books.splice(bookIndex, 1);
  res.json(deletedBook);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
