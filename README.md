# E-commerce Platform with CSV to JSON Transformation

This project includes an Express server for adding items to a shopping cart and a script to convert CSV product data to JSON.

## Features

1. Express Server:
    - Endpoint `/add-to-cart` to add items to a cart via POST requests.
    - Updates the cart total in a JSON object.

2. CSV to JSON Script:
    - Reads product data from a CSV file and converts it to JSON.
    - Handles errors like missing files or invalid data.
    - Accepts input and output file paths as command-line arguments.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Vasanth-vdev/VASANTH-G.git
    cd API
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### Running the Express Server

1. Start the server:
    ```bash
    node server.js
    ```

2. The server runs on `http://localhost:3000`.

3. Use an HTTP client (e.g., Postman) to send a POST request to `http://localhost:3000/add-to-cart` with JSON data:
    ```json
    {
        "itemID": 1,
        "price": 0.50,
        "quantity": 2
    }
    ```

### Running the CSV to JSON Script

1. Make sure you have a `sample.csv` file in the root directory or provide the correct path.

2. Run the script:
    ```bash
    node CSVtoJSON/file-processing.js sample.csv sample.json
    ```

3. The JSON data will be saved to `sample.json`.

## Testing

1. Run the tests with:
    ```bash
    npm test
    ```

2. Ensure the server is not running separately, as the tests handle starting and stopping it.

## Example `sample.csv`

```csv
productID,name,price,quantity,category
1,Apple,0.50,100,Fruit
2,Banana,0.30,150,Fruit
3,Carrot,0.20,200,Vegetable
4,Tomato,0.40,120,Vegetable
5,Bread,1.50,80,Bakery
6,Milk,1.00,90,Dairy
7,Cheese,2.50,60,Dairy
8,Chicken,5.00,50,Meat
9,Beef,7.00,40,Meat
10,Salmon,10.00,30,Seafood

## Example `sample.json`

```json
[
  {
    "productID": 1,
    "name": "Apple",
    "price": 0.50,
    "quantity": 100,
    "category": "Fruit"
  },
  {
    "productID": 2,
    "name": "Banana",
    "price": 0.30,
    "quantity": 150,
    "category": "Fruit"
  },
  {
    "productID": 3,
    "name": "Carrot",
    "price": 0.20,
    "quantity": 200,
    "category": "Vegetable"
  }
]
