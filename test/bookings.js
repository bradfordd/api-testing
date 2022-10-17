import supertest from 'supertest';
const request = supertest('https://restful-booker.herokuapp.com');
import { expect } from 'chai';
//import assert from 'assert';
import assert from 'chai';
//import { expect } from 'chai';

const TOKEN = '0267bb830c6dd5e';

it('GET /booking', () =>{
        // Make a GET request to get all bookings
        return request
        .get('/booking')
        .expect(200)
        .then((res) => {
         // assert data being return to not be empty
         expect(res.body.data).to.not.be.null;
       });
      });

      it('GET /booking/:id', () =>{
        // Make a GET request to get all bookings
        return request
        .get('/booking/3386')
        //.send(data)
        //.expect(200)
        .then((res) => {
         // assert data being return to not be empty
         //console.log(res.body);
         expect(res.body.data).to.not.be.null;
         
        //  res.body.data.forEach((data) => {
        //         expect(data.firstname).to.eq('Edgar');
        //  });
         //expect(res.body.data.firstname).eq('Edgar');
       });
      });