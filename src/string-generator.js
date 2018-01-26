'use strict';

const generateToken = (length = 32, options = { mix: true, numeric: false, underscore: false, uppercase: false, special: [] }, cb = undefined) => {

  if (length.constructor === Object) {
    cb = (options.constructor === Function) ? options : undefined;
    options = length;
    length = 32;
  }


  const alphabetic = (options.alphabetic || options.mix) ? 'abcdefghijklmnopqrstuvwxyz' : '';
  const mix = (options.mix) ? alphabetic.toUpperCase() + alphabetic : '';
  const numeric = (options.numeric) ? '123456789' : '';
  const underscore = (options.underscore) ? '_' : '';
  const special = (options.special && options.special.length > 0) ? options.special.join('') : '';


  let scope = '';

  if (options.uppercase) {
    scope += alphabetic.toUpperCase() + numeric + underscore + special;
  } else if (options.uppercase) {

  } else {
    scope += alphabetic + numeric + underscore;
    scope += mix + numeric + underscore;
  }


  let str = '';

  for (let i = 0; i < length; i++) {
    str += scope.charAt(Math.floor(Math.random() * (scope.length - 1)));
  }

  if (options.underscore && !str.split('').includes('_')) {
    const withUnderscore = str.split('');
    withUnderscore[[Math.floor(Math.random() * (length - 1))]] = underscore;
    str = withUnderscore.join('');
  }


  if (cb) {
    console.log('Is callback')
    return cb(str);
  }

  console.log('Is promise')
  return new Promise((resolve, reject) => resolve(str));

}


/**
 * Practices
 */

generateToken({ underscore: true, numeric: true }, (result) => {
  console.log(result);
})

generateToken({underscore: true, alphabetic: true})
.then((result) =>  console.log(result))
