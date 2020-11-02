const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", ()=> {
  it("should return 2 for result.length", ()=> {
    const result = tail(["Hello", "Lighthouse", "Labs"]);

    assert.strictEqual(result.length, 2);
  });

  it(`should return "Lighthouse" for result[0]`, ()=> {
    const result = tail(["Hello", "Lighthouse", "Labs"]);

    assert.strictEqual(result[0], "Lighthouse");
  });

  it(`should return 3 for words.length`, ()=> {
    const words = ["Yo Yo", "Lighthouse", "Labs"];;
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it(`should return 3 for words.length`, ()=> {
    const words = ["Yo Yo", "Lighthouse", "Labs"];;
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});