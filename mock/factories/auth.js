import { createModel } from '../helpers/model';
import user from './user';

export default createModel({
  jwt: '12345678',
  exp: new Date().toISOString(),
  user: user(),
});
