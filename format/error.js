import { formatPlainObject } from './object';

export function formatError(value) {
  return formatPlainObject.call(this, value, {
    prefix: value.name,
    additionalKeys: [['message', value.message]]
  });
}
