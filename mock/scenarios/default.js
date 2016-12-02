import statement from '../factories/statement' ;
import { createList } from '../helpers/collection';
import { status200 } from '../helpers/response';

function defaultScenario () {
  this.get('/api/statements/', ()=> status200({
    data: createList(statement, (id)=> statement({ id }), 10)
  }));
}

module.exports = defaultScenario;
