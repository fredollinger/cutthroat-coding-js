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
