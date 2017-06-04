var assert=require("chai").assert,//properties
    expect=require("chai").expect,//properties
    should=require("chai").should()//method
    var supertest=require("supertest");

var server=supertest.agent("http://localhost:8081");
describe("Testing Contact list API",function(){
	it("should get all contacts",function(done){
		server.get("/getContacts")
		      .expect(200)
		      .expect('content-type',/json/)
		      .end(function(err,res){
		      	console.log(res.body);
		      	res.body.forEach(function(data){
		      		
		      		data.should.have.property("name")
		      		data.should.have.equal("shiva")
		      		//data.name.should
		      	})
		      	done();
		      })
      	})

	
});

