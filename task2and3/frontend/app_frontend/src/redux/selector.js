import { createSelector } from 'redux-orm';
import orm from './orm';

export const usersSelector = createSelector(orm.User);

// export const userSelector = createSelector(
//     orm,
//     session => {
//         return session.User.last()
//     }
// );