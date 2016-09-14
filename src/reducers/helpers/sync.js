export function byExternalIdInSet(set) {
  return function(t) {
    return _.includes(set, t.externalId);
  }
}
