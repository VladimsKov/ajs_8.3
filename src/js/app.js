// TODO: write your code here
import Settings from './basic';

const options = new Settings();

options.inputOptions
  .set('music', 'chillout')
  .set('difficulty', 'nightmares');

// console.log(options.addCustomOptions);

options.inputOptions
  .set('theme', 'gray')
  .set('music', 'chillout')
  .set('difficulty', 'hard');

// console.log(options.addCustomOptions);
