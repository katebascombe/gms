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
            newGigs: Gigs.find({status: "new"}, {sort: {createdAt: -1}}).fetch(),
            inProgressGigs: Gigs.find({status: "inProgress"}, {sort: {createdAt: -1}}).fetch(),
            completeGigs: Gigs.find({status: "complete"}, {sort: {createdAt: -1}}).fetch(),
            archivedGigs: Gigs.find({status: "archived"}, {sort: {createdAt: -1}}).fetch()
        };
    },

    renderGigs(gigs) {
        return this.data[gigs].map((gig) => {
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
                    {this.renderGigs("newGigs")}
                </ul>

                <ul className="collection with-header">
                    <li className="collection-header"><h4>In Progress</h4></li>
                    {this.renderGigs("inProgressGigs")}
                </ul>

                <ul className="collection with-header">
                    <li className="collection-header"><h4>Complete</h4></li>
                    {this.renderGigs("completeGigs")}
                </ul>

                <ul className="collection with-header">
                    <li className="collection-header"><h4>Archived</h4></li>
                    {this.renderGigs("archivedGigs")}
                </ul>
            </div>
        );
    }
});