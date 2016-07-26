
import composeReducer from '../../lib/compose-reducer';
import todoTag from '../reducers/todo-tag';
import { byExternalIdInSet } from './helpers/sync';

export default composeReducer({
  DEFAULT: [],
  'SYNC': function(state, action) {
    let stateExternalIds = _.map(state, 'externalId');
    let newTodoTags = _.reject(action.todoTags, byExternalIdInSet(stateExternalIds));

    return _.map(_.flatten([state, newTodoTags]), t => {
      let newAction = Object.assign({type: 'SYNC_FOOD_TAG'},
        t.externalId ? _.find(action.todoTags, _.pick(t, 'externalId')) : undefined
      );
      return todoTag(t, newAction);
    });
  },
  'ADD_TODO_TAG': function(state, action) {
    return [...state, todoTag(undefined, action)];
  },

  'EDIT_TODO_TAG': function(state, action) {
    return state.map(t => todoTag(t, action));
  }
});
