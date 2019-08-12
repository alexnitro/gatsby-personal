import React from 'react';
import { Link } from 'gatsby';

import Container from './Container';

const Nav = ({children}) => {
    return (
        <nav>
            <Container>
                <div className="flex-row">
                    <div className="left">
                        <h3><Link to="/">Alex Acker</Link></h3>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Nav
