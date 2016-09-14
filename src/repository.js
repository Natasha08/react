import i from 'underscore.inflection';
import _ from 'lodash';

// fetch = (function(fetch){
//   return function() {
//     console.log(arguments);
//     return fetch.apply(null, arguments);
//   }
// })(fetch);

require('es6-promise').polyfill();
require('isomorphic-fetch');

const SERVER = "https://echo-radial.herokuapp.com";
const API_PATH = "";

const REQUEST_SESSION = 'shared-todo-application-number-1-1-1-destruct';
const DEFAULT_HEADERS = {
  'REQUEST_SESSION': REQUEST_SESSION,
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function getJSON(response) {
  return response.json();
}

const model_name = _.snakeCase;
const plural_model_name = _.flow(model_name, i.pluralize.bind(i));

function construct_path({model, path, id}) {
  if (path) return path;
  if (model) return _.compact([plural_model_name(model), id]).join('/');
  return null;
}

function construct_api_path({model=null, server=null, api_path=null, id=null, path = null}) {
  server = server ? server : SERVER;
  api_path = api_path ? api_path : API_PATH;

  let path_function = (this && this.path_function) ? this.path_function : construct_path;

  return _.compact([server + api_path, path_function({model, path, id})]).join('/');
}

function construct_payload(model, properties) {
  return JSON.stringify({[model_name(model)]: properties });
}

function construct_options(options={}) {
  return Object.assign({
    method: "GET",
    headers: Object.assign({}, DEFAULT_HEADERS, options['headers'])
  }, options);
}

function partial_model(model) {
  return function(r,m) {
    r[m] = _.partial(Repository[m], model);
    return r;
  }
}

function substitute_model(model, options) {
  let substitutedHelpers = Object.assign({
    model: substitute_model,
    construct_api_path: _.flow(_.partial(Object.assign, {model}), construct_api_path),
    construct_payload: _.partial(Helpers.construct_payload, model),
    options: construct_options
  }, _.property(options, 'Helpers'));

  let partialRepository = _.reduce(_.functions(Repository), partial_model(model), {});

  return Object.assign(partialRepository, options, { Helpers: substitutedHelpers });
}

const Helpers = {
  createRepository: substitute_model,
  construct_api_path,
  construct_payload,
  options: construct_options
};

const Repository = {
  update: function(model, id, properties) {
    return fetch(construct_api_path({model, id}), this.Helpers.options({
      method: "PATCH", body: construct_payload(model, properties)
    })).then(getJSON);
  },

  fetch: function(model) {
    return fetch(construct_api_path({model}), this.Helpers.options()).then(getJSON);
  },

  get: function(model, id) {
    return fetch(construct_api_path({model, id}), this.Helpers.options()).then(getJSON);
  },

  create: function(model, properties) {
    return fetch(construct_api_path({model}), this.Helpers.options({
      method: "POST", body: construct_payload(model, properties)
    })).then(getJSON);
  },

  Helpers
};

export default Repository
