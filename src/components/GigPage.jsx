// App component - represents the whole app
GigPage = React.createClass({

    mixins: [ReactMeteorData],

    getInitialState() {
        return {
            hideCompleted: false
        };
    },

    getMeteorData() {
        let query = {};

        if(this.state.hideCompleted) {
            query = {checked: {$ne: true}};
        }

        return {
            gigs: Gigs.find(query, {sort: {createdAt: -1}}).fetch(),
            incompleteCount: Gigs.find({checked: {$ne: true}}).count()
        };
    },

    renderGigs() {
        return this.data.gigs.map((gig) => {
            return <Gig key={gig._id} gig={gig} />;
        });
    },

    toggleHideCompleted() {
        this.setState({
            hideCompleted: ! this.state.hideCompleted
        })
    },

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var text = React.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call("addGig", text);

        // Clear form
        React.findDOMNode(this.refs.textInput).value = "";
    },

    render() {
        return (
            <div className="gigPageContainer">
                <header>
                    <h1>Gig List ({this.data.incompleteCount})</h1>

                    <label className="hide-completed">
                        <input type="checkbox" readOnly={true} checked={this.state.hideCompleted} onClick={this.toggleHideCompleted} />
                        Hide completed gigs
                    </label>
                    
                    <form className="new-gig" onSubmit={this.handleSubmit} >
                        <input type="text" ref="textInput" placeholder="Type to add new gig" />
                    </form>
                </header>

                <ul>
                    {this.renderGigs()}
                </ul>
            </div>
        );
    }
});