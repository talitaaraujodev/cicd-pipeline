const express = require("express");

const app = express();

const PORT = 5000;

const products = [
  { id: "1", name: "Product 1", price: 10 },
  { id: "2", name: "Product 2", price: 20 },
  { id: "3", name: "Product 3", price: 12 },
  { id: "4", name: "Product 4", price: 15 },
  { id: "5", name: "Product 5", price: 27 },
  { id: "6", name: "Product 6", price: 29 },
  { id: "6", name: "Product 7", price: 11 },
];
app.get("/", (req, res) => {
  res.json({
    status: 200,
    success: true,
    message: "Hello world!!!",
  });
});

app.get("/products", (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    products: products,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
