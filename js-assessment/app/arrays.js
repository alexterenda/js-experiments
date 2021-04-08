exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    const sum = arr.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue);
    }, 0);

    return sum;
  },

  remove: function (arr, item) {
    itemToRemove = item;

    const filteredArray = arr.filter((item) => {
      return item != itemToRemove;
    });

    return filteredArray;
  },

  removeWithoutCopy: function (arr, item) {
    while (arr.includes(item)) {
      const itemIndex = arr.indexOf(item);
      arr.splice(itemIndex, 1);
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    const arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    itemCount = 0;
    arr.map((element) => {
      if (element === item) {
        itemCount++;
      }
    });
    return itemCount;
  },

  duplicates: function (arr) {
    arr.reduce(
      (itemCount, currentItem) => {
        if (itemCount.includes(currentItem)) {
          if (!itemCount.duplicates.includes(currentItem)) {
            itemCount.duplicates.push(currentItem);
          }
        } else {
          itemCount[currentItem] = 1;
        }

        return itemCount.duplicates;
      },
      { duplicates: [] }
    );
  },

  square: function (arr) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      ret.push(arr[i] * arr[i]);
    }

    return ret;

    // Works in console but fails tests?
    // arr.map(item => Math.pow(item, 2));
  },

  findAllOccurrences: function (arr, target) {},
};

// arr = [1,2,2,3,3,3,4,5,5,6,6,6]
