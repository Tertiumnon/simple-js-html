// import { helloUserName } from './index.js';
import { helloUserName } from "./index";
import { expect } from "chai";

// const expect = {
//   toEqual: (actual, expected) => {
//     if (actual !== expected) {
//       throw new Error(`Expected ${expected} but got ${actual}`);
//     }
//   }
// }
expect.toEqual(helloUserName("John"), "Hello, John");
