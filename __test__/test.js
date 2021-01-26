import { bigram } from '../src/bigram.js';
import { writeFile } from '../src/writeFile.js';
/*Test suit for  bigram function*/

/*1 TEST SUIT*/
describe('bigram - basic functionality', () =>{
  /*Test case 1*/
  test('returns an empty object when passed an empty string',()=>{
    const expected = {};
    const actual = bigram('')
    expect(expected).toEqual(actual);
  })
  /*Test case 2*/
  test('returns  object with six properties when passed string with nine words',()=>{
    const expected = {
      "the quick": 2,
      "quick brown": 1,
      "brown fox": 1,
      "fox and": 1,
      "and the": 1,
      "quick blue": 1,
      "blue hare": 1

    };
    const actual = bigram('the quick brown fox and the quick blue hare')
    expect(expected).toMatchObject(actual);
  })
})

/*2 TEST SUIT*/
describe('writeFile - basic functionality', () =>{
  /*Test case 1*/
  test('returns an empty string when passed an empty object',()=>{
    const expected = "File is empty";
    const actual = writeFile({})
    expect(expected).toEqual(actual);
  })
  test('returns  object with six properties when passed string with nine words',()=>{
    const expected =`<li>"the quick" 2</li><li>"quick brown" 1</li><li>"brown fox" 1</li><li>"fox and" 1</li><li>"and the" 1</li><li>"quick blue" 1</li><li>"blue hare" 1</li>`
    const actual = {
      "the quick": 2,
      "quick brown": 1,
      "brown fox": 1,
      "fox and": 1,
      "and the": 1,
      "quick blue": 1,
      "blue hare": 1
    };
    const input = writeFile(actual)
    expect(expected).toEqual(input);
  })
 })
