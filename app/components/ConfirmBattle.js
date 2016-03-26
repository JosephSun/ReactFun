const React = require('react');

function puke()
function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p>LOADING</p>
    : <p>CONFIRM BATTLE</p>
}

module.exports = ConfirmBattle;
