import React from 'react'
import logodark from '../assets/images/netfra_logo_dark.svg'
import logolight from '../assets/images/netfra_logo_light.svg'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="image fitmax"><img src={logodark} alt="" /></span>
                    <h1>We are <strong>Netfra</strong>.<br />
                    We focus on IT Networks and Infrastructure design, projects, management, and the structures that surround them.</h1>
                    <p>Project management and planning, Enterprise Architecture, ongoing maintenance. We do it all.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
