"use strict";

const app = require("../../src/app.js");
const chai = require("chai");
const expect = chai.expect;
var event, context;

describe("Tests Gather Call Handler", function () {
  it("Verifies ", async () => {
    const result = await app.gatherCallHandler(event, context);

    expect(result).to.be.an("object");
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.an("string");

    let response = JSON.parse(result.body);

    expect(response).to.be.an("object");
    expect(response.message).to.be.equal("hello world");
    // expect(response.location).to.be.an("string");
  });
});
