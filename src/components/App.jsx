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
            <div className="appContainer">
            <AccountsUIWrapper />
                { this.data.currentUser ?
                    <div>
                        <Header />
                        <div className="container">
                            { this.props.children }
                        </div>
                    </div>
                : 
                    <GigForm />
                }
            </div>
        )
    }
});