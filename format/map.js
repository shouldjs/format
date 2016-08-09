import { typeAdaptorForEachFormat } from './type-adaptor-for-each';


export function formatMap(obj) {
  return typeAdaptorForEachFormat.call(this, obj, {
    keyValueSep: ' => '
  });
}
