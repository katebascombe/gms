// Define a collection to hold our gigs
Gigs = new Mongo.Collection("gigs");

if (Meteor.isClient) {
    // This code is executed on the client only

    const {
        Router,
        Route,
        IndexRoute,
        Link,
        history
    } = ReactRouter;

    const browserHistory = history.createHistory();

    // All the routes
    Routes = React.createClass({
        render() {
            return (
                <Router history={ browserHistory }>
                    <Route path="/" component={ App }>
                        <Route path="gigs" component={ GigPage } />
                    </Route>
                </Router>
            )
        }
    });

    // Accounts configs
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });

    // Subscribe to collections in db
    Meteor.subscribe("gigs");

    Meteor.startup(function () {
        // Use Meteor.startup to render the component after the page is ready
        React.render(<Routes />, document.getElementById("render-target"));
    });
}

if (Meteor.isServer) {
    Meteor.publish("gigs", function() {
        return Gigs.find();
    })
}

Meteor.methods({
    
    addGig(gig) {
        // If gigRef already exists error
        Gigs.insert(gig)
    }
})