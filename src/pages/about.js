import React from 'react';
import { Helmet } from 'react-helmet';

//Load Ins
import AlexTeeth from '../../static/alex-teeth.jpg';
import Layout from '../../components/layouts/Layout';
import StartingOut from '../../components/StartingOut';

const About = () => {
    return (
        <Layout>
            <Helmet>
                <title>About Me</title>
            </Helmet>
            <StartingOut
                title="I said...the new Gatsby site is coming soon 🤦"
                imageSrc={AlexTeeth}
                altImage="Alex teeth"
            />
        </Layout>
    )
}

export default About