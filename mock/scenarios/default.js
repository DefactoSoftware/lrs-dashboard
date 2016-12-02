import { addIndex, uniqBy, prop, pipe, map } from 'ramda';
import statement from '../factories/statement' ;
import user from '../factories/user' ;
import { createList } from '../helpers/collection';
import { status200 } from '../helpers/response';

const statements = createList(statement, (id)=> ({ id }), 10);
const users = pipe(
  uniqBy(prop('actor')),
  addIndex(map)(({ actor: name }, id)=> user({ id: id + 1, name }))
)(statements);

function defaultScenario () {
  this.get('/api/statements/', ()=> status200({ data: statements }));
  this.get('/api/users/', ()=> status200({ data: users }));
}

module.exports = defaultScenario;
