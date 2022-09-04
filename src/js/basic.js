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

    this.inputOptions = new Map();
    this.outputOptions = new Map(this.defOptions.entries());
  }

  get addCustomOptions() {
    this.errors = [];
    for (const customSet of this.inputOptions.keys()) {
      if (this.customOptions.get(customSet)
        .includes(this.inputOptions.get(customSet)) || this.defOptions
        .get(customSet) === this.inputOptions.get(customSet)) {
        this.outputOptions.set(customSet, this.inputOptions.get(customSet));
      } else this.errors.push(customSet);
    }
    this.inputOptions.clear();
    if (!this.errors.length) return this.outputOptions;
    return `Некорректные значения параметров: ${this.errors.join(', ')}`;
  }
}
