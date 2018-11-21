import { expect } from 'chai';
import app from '../lib/index';
import request from 'supertest';

describe('Base API Test', () => {
  it('should return Hello world', done => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);

        done();
      });
  });
});
