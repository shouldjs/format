import { addSpaces } from '../util';

export function genSimdVectorFormat(constructorName, length) {
  return function(value) {
    var Constructor = value.constructor;
    var extractLane = Constructor.extractLane;

    var len = 0;
    var props = [];

    for (var i = 0; i < length; i ++) {
      var key = this.format(extractLane(value, i));
      len += key.length;
      props.push(key);
    }

    if (len <= this.maxLineLength) {
      return constructorName + ' [ ' + props.join(this.propSep + ' ') + ' ]';
    } else {
      return constructorName + ' [\n' + props.map(addSpaces).join(this.propSep + '\n') + '\n' + ']';
    }
  };
}
