import Operate from './Operate';

function Calculate(dataObj, buttonName) {
  let { total, next, operation } = dataObj;

  switch (buttonName) {
    case '%':
      if (next) {
        total = Operate(total, next, operation);
        total = Operate(total, '100', '÷');
        next = null;
        operation = null;
      } else {
        total = Operate(total, '100', '÷')
      }
      break;
  }
}

export default Calculate;