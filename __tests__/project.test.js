import Triangle from './../src/js/project.js';

describe ('Triangle', () => {

  let reusableTriangle;


  beforeEach(() =>  {
    reusableTriangle = new Triangle(2,4,5);
  });

  test('should correctly create a triangle object with three lengths', () => {
    expect(reusableTriangle.side1).toEqual(2);
    expect(reusableTriangle.side2).toEqual(4);
    expect(reusableTriangle.side3).toEqual(5);
  });
  test('should correctly determine whether three lengths are not a triangle', () => {
    expect(reusableTriangle.checkType()).toEqual("not a triangle");
  })
});



/*
describe('Triangle', () => {
  let reusableTriangle;

  beforeEach(() => {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  test('should show how beforeEach() works', () => {
    console.log(reusableTriangle);
  });
});


import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});
*/