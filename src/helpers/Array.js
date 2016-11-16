import { curry } from 'ramda' ;

export const mutableJoinByKey = (current, next)=> {
  return next.reduce((list, item)=> {
    const currentItem = list.find(({ id })=> id === item.id);

    if (currentItem) {
      return list;
    }

    list.push(item);

    return list;
  }, current);
};

export const modifyUniqueByAttribute = curry((attribute, modifier, items, currentItem)=> {
  const item = items.find(({ id })=> id === currentItem.id) || currentItem;

  return [
    ...items.filter(({ id })=> id !== item.id),
    { ...item, [attribute]: modifier(item[attribute] )},
  ];
});
