// App component - represents the whole app
App = React.createClass({

    render() {
        return (
            <div className="container">{this.props.children}</div>
        )
    }
});