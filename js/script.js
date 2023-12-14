// Dado um array de inteiros,
// retorne a média dos três maiores números que sejam menores
// que 30 e dos três menores números que sejam maiores que 50.
// soma dos numeros dividido pela quantidade

const arrInt = [5, 7, 9, 12, 23, 27, 29, 30, 50, 76, 91, 90, 95, 83];

const arrfilterThirty = arrInt.filter((a) => a < 30);

const arrSort = arrfilterThirty.sort((a, b) => b - a);

const menorQue30 = arrSort.slice(0, 3);

console.log(arrSort);
console.log(menorQue30);

const arrfilterFifty = arrInt.filter((a) => a > 50);
const arrFiftySort = arrfilterFifty.sort((a, b) => a - b);
console.log(arrFiftySort);

const sliceArrayFifty = arrFiftySort.slice(0, 3);
console.log(sliceArrayFifty);

const mediaTresMaiores = menorQue30.reduce((a, b) => a + b, 0) / 3;
const mediaTresMenores = sliceArrayFifty.reduce((a, b) => a + b, 0) / 3;

console.log(`Media dos 3 maiores menores que 30: ${mediaTresMaiores}`);
console.log(`Media dos 3 menores maiores que 50: ${mediaTresMenores}`);