import { ORM } from 'redux-orm';
import {User } from './models';

const orm = new ORM({
  stateSelector: state => state.orm,
});
orm.register(User);

export default orm;