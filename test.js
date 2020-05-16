// 3rd party requires
var assert = require('assert');
var cloneDeep = require('lodash.clonedeep');

// Local requires
var array = require('./array.js');
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
      assert.equal(sorting.AreArraysEqual(arr1, arr2), false);
    });
});

describe('AreArraysEqual', function() {
    it('check both empty arrays', function(){
      var arr1 = [];
      var arr2 = [];
      assert.equal(sorting.AreArraysEqual(arr1, arr2), true);
    });
});
