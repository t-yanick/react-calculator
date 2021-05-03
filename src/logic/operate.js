import Big from 'big.js';

function Operate(numberOne, numberTwo, operation) {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);

  let valueArg;

  if (operation === 'X') {
    valueArg = numOne.times(numTwo);
  }
  if (operation === '-') {
    valueArg = numOne.minus(numTwo);
  }
  if (operation === '+') {
    valueArg = numOne.plus(numTwo);
  }
  if (operation === '÷') {
    valueArg = numOne.div(numTwo);
  }

  return valueArg.toString();
}

export default Operate;
