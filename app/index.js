var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return(
               console.log("This.props", this.props);
               <div> Hello Reactjs Tutorial </div>
               );
    }
});

ReactDOM.render(
    < HelloWorld name= "Tyler" anySortOfData = {29}/>,
    document.getElementById('app')
);