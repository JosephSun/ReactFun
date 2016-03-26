const axios = require('axios');

const id = "YOUR_CLIENT_ID";
const id = "YOUR_SECRET_ID";
const id = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get("https://api.github.com/users/" + username + param);
}

const helpers: {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function(info) {

    })
    }
};

module.exports = helpers
