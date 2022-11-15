import supertest from 'supertest';
const request = supertest('https://simple-books-api.glitch.me');
import { expect } from 'chai';
import { assert } from 'chai';  // Using Assert style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

function makename(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

it('POST /api-clients', () =>{
  // Make a GET request to get status of bookstore
  const randomName = makename(6);
  const randomEmail = randomName + "@example.com";
  const task = {
    clientName: randomName,
    clientEmail: randomEmail
  };
  return request
  .post('/api-clients')
  .send(task)
  .expect(201)
  .then((res) => {
    res.body.should.have.property('accessToken'); 
 });
});