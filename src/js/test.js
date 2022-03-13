
let n = 25;

function a() {
  let n = 24;
  b();
}

function b() {
  console.log(`I am ${n} years old.`);
  
}

export default a;