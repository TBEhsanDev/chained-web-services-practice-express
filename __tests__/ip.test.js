const request = require('request');
const url = 'http://localhost/api/';
reqData={'name':'ehsan'}
respJsonWith={"name":"ehsan","ip":"127.0.0.1"}
respJsonWithout={"ip":"127.0.0.1"}
describe("Test ", () => {
    it('with json', function (done) {
        request.post(url, {json: true, body: reqData}, function (error, response) {
            if (response.statusCode==200){
                expect(response.body).toEqual(respJsonWith);
            }else{
                expect(response.statusCode).toEqual(502);
            }
            done();
        });
    });
    it('without json', function (done) {
        request.post(url, {json: true, body:{}}, function (error, response) {
            if (response.statusCode==200){
                expect(response.body).toEqual(respJsonWithout);
            }else{
                expect(response.statusCode).toEqual(502);
            }
            done();
        });
    });
  });
  