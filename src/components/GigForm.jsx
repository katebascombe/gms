// Gig Form component - Customers fill it out to create a new gig
GigForm = React.createClass({

    // slideForward(event) {
    //     let currentPanelId = $(event.currentTarget).parents(".panel").attr("id");
    //     let futurePanelId = parseInt(currentPanelId) + 1;
    //     let $futurePanel = $("#"+futurePanelId);

    //     // Remove active class from all panels
    //     $(".panel").removeClass("panel__active");

    //     // Add active class to next panel
    //     $futurePanel.addClass("panel__active");
    // },

    // slideBack(event) {
    //     let currentPanelId = $(event.currentTarget).parents(".panel").attr("id");
    //     let prevPanelId = parseInt(currentPanelId) - 1;
    //     let $prevPanel = $("#"+prevPanelId);

    //     // Remove active class from all panels
    //     $(".panel").removeClass("panel__active");

    //     // Add active class to previous panel
    //     $prevPanel.addClass("panel__active");
    // },

    getInitialState() {
        return {
            activeSlide: 1
        };
    },

    increaseSlides(event) {
        this.setState({ activeSlide: this.state.activeSlide + 1 });
    },

    decreaseSlides(event) {
        this.setState({ activeSlide: this.state.activeSlide - 1 });
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
        let panelClassName = classNames({
            "panelSlider": true
        });

        let panelOneClassName = classNames({
            "panelSlider__slide": true,
            "panelSlider__slide--active": this.state.activeSlide === 1,
            "panelSlider__slide--prev": this.state.activeSlide === 2 || this.state.activeSlide === 3 || this.state.activeSlide === 4,
        });

        let panelTwoClassName = classNames({
            "panelSlider__slide": true,
            "panelSlider__slide--active": this.state.activeSlide === 2,
            "panelSlider__slide--prev": this.state.activeSlide === 3 || this.state.activeSlide === 4
        });

        let panelThreeClassName = classNames({
            "panelSlider__slide": true,
            "panelSlider__slide--active": this.state.activeSlide === 3,
            "panelSlider__slide--prev": this.state.activeSlide === 4
        });

        let panelFourClassName = classNames({
            "panelSlider__slide": true,
            "panelSlider__slide--active": this.state.activeSlide === 4
        });

        return (
            <div>
                <form className={panelClassName} onSubmit={this.handleSubmit}>
                    <div className="panelSlider__slides">

                        <div className={panelOneClassName}>
                            <h4 className="indigo white-text padding-20 margin-0">Domain Name</h4>
                            <div className="white padding-40">
                                <div className="row">
                                    <blockquote className="margin-0">
                                        <span><b>Don't have a domain name?</b> Purchase one from <a href="https://www.crazydomains.com.au/" target="_blank">Crazy Domains</a>. You don't need to sign up for hosting or email accounts, just the domain name.</span>
                                    </blockquote>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input ref="domainName" id="domain_name" type="text" className="validate" />
                                        <label for="domain_name">Registered Domain Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s4">
                                        <input value="" ref="domainNameProvider" id="domain_name_provider" type="text" className="validate" />
                                        <label for="domain_name_provider">Domain Name Provider</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input value="" ref="domainNameUsername" id="domain_name_username" type="text" className="validate" />
                                        <label for="domain_name_username">Domain Name Username</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input value="" ref="domainNamePassword" id="domain_name_password" type="text" className="validate" />
                                        <label for="domain_name_password">Domain Name Password</label>
                                    </div>
                                </div>
                                <div className="spacing"></div>
                                <div className="spacing"></div>
                                <div className="row">
                                    <a className="waves-effect waves-light btn right" onClick={ this.increaseSlides }><i className="material-icons right">keyboard_arrow_right</i>Next</a>
                                </div>
                            </div>
                        </div>


                        <div className={panelTwoClassName}>
                            <h4 className="indigo white-text padding-20 margin-0">WordPress Theme</h4>
                            <div className="white padding-40">
                                <div className="row">
                                    <blockquote className="margin-0">
                                        <span><b>Don't have a WordPress theme?</b> Find thousands of free WordPress 
                                        themes by Googling <a href="https://www.google.com.au/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=Free+wordpress+themes" target="_blank">'Free WordPress themes'</a>  
                                        &nbsp;or find premium themes from sites like <a href="http://www.elegantthemes.com/" target="_blank">Elegant Themes</a> and <a href="http://themeforest.net/category/wordpress" target="_blank">Theme Forest</a>.
                                        </span>
                                    </blockquote>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <div className="file-field input-field">
                                            <div className="btn indigo lighten-2">
                                                <span>Upload .zip file</span>
                                                <input type="file" />
                                            </div>
                                            <div className="file-path-wrapper">
                                                <input className="file-path validate" type="text" placeholder="e.g wordpresstheme.zip" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing"></div>
                                <div className="spacing"></div>
                                <div className="row">
                                    <a className="waves-effect waves-light btn left" onClick={ this.decreaseSlides }><i className="material-icons left">keyboard_arrow_left</i>Back</a>
                                    <a className="waves-effect waves-light btn right" onClick={ this.increaseSlides }><i className="material-icons right">keyboard_arrow_right</i>Next</a>
                                </div>
                            </div>
                        </div>


                        <div className={panelThreeClassName}>
                            <h4 className="indigo white-text padding-20 margin-0">Content</h4>
                            <div className="white padding-40">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input value="" ref="pages" placeholder="e.g Home, About, Contact" id="pages" type="text" className="validate" />
                                        <label for="pages">What pages would you like on your site?</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input value="" ref="pages" placeholder="e.g Name, Phone, Email, Comments" id="pages" type="text" className="validate" />
                                        <label for="pages">What fields would you like on your Contact Form?</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input value="" ref="pages" placeholder="e.g sales@domainname.com" id="pages" type="text" className="validate" />
                                        <label for="pages">What email addresses would you like set up with your domain name?</label>
                                    </div>
                                </div>
                                <div className="spacing"></div>
                                <div className="spacing"></div>
                                <div className="row">
                                    <a className="waves-effect waves-light btn left" onClick={ this.decreaseSlides }><i className="material-icons left">keyboard_arrow_left</i>Back</a>
                                    <a className="waves-effect waves-light btn right" onClick={ this.increaseSlides }><i className="material-icons right">keyboard_arrow_right</i>Next</a>
                                </div>
                            </div>
                        </div>


                        <div className={panelFourClassName}>
                            <h4 className="indigo white-text padding-20 margin-0">Hosting</h4>
                            <div className="white padding-40">
                                <div className="row">
                                    <blockquote>
                                        <b>Please be aware that my gig provides hosting for your website and is a requirement.</b>
                                        <br /><br />
                                        The first month of hosting is free. After the first month you can choose to continue your hosting or cancel at any time with no penalties. 
                                        The hosting package includes <b>unlimited data transfer, unlimited traffic</b> and <b>unlimited storage</b> for $12AU per month.
                                    </blockquote>
                                </div>
                                <div className="row">
                                    <p>
                                    Please sign up for your <a href="http://www.katebascombe.com/website-hosting-fiverr/" target="_blank">one month free hosting here</a> and then confirm with the checkbox below.
                                    </p>
                                    <p>
                                      <input type="checkbox" className="filled-in" id="filled-in-box" />
                                      <label for="filled-in-box">I have signed up for the hosting, please make my site now!</label>
                                    </p>
                                </div>
                                <div className="spacing"></div>
                                <div className="spacing"></div>
                                <div className="row">
                                    <a className="waves-effect waves-light btn left" onClick={ this.decreaseSlides }><i className="material-icons left">keyboard_arrow_left</i>Back</a>
                                    <a className="waves-effect waves-light btn right">Submit</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
});