export default {
  setPage: function({name}) {
    return {
      type: 'SET_PAGE',
      name
    };
  }
}
