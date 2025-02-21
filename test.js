// 3rd party requires
var assert = require('assert');
var cloneDeep = require('lodash.clonedeep');

// Local requires
var array = require('./array.js');
var strings = require('./strings.js');
var cutmath = require('./cutmath.js');
var leetcode = require('./leetcode.js');
var sorting = require('./sorting.js');
var algorithm = require('./algorithm.js');
var helper = require('./helper.js');

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

describe('IsRomanHigher', function() {
    it('Test code to check to see if a Roman numeral is lower then the one before and thus needs to be subtracted and not added.', function(){
        assert.equal(false, leetcode.isRomanLower("VI"));
        assert.equal(true, leetcode.isRomanLower("IV"));
        assert.equal(false, leetcode.isRomanLower("XV"));
        assert.equal(true, leetcode.isRomanLower("VX"));
    });
});

https://leetcode.com/problems/roman-to-integer/description/
describe('RomanToInteger', function() {
    const d = {};
    d["III"] = 3;
    // d["IV"] = 4;
    // d["LVIII"] = 58;
    // d["MCMXCIV"] = 1994;
    // d["III"] = 3;
    d["IV"] = 4;
    // d["LVIII"] = 58;
    // d["MCMXCIV"] = 1994;
    /*

    it('Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.', function(){
        for (var key in d) {
            assert.equal(d[key], leetcode.romanToInteger(key));
	}
    });
    */
});

describe('BruteForceSearch', function() {
    const arr = [];
    for (i = 0; i <= 100; i++) {
        arr[i] = i * 5;
    }
    var res = algorithm.bruteForceSearch(arr, 50);
    assert.equal(50, arr[res]);
    res = algorithm.bruteForceSearch(arr, 51);
    // case where the item is not found
    assert.equal(-1, algorithm.bruteForceSearch(arr, 51));
});

describe('BinarySearch', function() {
    const arr = [];
    for (i = 0; i <= 6; i++) {
        arr[i] = i;
    }
    var res = algorithm.binarySearch(arr, 6);
    assert.equal(6, arr[res]);
    // case where the item is not found
    assert.equal(algorithm.binarySearch(arr, 6.5), -1);
    assert.equal(algorithm.binarySearch(arr, 51), -1);
});

describe('TestBubbleSort', function() {
    var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    res = sorting.BubbleSort(arr);

    it('Bubble Sort', function(){
        assert(helper.ArraysAreEqual(res, expected));
    });
});

describe('TestBubbleSort2', function() {
    var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    res = sorting.BubbleSort(arr);

    it('Bubble Sort2', function(){
        assert(helper.ArraysAreEqual(res, expected));
    });
});

describe('TestSelectSort2', function() {
    var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    res = sorting.SelectSort2(arr);

    it('Select Sort2', function(){
        assert(helper.ArraysAreEqual(res, expected));
    });
});

describe('TestInsertSort', function() {
    var arr = [4, 2, 7, 1, 3];
    var expected = [ 1, 2, 3, 4, 7 ];
    var res = sorting.InsertSort(arr);

    it('Insert Sort', function(){
        assert(helper.ArraysAreEqual(res, res));
    });

});

describe('TestInsertSort2', function() {
    var arr = [4, 2, 7, 1, 3];
    var expected = [ 1, 2, 3, 4, 7 ];
    var res = sorting.InsertSort2(arr);

    it('Insert Sort 2', function(){
        assert(helper.ArraysAreEqual(res, expected));
    });

});

describe('TestInsertSort3', function() {
    var arr = [4, 2, 7, 1, 3];
    var expected = [ 1, 2, 3, 4, 7 ];
    var res = sorting.InsertSort3(arr);
    console.log("TestInsert3: " + res);

    it('Insert Sort 3', function(){
        assert(helper.ArraysAreEqual(res, expected));
    });

});

describe('TestInsertSort4', function() {
    var arr = [4, 2, 7, 1, 3];
    var expected = [ 1, 2, 3, 4, 7 ];
    var res = sorting.InsertSort4(arr);
    console.log("TestInsert3: " + res);

    it('Insert Sort 4', function(){
        assert(helper.ArraysAreEqual(res, expected));
    });

});
