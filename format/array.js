import { formatPlainObject, formatPlainObjectKey } from './object';

export function formatArray(value) {
  return formatPlainObject.call(this, value, {
    formatKey: function(key) {
      if (!key.match(/\d+/)) {
        return formatPlainObjectKey.call(this, key);
      }
    },
    brackets: ['[', ']']
  });
}
