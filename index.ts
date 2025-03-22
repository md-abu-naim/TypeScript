// @ts-check
/** @type {number} */
var x;
 
x = 0; // OK
x = false; // Not OK


// @ts-check
/** @type {number} */
var x;
 
x = 0; // OK
x = false; // Not OK


class C {
    constructor() {
      /** @type {number | undefined} */
      this.prop = undefined;
      /** @type {number | undefined} */
      this.count;
    }
  }
   
  let c = new C();
  c.prop = 0; // OK
  c.count = "string";