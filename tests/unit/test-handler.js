'use strict';

const createItemHandler = require('../../src/index');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests Gather Call Handler', function () {
  it('Verifies ', async () => {
    const result = await index.createItemHandler(event, context);

    expect(result).to.be.an('object');
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.an('string');

    let response = JSON.parse(result.body);

    expect(response).to.be.an('object');
    expect(response.message).to.be.equal('hello world');
    // expect(response.location).to.be.an("string");
  });
});
