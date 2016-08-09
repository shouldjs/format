import { formatPlainObject } from './object';

export function formatRegExp(value) {
  return formatPlainObject.call(this, value, {
    value: String(value)
  });
}
