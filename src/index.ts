import { sum } from "./tool/math.js";

// imports using package.json imports field
import { jammed } from "#jamming";
import tool from "#tool";
import { sub } from "#tool";

console.log(jammed);
console.log(sum(20, 40));
console.log(tool);
console.log(sub(50, 49));
