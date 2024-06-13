const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample cart object
let cart = {
  total: 0,
  items: []
};

// Add to cart endpoint
app.post('/add-to-cart', (req, res) => {
  const { itemId, price, quantity } = req.body;

  // Update cart total
  cart.total += price * quantity;

  // Add item to cart
  cart.items.push({ itemId, price, quantity });

  res.json({ message: 'Item added to cart', cart });
});

// Export the server instance
module.exports = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
