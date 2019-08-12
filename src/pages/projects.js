import React from 'react';
import { Helmet } from 'react-helmet';

//Load Ins
import AlexPointing from '../../static/alex-homepage.jpg';
import Layout from '../../components/layouts/Layout';
import StartingOut from '../../components/StartingOut';

const Projects = () => {
    return (
        <Layout>
            <Helmet>
                <title>My Projects</title>
            </Helmet>
            <StartingOut
                title="Oh I've got projects...really! I really do! 😝"
                imageSrc={AlexPointing}
                altImage="Alex teeth"
            />
        </Layout>
    )
}

export default Projects