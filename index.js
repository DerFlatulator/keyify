 
import {property, zipObject, omit, assign} from 'lodash'

export default function keyify(arr, {
    nameKey = 'name',
    childrenKey = 'children',
    omitProps = ['name']
} = {}) {
    return (arr == null) ? {} : zipObject(
        arr.map(property(nameKey)),
        arr.map(property(childrenKey))
           .map(subArr => keyify(subArr, arguments[1]))
           .map((obj, i) => assign(
               omit(arr[i], childrenKey, ...omitProps),
               obj)))
}
