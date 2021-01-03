const number1 = 103;
const number2 = 72;
const number3 = 189;

const getMax = (a, b, c) => {
  if(a > b && a > c){
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

const max = getMax(number1, number2, number3);

console.log(`最大値は${max}です`);
