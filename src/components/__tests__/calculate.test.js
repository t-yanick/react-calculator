import calculate from '../../logic/calculate';

describe('User presses AC key', () => {
  test('Clear everything', () => {
    expect(calculate({
      total: '10', next: '7', operation: '+',
    }, 'AC')).toEqual({
      total: null, next: null, operation: null,
    });
  });
  test('Clear everything', () => {
    expect(calculate({
      total: '10', next: '7', operation: '+',
    }, 'AC')).not.toEqual({
      total: '10', next: '7', operation: '+',
    });
  });
});

describe('User can enter a number', () => {
  test('Number from 0-9', () => {
    let buttonName = '6';
    let result = calculate({
      total: null, next: null, operation: null,
    }, buttonName);
    expect(result.next).toEqual('6');
    buttonName = '2';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('62');
  });
});

describe('User can get an answer', () => {
  test('When user presses =', () => {
    const result = calculate({
      total: '33', next: '22', operation: '-',
    }, '=');
    expect(result.total).toEqual('11');
  });
});

describe('User can enter a decimal number', () => {
  test('When user presses (.)', () => {
    let buttonName = '6';
    let result = calculate({
      total: null, next: null, operation: null,
    }, buttonName);
    expect(result.next).toEqual('6');
    buttonName = '.';
    result = calculate(result, buttonName);
    buttonName = '2';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('6.2');
  });
});

describe('User can enter a negative number', () => {
  test('When user presses (+/-)', () => {
    let buttonName = '6';
    let result = calculate({
      total: null, next: null, operation: null,
    }, buttonName);
    expect(result.next).toEqual('6');
    buttonName = '+/-';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('-6');
  });
});

describe('User can get percentages in decimal', () => {
  test('When user presses (%)', () => {
    let buttonName = '6';
    let result = calculate({
      total: null, next: null, operation: null,
    }, buttonName);
    expect(result.next).toEqual('6');
    buttonName = '%';
    result = calculate(result, buttonName);
    expect(result.next).toEqual('0.06');
  });
});
