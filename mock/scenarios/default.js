import { addIndex, uniqBy, prop, pipe, map, nth } from 'ramda';
import statement from '../factories/statement' ;
import user from '../factories/user';
import auth from '../factories/auth';
import { createList } from '../helpers/collection';
import { status200, status404 } from '../helpers/response';
import { JSONRequestBody } from '../helpers/request';

const statements = createList(statement, (id)=> ({ id }), 10);
const users = pipe(
  uniqBy(prop('actor')),
  addIndex(map)(({ actor: name }, id)=> user({ id: id + 1, name }))
)(statements);

const authorizedUser = auth({ user: nth(0, users) });

function defaultScenario () {
  this.get('/api/statements/', ()=> status200({ data: statements }));
  this.get('/api/users/', ()=> status200({ data: users }));
  this.post('/api/auth', (request)=> {
    const { email, password } = JSONRequestBody(request);

    if (email === 'foo@bar.com' && password === 'hallo') {
      return status200({ data: authorizedUser })
    }

    return status404({});
  });
}

module.exports = defaultScenario;
