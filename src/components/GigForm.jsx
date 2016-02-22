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

    disableTab(event) {
        let keyCode = event.keyCode || event.which; 

        if (keyCode == 9) { 
            event.preventDefault(); 
        } 
    },

    handleSubmit(event) {
        event.preventDefault();

        let gig = {
            "username": React.findDOMNode(this.refs.username).value,
            "gigRef": React.findDOMNode(this.refs.gigRef).value,
            "domainName": React.findDOMNode(this.refs.domainName).value.trim(),
            "domainNameUsername": React.findDOMNode(this.refs.domainNameUsername).value.trim(),
            "domainNamePassword": React.findDOMNode(this.refs.domainNamePassword).value.trim(),
            "wordpressTheme": React.findDOMNode(this.refs.wordpressTheme).value,
            "pages": React.findDOMNode(this.refs.pages).value.trim(),
            "fields": React.findDOMNode(this.refs.fields).value.trim(),
            "emails": React.findDOMNode(this.refs.emails).value.trim(),
            "hosting": React.findDOMNode(this.refs.hosting).value,
            "createdAt": new Date(),
            "status": "new"
        }

        Meteor.call("addGig", gig);
    },

    render() {
        let panelClassName = classNames({
            "gigForm": true,
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
            <form className={panelClassName} onSubmit={this.handleSubmit} autoComplete="off">
                <input type="hidden" ref="username" value="fiverrUser" />
                <input type="hidden" ref="gigRef" value="230498" />
                <div className="panelSlider__slides">
                    <div className={panelOneClassName}>
                        <h4 className="indigo white-text padding-20 margin-0">Domain Name</h4>
                        <div className="panelSlider__inner white padding-40 flex flex--stacked">
                            <div className="fieldRows">
                                <div className="row">
                                    <blockquote className="margin-0">
                                        <span><b>Don't have a domain name?</b> Purchase one from <a href="https://www.crazydomains.com.au/" target="_blank">Crazy Domains</a>. You don't need to sign up for hosting or email accounts, just the domain name.</span>
                                    </blockquote>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input ref="domainName" id="domain_name" type="text" />
                                        <label for="domain_name">Registered Domain Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s4">
                                        <input ref="domainNameProvider" id="domain_name_provider" type="text" />
                                        <label for="domain_name_provider">Domain Name Provider</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input ref="domainNameUsername" id="domain_name_username" type="text" />
                                        <label for="domain_name_username">Domain Name Username</label>
                                    </div>
                                    <div className="input-field col s4">
                                        <input ref="domainNamePassword" id="domain_name_password" type="text" />
                                        <label for="domain_name_password">Domain Name Password</label>
                                    </div>
                                </div>
                            </div>
                            <div className="buttonRow">
                                <button className="waves-effect waves-light btn right" onKeyDown={ this.disableTab } onClick={ this.increaseSlides }><i className="material-icons right">keyboard_arrow_right</i>Next</button>
                            </div>
                        </div>
                    </div>


                    <div className={panelTwoClassName}>
                        <h4 className="indigo white-text padding-20 margin-0">WordPress Theme</h4>
                        <div className="panelSlider__inner white padding-40 flex flex--stacked">
                            <div className="fieldRows">
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
                                                <input type="file" ref="wordpressTheme" />
                                            </div>
                                            <div className="file-path-wrapper">
                                                <input className="file-path" type="text" placeholder="e.g wordpresstheme.zip" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttonRow">
                                <a className="waves-effect waves-light btn left" onClick={ this.decreaseSlides }><i className="material-icons left">keyboard_arrow_left</i>Back</a>
                                <button className="waves-effect waves-light btn right" onKeyDown={ this.disableTab } onClick={ this.increaseSlides }><i className="material-icons right">keyboard_arrow_right</i>Next</button>
                            </div>
                        </div>
                    </div>


                    <div className={panelThreeClassName}>
                        <h4 className="indigo white-text padding-20 margin-0">Content</h4>
                        <div className="panelSlider__inner white padding-40 flex flex--stacked">
                            <div className="fieldRows">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input ref="pages" placeholder="e.g Home, About, Contact" id="pages" type="text" />
                                        <label for="pages">What pages would you like on your site?</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input ref="fields" placeholder="e.g Name, Phone, Email, Comments" id="fields" type="text" />
                                        <label for="fields">What fields would you like on your Contact Form?</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input ref="emails" placeholder="e.g sales@domainname.com" id="emails" type="text" />
                                        <label for="emails">What email addresses would you like set up with your domain name?</label>
                                    </div>
                                </div>
                            </div>
                            <div className="buttonRow">
                                <a className="waves-effect waves-light btn left" onClick={ this.decreaseSlides }><i className="material-icons left">keyboard_arrow_left</i>Back</a>
                                <button className="waves-effect waves-light btn right" onKeyDown={ this.disableTab } onClick={ this.increaseSlides }><i className="material-icons right">keyboard_arrow_right</i>Next</button>
                            </div>
                        </div>
                    </div>


                    <div className={panelFourClassName}>
                        <h4 className="indigo white-text padding-20 margin-0">Hosting</h4>
                        <div className="panelSlider__inner white padding-40 flex flex--stacked">
                            <div className="fieldRows">
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
                                      <input ref="hosting" type="checkbox" className="filled-in" id="filled-in-box" />
                                      <label for="filled-in-box">I have signed up for the hosting, please make my site now!</label>
                                    </p>
                                </div>
                            </div>
                            <div className="buttonRow">
                                <a className="waves-effect waves-light btn left" onClick={ this.decreaseSlides }><i className="material-icons left">keyboard_arrow_left</i>Back</a>
                                <button className="waves-effect waves-light btn right" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        );
    }
});