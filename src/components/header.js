import React, { Component } from 'react';
import { Link } from "gatsby"
import injectSheet from 'react-jss'

const styles = {
    navbar: {
        composes: ['navbar'],
        background: '#202021'
    },
    navbarItem: {
        color: '#d4d4d4',
        composes: ['navbar-item'],
    },
    link: {
        color: '#d4d4d4',
    }
}

class UnstyledHeader extends Component {

  render = () => {
    return (
        <nav className={this.props.classes.navbar} role="navigation" aria-label="main navigation">

            <div className="navbar-menu">
                <div className="navbar-start">
                    <div className={this.props.classes.navbarItem}>
                        {this.props.siteName}
                    </div>
                </div>
                <div className="navbar-end">
                    <div className={this.props.classes.navbarItem}>
                        <Link className={this.props.classes.link} to="/">Home</Link>
                    </div>
                    <div className={this.props.classes.navbarItem}>
                        <Link className={this.props.classes.link} to="/projects">Projects</Link>
                    </div>
                    <div className={this.props.classes.navbarItem}>
                        <Link className={this.props.classes.link} to="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
  }
}

const Header = injectSheet(styles)(UnstyledHeader)

export default Header