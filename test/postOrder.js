import supertest from 'supertest';
const request = supertest('https://simple-books-api.glitch.me');
import { expect } from 'chai';
import { assert } from 'chai';  // Using Assert style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

const accessToken = 'e35e9784bdb35ac50d0688cc817d901b510684c2d7886a681584a68a9212941c'

const authorization = {
  token: accessToken
};

it('GET /orders', () =>{
        // Make a GET request to get all orders in the database
        return request
        .get('/orders')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200)
        .then((res) => {
          // assert status returned to equal "OK"
         // expect(res.body.status).to.eq('OK');
       });
      });