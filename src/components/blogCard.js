import React, {Component} from "react"
import { Link } from "gatsby"
import injectSheet from 'react-jss'

import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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

class UnstyledCard extends Component {

    render = () => {
        return (
            <div className="columns">
                <div className="column">
                 <FontAwesomeIcon icon={faFeatherAlt}/> {this.props.node.frontmatter.title}
                </div>
                
                <div className="tags column">
                    <span className="tag is-dark">{this.props.node.frontmatter.date}</span>
                    {this.props.node.frontmatter.tags.map((tagName) => (

                        <span className="tag is-dark"> {tagName} </span>

                    ))}

                </div>
            </div>

        )
    }
}

const Card = injectSheet(styles)(UnstyledCard)

export default Card