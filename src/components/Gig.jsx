// Gig component - represents a single gig item
Gig = React.createClass({

    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        gig: React.PropTypes.object.isRequired
    },

    toggleChecked() {
        // Set the checked property to the opposite of its current value
        Gigs.update(this.props.gig._id, {
            $set: {checked: ! this.props.gig.checked}
        });
    },

    deleteGig() {
        Gigs.remove(this.props.gig._id);
    },

    render() {
        // Give gigs a different className when they are checked off,
        // so that we can style them nicely in css
        const gigClassName = this.props.gig.checked ? "checked" : "";

        return (
            <li className={ gigClassName }>
                <button className="delete" onClick={ this.deleteGig }>&times;</button>

                <input type="checkbox" readOnly={ true } checked={ this.props.gig.checked } onClick={ this.toggleChecked } />

                <span className="text">{ this.props.gig.text }</span>
            </li>
        );
    }
});