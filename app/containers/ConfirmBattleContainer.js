const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');
const githubHelpers = require('../utils/githubHelpers');
const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: [],
    };
  },
  componentDidMount: function () {
    let query = this.props.location.query;
    // Fetch info from github then update state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]],
      })
    })
  },
  render: function () {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
    );
  },
});

module.exports = ConfirmBattleContainer;
