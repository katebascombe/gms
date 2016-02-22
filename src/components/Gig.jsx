// Gig component - represents a single gig item
Gig = React.createClass({

    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        gig: React.PropTypes.object.isRequired
    },

    runTask() {
        Meteor.call("runTask")
    },

    render() {

        return (
            <li className="collection-item">
                <div data-id={ this.props.gig._id }>
                    { this.props.gig.domainName }
                    <a onClick={ this.runTask }>Run Script</a>
                    <a href="#!" className="secondary-content">
                        <i className="material-icons">send</i>
                    </a>
                </div>
            </li>
        );
    }
});