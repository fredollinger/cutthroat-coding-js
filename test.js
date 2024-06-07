// 3rd party requires
var assert = require('assert');
var cloneDeep = require('lodash.clonedeep');

// Local requires
var array = require('./array.js');
var strings = require('./strings.js');
var cutmath = require('./cutmath.js');
var leetcode = require('./leetcode.js');
var sorting = require('./index.js');

describe('Select Sort', function() {
    it('should sort an array', function(){
      var arr = cloneDeep(array.unsorted1);
      sorting.SelectSort(arr);
      assert.equal(sorting.AreArraysEqual(array.sorted1, arr), true);
    });
});

describe('AreArraysEqual', function() {
    it('check empty array1', function(){
      var arr1 = [];
      var arr2 = [0, 1 ,2];
      assert.equal(sorting.AreArraysEqual(arr1, arr2), false);
    });
});

describe('AreArraysEqual', function() {
    it('check empty array2', function(){
      var arr1 = [0, 1 ,2];
      var arr2 = [];
      // assert.equal(sorting.AreArraysEqual(arr1, arr2), false);
    });
});

describe('AreArraysEqual', function() {
    it('check both empty arrays', function(){
      var arr1 = [];
      var arr2 = [];
      assert.equal(sorting.AreArraysEqual(arr1, arr2), true);
    });
});

describe('AreArraysEqual', function() {
    it('check empty array2', function(){
      var arr1 = [0, 1];
      var arr2 = [0, 1 ,2];
      assert.equal(sorting.AreArraysEqual(arr1, arr2), false);
    });
});

describe('AreArraysEqual', function() {
    it('check equal arrays', function(){
      var arr1 = [0, 1, 2];
      var arr2 = [0, 1 ,2];
      assert.equal(sorting.AreArraysEqual(arr1, arr2), true);
    });
});

describe('AreArraysEqual', function() {
    it('check empty array2', function(){
      var arr1 = [0, 1, 2];
      var arr2 = [0, 1, 3];
      assert.equal(sorting.AreArraysEqual(arr1, arr2), false);
    });
});

describe('CamelCaseFunction', function() {
    it('strings are equal', function(){
      var before1 = "the-stealth-warrior";
      var expected1 = "theStealthWarrior";
      assert.equal(strings.CamelCase(before1), expected1);
    });
});

describe('FibonacciSequence', function() {
    it('calculate Fibonacci Sequence', function() {
	    const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
      for (let i = 0; i < fibs.length; i++) {
        assert.equal(fibs[i], cutmath.FibonacciSequence(i));
      }
    });
});

// https://leetcode.com/problems/two-sum/
describe('TwoSum', function() {
    it('Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', function(){
        var target = 9;
        var nums = [2,7,11,15];
        var output = [1,0];
	      var actual = cutmath.twoSum(nums, target);
    });
});


https://leetcode.com/problems/roman-to-integer/description/
describe('RomanToInteger', function() {
    const d = {};
    d["III"] = 3;
    // d["LVIII"] = 58;
    // d["MCMXCIV"] = 1994;
    it('Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.', function(){
        for (var key in d) {
            assert.equal(d[key], leetcode.romanToInteger(key));
	}
    });
});
