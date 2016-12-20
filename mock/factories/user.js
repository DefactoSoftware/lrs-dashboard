import faker from 'faker';
import { createModel } from '../helpers/model';

export default createModel({
  id: 0,
  name: ()=> faker.name.firstName(),
  email: ()=> faker.internet.email(),
});
