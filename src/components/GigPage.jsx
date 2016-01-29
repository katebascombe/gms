// App component - represents the whole app
GigPage = React.createClass({

    mixins: [ReactMeteorData],

    getInitialState() {
        return {
            hideCompleted: false
        };
    },

    getMeteorData() {
        return {
            gigs: Gigs.find({}, {sort: {createdAt: -1}}).fetch()
        };
    },

    renderGigs() {
        return this.data.gigs.map((gig) => {
            return <Gig key={gig._id} gig={gig} />;
        });
    },

    render() {
        return (
            <div className="gigPageContainer">
                <header>
                    <h1>Gigs</h1>
                </header>

                <ul className="collection with-header">
                    <li className="collection-header"><h4>New</h4></li>
                    {this.renderGigs()}
                </ul>
            </div>
        );
    }
});