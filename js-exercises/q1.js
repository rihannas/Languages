// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

const compareObjs = (obj1, obj2) => {
  const val1 = Object.values(obj1).toString();
  const val2 = Object.values(obj2).toString();

  return val1 == val2 ? 'same value' : 'different values';
};

const obj1 = {
  id: 1,
  no: 3,
  ee: 6,
};

const obj2 = {
  id: 1,
  no: 3,
  ee: 6,
};

const obj3 = {
  ee: 6,
  id: 1,
  no: 3,
};

const obj4 = {
  id: 13,
  no: 33,
  ee: 63,
};

console.log(compareObjs(obj1, obj4));
