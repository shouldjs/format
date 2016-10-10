import { formatPlainObject } from './object';
import { functionName } from '../util';

export function formatFunction(value) {
  return formatPlainObject.call(this, value, {
    prefix: 'Function',
    additionalKeys: [['name', functionName(value)]]
  });
}
