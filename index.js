// function greetingDuaOrang(param1, param2) {
//   return `hello ${param1}, hai ${param2}`;
// }

// const sapa = greetingDuaOrang("Mei", "Aldo");

function countDiskon(diskon) {
  const clothPrice = 250000;
  const counter = clothPrice - (clothPrice * diskon) / 100;

  return counter;
}

const januari = countDiskon(10);
const februari = countDiskon(40);
const maret = countDiskon(70);

// console.log(januari);

// function penghitungUsia(kelahiran) {
//   let d = new Date();
//   const tahun = d.getFullYear();
//   const usia = tahun - kelahiran;

//   return usia;
// }

// const aldo = penghitungUsia(1990);
// const mei = penghitungUsia(1993);

// console.log(aldo);
// console.log(mei);

const pow = (param1, param2) => {
  math = Math.pow(param1, param2);

  return math;
};

const angka = pow(4, 4);

console.log(angka);
