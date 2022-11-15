import supertest from 'supertest';
const request = supertest('https://simple-books-api.glitch.me');
import { expect } from 'chai';
import { assert } from 'chai';  // Using Assert style
import { should } from 'chai';  // Using Should style
should();  // Modifies `Object.prototype`

it('GET /status', () =>{
        // Make a GET request to get status of bookstore
        return request
        .get('/status')
        .expect(200)
        .then((res) => {
         // assert status returned to equal "OK"
         expect(res.body.status).to.eq('OK');
       });
      });

it('GET /books', () =>{
  // Get request to return all books in bookstore
  return request
  .get('/books')
  .expect(200)
  .then((res) => {
    // assert status returned to equal "OK"
    expect(res.body).to.not.be.null;
    res.body.forEach(element => { element.should.have.property('id'); element.should.have.property('name'); element.should.have.property('type'); element.should.have.property('available');});
    //res.body[0].should.have.property('id');
  });
});

it ('GET /books?type=fiction', () => {
  // Get request to return all books of type fiction
  return request
  .get('/books?type=fiction')
  .expect(200)
  .then((res) => {
    expect(res.body).to.not.be.null;
    res.body.forEach(element => { 
      element.should.have.property('id'); 
      element.should.have.property('name'); 
      element.should.have.property('type'); 
      element.should.have.property('available');
    });
    res.body.forEach(element => { 
      element.type.should.be.eq("fiction"); 
    });
  });
});

it ('GET /books/:bookId', () => {
  // Get request to return book of specified id. In this case id === 1
  const bookid = 1
  return request
  .get('/books/' + bookid)
  .expect(200)
  .then((res) => {
    expect(res.body).to.not.be.null;
    expect(res.body).to.be.an('object');
    res.body.should.have.property('id'); 
    res.body.should.have.property('name'); 
    res.body.should.have.property('type'); 
    res.body.should.have.property('available');
    res.body.id.should.be.eq(1); 
  });
});