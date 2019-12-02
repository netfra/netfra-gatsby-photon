import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>We're <strong>Netfra</strong>, an IT<br />
                    Professional Services company focussing on<br />
                    networks and infrastructure.</h1>
                    <p>Project management and outlining, Enterprise<br />
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
