// 'expect()' think of a this as the launching point.
  // its the starting point of any test.

// 'expect()' accepts a single argument.
  // called the 'actual'. here its add(arg_1, arg_2).

// Then we need a comparaison to use against the 'actual'
  // or also known as the 'matcher'.
  // Jasmine has its own 'matcher' functions defined.
  // in its library the .tobe() is the 'strict' equality operator.

expect(add(0.1, 0.2)).toBe(0.3);

// Think of the aboce as.
add(0.1, 0.2) === 0.3;

// You can negate a test by string together with the .not matcher
// expect(add(0.1, 0.2)).not.toBe(0.1);
