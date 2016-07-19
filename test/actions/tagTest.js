import _ from 'lodash-uuid';
const User = require("../../src/js/models/User");

  describe('Tag Test', function () {
  it('adds a tag to a new User', function () {
    let tag_id = _.uuid();
    let myUser = new User('natasha', 'me@me.com', tag_id);
    console.log(myUser);

  });
});
