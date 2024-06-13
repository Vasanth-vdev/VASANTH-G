const request = require('supertest');
const app = require('../../server');

describe('POST /add-to-cart', () => {
  it('should add an item to the cart', async () => {
    const item = {
      itemId: '1',
      price: 10,
      quantity: 2
    };
    const res = await request(app)
      .post('/add-to-cart')
      .send(item);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Item added to cart');
    expect(res.body.cart.total).toBe(20);
    expect(res.body.cart.items.length).toBe(1);
    expect(res.body.cart.items[0]).toMatchObject(item);

    // Close the server after testing
    app.close();
  });
});
