import calculateLife from '../app.js';

test('life', () => {
    const result = calculateLife({name: 'Маг', health: 20});
    expect(result).toBe('wounded');
  });