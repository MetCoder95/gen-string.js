'use strict';

const parameters = {
  uppercase: true,
  mix: true,
  numeric: true,
  underscore: true,
  special: 'string',
}

const checkForErrors = (options) => {
  let error;

  (!options) ? error = new ReferenceError('options" parameter required')
    : (options.constructor !== Object) ? error = new TypeError('The "options" parameter must be an object')
      : (Object.keys(options).length === 0) ? error = new Error('The "options" object must have at least one valid property')
        : null;


  if (error) throw error;

  for (const key in options) {
    (!parameters.hasOwnProperty(key)) ? error = new TypeError(`Options object must have only valid attributes, given "${key}"`)
      : (!(options[key].constructor === parameters[key].constructor)) ? error = new TypeError(`Option value in "${key}" is not valid type, must be ${typeof parameters[key]}`)
        : null;

    if (error) throw error;
  }

  return options;
}
