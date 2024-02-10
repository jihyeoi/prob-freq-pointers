"use strict";

// add whatever parameters you deem necessary & write doc comment

/**
 * get a word, want to determine if we can make the word using the letters
 * frequency matters
 *
 * inputs: two strings, word and letters
 * returns boolean
 *  true if you can make the word
 *  false if you can't make the word
 *
 * ('word', 'letters')
 * ('aa', 'abc') => false
 * ('abc', 'dcba') => true
 * ('aabb', 'bcabad') => true
 *
 * frequency counter for both strings
 * iterate through frequency counter of word
 * if key exists in letters and value in letters is >= value in word
 *      if this fails, return false
 * otherwise return true
 *
 */

/** Stores frequency of each letter of a string in an object. */

function frequencyCounter(string) {
  let frequency = {};

  for (const letter of string) {
    const curr = frequency[letter] || 0;
    frequency[letter] = curr + 1;
  }
  return frequency;
}

/** Accepts two strings, word and letters,
 * and returns true if word can be constructed with the provided letters
 * time complexity: O(2w + k)
 * */

function canConstructWord(word, letters) {
  if (!letters) return false;

  const wordFreq = frequencyCounter(word);
  const lettersFreq = frequencyCounter(letters);

  for (let letter in wordFreq) {
    if (!(letter in lettersFreq)) return false;
    if (wordFreq[letter] > lettersFreq[letter]) return false;
  }

  return true;
}