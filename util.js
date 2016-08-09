var EOL = '\n';

export function indent(v, indentation) {
  return v
    .split(EOL)
    .map(function(vv) {
      return indentation + vv;
    })
    .join(EOL);
}

export function pad(str, value, filler) {
  str = String(str);
  var isRight = false;

  if (value < 0) {
    isRight = true;
    value = -value;
  }

  if (str.length < value) {
    var padding = new Array(value - str.length + 1).join(filler);
    return isRight ? str + padding : padding + str;
  } else {
    return str;
  }
}

export function pad0(str, value) {
  return pad(str, value, '0');
}

var functionNameRE = /^\s*function\s*(\S*)\s*\(/;

export function functionName(f) {
  if (f.name) {
    return f.name;
  }
  var matches = f.toString().match(functionNameRE);
  if (matches === null) {
    // `functionNameRE` doesn't match arrow functions.
    return '';
  }
  var name = matches[1];
  return name;
}

export function constructorName(obj) {
  while (obj) {
    var descriptor = Object.getOwnPropertyDescriptor(obj, 'constructor');
    if (descriptor !== undefined &&  typeof descriptor.value === 'function') {
      var name = functionName(descriptor.value);
      if (name !== '') {
        return name;
      }
    }

    obj = Object.getPrototypeOf(obj);
  }
}

var INDENT = '  ';

export function addSpaces(str) {
  return indent(str, INDENT);
}
