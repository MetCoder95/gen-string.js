'use strict';

const validParameters = ['mix', 'numeric', 'underscore', 'uppercase', 'special']

const checkForErrors = (options) => {
  if (options.constructor !== Object) throw new TypeError('Options must be an object');
  if (!options || Object.keys(options).length === 0) throw new SyntaxError('Options must be a non empty object');

  Object.keys(options).forEach((value) => {
    if(!validParameters.includes(value)) throw new TypeError(`Options object must have only valid attributes, given ${value}`)
  })

  for (const key in options) {
    if(options[key].constructor === Number || options[key].constructor === String) throw new TypeError('Option')
  }

  return console.log('Finish the method');
}


let obj = {
  mix: true,
  numeric: false,
  underscore: 123,
  uppercase: '456',
  special: ['=', '|', '-'],
  extra: ['a', '8', '_']
}

console.log(obj.first.constructor)

checkForErrors(obj)
