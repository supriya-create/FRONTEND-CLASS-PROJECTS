import {addition, PI} from "./calculation.js";
import info from "./information.js";    //when default is used no need of {}
import { addition as ad, PI as P } from "./calculation.js";   //rename when default is not present

import i from "./information.js";    //rename when default is there

console.log(addition(2,3,4));
console.log(PI);

console.log(ad(2,3,4));
console.log(P);


info();
i();