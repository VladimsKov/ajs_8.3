import Settings from '../basic';

const options = new Settings();
test.each([
  [
    'music', 'rock',
    new Map(
      [
        ['theme', 'dark'],
        ['music', 'rock'],
        ['difficulty', 'easy'],
      ],
    ),
  ],

  [
    'difficulty', 'hard',
    new Map(
      [
        ['theme', 'dark'],
        ['music', 'rock'],
        ['difficulty', 'hard'],
      ],
    ),
  ],

  ['music', 'jazz', 'некорректное значение параметра'],
])('addCustomOptions() test: settings (%s, %s) expect: %s ', (setType, value, expected) => {
  options.inputOptions.customSet = setType;
  options.inputOptions.customValue = value;
  expect(options.addCustomOptions).toEqual(expected);
});
