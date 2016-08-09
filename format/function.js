import { formatPlainObject } from './object';
import { functionName } from '../util';

export function formatFunction(value) {
  var obj = {};
  Object.keys(value).forEach(function(key) {
    obj[key] = value[key];
  });
  return formatPlainObject.call(this, obj, {
    prefix: 'Function',
    additionalKeys: [['name', functionName(value)]]
  });
}
