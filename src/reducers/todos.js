import todo_id from './todo';

import { byExternalIdInSet } from 'reducers/helpers/sync';

export default function(state = [], action) {
  switch(action.type) {
    case 'SYNC':
      let stateExternalIds = _.map(state, 'externalId');
      let newTodos = _.reject(action.todo_ids, byExternalIdInSet(stateExternalIds));

      return _.map(_.flatten([state, newTodos]), t => {
        let newAction = Object.assign({type: 'SYNC_TODO'},
          t.externalId ? _.find(action.todo_ids, _.pick(t, 'externalId')) : undefined
        );
        return todo_id(t, newAction);
      });
    case 'ADD_TODO':
      console.log("TODOs_REDUCER_LOG", "I AM REACHING HERE!");
      return [...state, todo_id(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo_id(t, action));
    case 'EDIT_TODO':
      return state.map(t => todo_id(t, action));
    default:
      return state;
  }
}
