import tag from './tag';

import { byExternalIdInSet } from '../reducers/helpers/sync';

export default function(state = [], action) {
  switch(action.type) {
    case 'SYNC':
      let stateExternalIds = _.map(state, 'externalId');
      let newTags = _.reject(action.tags, byExternalIdInSet(stateExternalIds));

      return _.map(_.flatten([state, newTags]), t => {
        let newAction = Object.assign({type: 'SYNC_TAG'},
          t.externalId ? _.find(action.tags, _.pick(t, 'externalId')) : undefined
        );
        return tag(t, newAction);
      });
    case 'ADD_TAG':
      return [...state, tag(undefined, action)];
    case 'EDIT_TAG':
      return state.map(t => tag(t, action));
    default:
      return state;
  }
}
