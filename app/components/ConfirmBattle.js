var React = require('react');

function ConfrimBattle(props) {
  return props.isLoading === true
  ? <p> Loading! </p>
  : <p> confirm battle! </p>
  )
}


module.exports = ConfrimBattle;
