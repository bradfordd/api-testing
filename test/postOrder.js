import supertest from 'supertest';
const request = supertest('https://simple-books-api.glitch.me');
import { expect } from 'chai';
import { assert } from 'chai';  // Using Assert style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

const accessToken = 'e35e9784bdb35ac50d0688cc817d901b510684c2d7886a681584a68a9212941c'

var orderPlaced

it('POST /orders', () =>{
        // POST a new order to the database
        const requestHeaders = {
          bookId: 1,
          customerName: "John Doe"
        };
        return request
        .post('/orders')
        .set('Authorization', `Bearer ${accessToken}`)
        .send(requestHeaders)
        .expect(201)
      });

it('GET /orders', () =>{
  // Make a GET request to get all orders in the database
  return request
  .get('/orders')
  .set('Authorization', `Bearer ${accessToken}`)
  .expect(200)
  .then((res) => {
    res.body.forEach(element => { 
      element.should.have.property('bookId');
      if (element.bookId == 1) {
        orderPlaced = element
      } 
  });
 });
});

it('DELETE /orders/:orderId', () =>{
  //console.log(orderPlaced)
  // Make a DELETE request to delete the order that we have created
  return request
  .delete('/orders/' + orderPlaced.id)
  .set('Authorization', `Bearer ${accessToken}`)
  .expect(204)
 });

