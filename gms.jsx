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
    })

    Meteor.startup(function () {
        // Use Meteor.startup to render the component after the page is ready
        React.render(<Routes />, document.getElementById("render-target"));
    });
}