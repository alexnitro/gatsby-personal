import React from 'react';
import Header from '../../components/Header';
import AlexTeeth from '../../static/alex-teeth.jpg';
import { Link } from 'gatsby';

const About = () => {
    return (
        <div className="app">
            <header>
                <Header title="I said...the new Gatsby site is coming soon 🤦" />
                <img style={{maxWidth:200,display:'block',marginLeft:'auto',marginRight:'auto'}} src={AlexTeeth}/>
                <Link style={{marginTop:'40px',display:'inline-block'}} to="/">Back to Home</Link>
            </header>
        </div>
    )
}

export default About