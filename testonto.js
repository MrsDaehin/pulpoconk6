import { testtonto } from "./tests/testtonto.js";
import {
  describe,
  expect,
} from "https://jslib.k6.io/k6chaijs/4.3.4.2/index.js";


export const options = {};

globalThis.vars = [];

globalThis.pauseMin = 5;
globalThis.pauseMax = 15;

export default function main() {
 
  describe("testtonto", () => {
   
    var test = testtonto();
    
    console.log(test.status);
    
    //expect(test.status, "test status").to.equal(200);
    expect(JSON.parse(test.body).status, 'status code').to.equal('200.');
    expect(test).to.have.validJsonBody();
});
}
