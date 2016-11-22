import { curry, reduce } from 'ramda' ;

export const mutableJoinByKey = curry((key, current, next)=> {
  return next.reduce((list, item)=> {
    const currentItem = list.find((i)=> i[key] === item[key]);

    if (currentItem) {
      return list;
    }

    list.push(item);

    return list;
  }, current);
});

export const modifyUniqueByAttribute = curry(
  (key, attribute, modifier, items)=>
  reduce((accumulator, current)=> {
    const found = accumulator.find(i => i[key] === current[key]) || current;

    return [
      ...accumulator.filter(i => i[key] !== found[key]),
      { ...found, [attribute]: modifier(found[attribute])},
    ];
  }, [], items)
);
