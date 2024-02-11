import calculateLife from '../app.js';

test('life', () => {
    const result = calculateLife({name: 'Маг', health: 60});
    expect(result).toBe('healthy');
  });