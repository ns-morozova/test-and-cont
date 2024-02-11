import calculateLife from '../app.js';

test('life', () => {
    const result = calculateLife({name: 'Маг', health: 5});
    expect(result).toBe('critical');
  });