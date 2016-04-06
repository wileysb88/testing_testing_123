var chai = require('chai');       // requires chai bd library
var expect = chai.expect;         // require the expect chai library
var db = db  || {};               // mock database object - aka namespace


// describe a set of tests
describe('How BDD testing should work for newbies', function(){

  // callbacks contain tests
  // IT is a tests
  it('should have a passing grade in mocha', function(){
    var grade = 8; // 8 out of 10 to pass
    expect(grade).to.be.above(7);

  })

})
