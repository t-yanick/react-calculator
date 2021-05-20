import operate from '../../logic/operate';

describe('User can perform operations', () => {
  test('Times(X) operation', () => {
    const result = operate('23', '2', 'X');
    expect(result).toEqual('46');
  });

  test('Minus(-) operation', () => {
    const result = operate('12', '2', '-');
    expect(result).toEqual('10');
  });

  test('Plus(+) operation', () => {
    const result = operate('23', '2', '+');
    expect(result).toEqual('25');
  });

  test('Division(÷) operation', () => {
    const result = operate('22', '2', '÷');
    expect(result).toEqual('11');
  });

  test('Division(÷) operation', () => {
    const result = operate('22', '0', '÷');
    expect(result).toEqual('Divide by 0 error');
  });
});