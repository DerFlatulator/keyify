 
import {property, zipObject, omit, isNil} from 'lodash'

export default function keyify(arr, {
    nameKey = 'name',
    childrenKey = 'children',
    omitName = false
} = {}) {
    return isNil(arr) ? {} : zipObject(
        arr.map(property(nameKey)),
        arr.map(property(childrenKey))
           .map(subArr => keyify(subArr, arguments[1]))
           .map((obj, i) => _.assign(
               omit(arr[i], childrenKey, !omitName || nameKey),
               obj)))
}
