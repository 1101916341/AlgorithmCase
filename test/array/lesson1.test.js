import telInit from '../../code/array/lesson1'

test('23', () => {
  expect(telInit('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})
