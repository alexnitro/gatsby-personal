import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="content-container">
                    <p>Alex Acker</p>
                    <ul>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
