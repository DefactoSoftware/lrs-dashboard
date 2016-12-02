import { repeat } from 'ramda';

export function createList(model, creator, amount) {
  return repeat(undefined, amount).map((_, index)=> model(creator(index)));
}
