function check(id, callback) {
  return function(event) {
    callback(id);
  }
}

export default function(props) {
  return <input
    type={ 'checkbox' }
    checked={ props.checked }
    onChange = { check(props.id, props.onCheck) }
  />
}
