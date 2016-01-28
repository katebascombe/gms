// App component - represents the whole app
App = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },

    render() {
        return (
            <div className="container">
                <AccountsUIWrapper />

                { this.data.currentUser ?
                    this.props.children
                : "" }
            </div>
        )
    }
});