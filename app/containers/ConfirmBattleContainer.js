var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: false,
      playerInfo: []
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  
  componentDidMount: function () {
    var query = this.props.location.query;
    //fetch info from github then update state
  },
  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading}
      playersinfo={this.state.playersinfo}/>
    )
  }
})
