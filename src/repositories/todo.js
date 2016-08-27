"use strict"

import xhr from 'xhr';

const todoRepository = {
  create: () => {
    new Promise((resolve, reject) => {
      resolve(res);
      }).then((res) => {
        done();
      }).catch((err) => {
        done(err);
      });
      return new Promise;
  },
  fetch: () => {
    new Promise((resolve, reject) => {
      let req = xhr.get(`http://localhost:3000/tods`);
      resolve(res);
      }).then((res) => {
        done();
      }).catch((err) => {
        done(err);
      });
      return new Promise;
  }
 };

export default todoRepository;
