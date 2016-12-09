import { watchSessions } from './sessions';
import { watchStatements } from './statements';
import { watchUsers } from './users';

export default [
  watchUsers,
  watchStatements,
  watchSessions
];
