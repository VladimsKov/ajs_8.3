import Settings from '../basic';

const options = new Settings();
test.each([
  [
    new Map([
      ['music', 'rock'],
      ['difficulty', 'nightmare'],
    ]),
    new Map([
      ['theme', 'dark'],
      ['music', 'rock'],
      ['difficulty', 'nightmare'],
    ]),
  ],

  [
    new Map([
      ['theme', 'gray'],
      ['music', 'chillout'],
    ]),
    new Map([
      ['theme', 'gray'],
      ['music', 'chillout'],
      ['difficulty', 'nightmare'],
    ]),
  ],

  [
    new Map([
      ['theme', 'dark'],
      ['music', 'pops'],
      ['difficulty', 'normals'],
    ]),
    'Некорректные значения параметров: music, difficulty',
  ],
])('addCustomOptions() test: settings (%s) expect: %s ', (inputMap, expected) => {
  for (const key of inputMap.keys()) {
    options.inputOptions.set(key, inputMap.get(key));
  }
  expect(options.addCustomOptions).toEqual(expected);
});
