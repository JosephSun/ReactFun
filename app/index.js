var React = require('react');
var ReactDOM = require('react-dom');


var USER_DATA = {
    name: 'Tyler McGinnis',
    username: 'tylermcginnis', 
    image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}
var ProfilePic = React.createClass({
    render: function() {
        return <img src = {this.props.imageUrl} style = {{height: 100, width: 100}} />
    }
});

var ProfileLink = React.createClass({
    render: function () {
        return (
            <div>
                <a href= {'https://www.github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
});

var ProfileName = React.createClass({
    render: function () {
        return(
            <div>{this.props.name}</div>
        )
    }
})

ReactDOM.render(
    < HelloWorld name= "Tyler" />,
    document.getElementById('app')
);