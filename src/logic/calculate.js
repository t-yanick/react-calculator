import Operate from './Operate';

export default function Calculate(dataObj, buttonName) {
  let { total, next, operation } = dataObj;

  switch (buttonName) {
    case '%':
      if (next) {
        total = Operate(total, next, operation);
        total = Operate(total, '100', '÷');
        next = null;
        operation = null;
      } else {
        total = Operate(total, '100', '÷');
      }
      break;

    case '+/-':
      if (next) {
        next = Operate(next, '-1', 'X');
      } else {
        total = Operate(total, '-1', 'X');
      }
      break;

    case '=':
      if (next) {
        total = Operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;

    case 'AC':
      if (next) {
        next = '0';
      } else if (operation) {
        operation = null;
      } else {
        total = '0';
      }
      break;

    case '.':
      if (next) {
        if (!next.includes('.')) {
          next += '.';
        }
      } else if (operation) {
        next = '0.';
      } else if (!total.includes('.')) {
        total += '.';
      }
      break;

    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next) {
        next += buttonName;
      } else if (operation) {
        next = buttonName;
      } else if (total === '0') {
        total = buttonName;
      } else {
        total += buttonName;
      }
      break;

    default:
      total = Operate(total, next, operation);
      next = null;
      operation = buttonName;
      break;
  }

  return { total, next, operation };
}
