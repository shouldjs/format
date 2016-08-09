import { typeAdaptorForEachFormat } from './type-adaptor-for-each';


export function formatSet(obj) {
  return typeAdaptorForEachFormat.call(this, obj, {
    keyValueSep: '',
    formatKey: function() { return ''; }
  });
}
