import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>We are <strong>Netfra</strong>.<br />
                    We focus on IT Networks and Infrastructure<br />
                    design, projects, management.</h1>
                    <p>Project management and planning, Enterprise<br />
                    Architecture, ongoing maintenance. We do it all.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
