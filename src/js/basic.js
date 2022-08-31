// Homework ajs_8.3
export default class Settings {
  constructor() {
    this.defOptions = new Map();
    this.defOptions
      .set('theme', 'dark')
      .set('music', 'trance')
      .set('difficulty', 'easy');

    this.customOptions = new Map();
    this.customOptions
      .set('theme', ['light', 'gray'])
      .set('music', ['pop', 'rock', 'chillout', 'off'])
      .set('difficulty', ['normal', 'hard', 'nightmare']);

    this.inputOptions = {
      customSet: '',
      customValue: '',
    };

    this.outputOptions = new Map(this.defOptions.entries());
  }

  get addCustomOptions() {
    if (this.customOptions.get(this.inputOptions.customSet)
      .includes(this.inputOptions.customValue)) {
      return this.outputOptions
        .set(this.inputOptions.customSet, this.inputOptions.customValue);
    }
    return 'некорректное значение параметра';
  }
}
