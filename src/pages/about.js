import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

//Load Ins
import Header from '../../components/Header';
import Image from '../../components/images/Image200';
import AlexTeeth from '../../static/alex-teeth.jpg';

const About = () => {
    return (
        <div className="app about">
            <Helmet>
                <title>About Me</title>
            </Helmet>
            <header>
                <Header title="I said...the new Gatsby site is coming soon 🤦" />
                <Image location={AlexTeeth} altImage="Alex's teeth" />      
                <Link style={{marginTop:'40px',display:'inline-block'}} to="/">Back to Home</Link>
            </header>
        </div>
    )
}

export default About