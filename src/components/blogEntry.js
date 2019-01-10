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

class UnstyledBlogPost extends Component {

    render = () => {

    }
}

const BlogPost = injectSheet(style)(UnstyledBlogPost)
export default BlogPost