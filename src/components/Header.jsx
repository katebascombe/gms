// Header component

const { Link } = ReactRouter;

Header = React.createClass({

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">GMS</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="gigs">Gigs</a></li>
                        <li><a href="hosting">Hosting</a></li>
                        <li><AccountsUIWrapper /></li>
                    </ul>
                </div>
            </nav>
        )
    }

})