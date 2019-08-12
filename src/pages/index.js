import React from "react"
import { Helmet } from 'react-helmet';

//Load Ins
import AlexImage from '../../static/alex-looking.jpeg';
import Layout from '../../components/layouts/Layout';
import StartingOut from '../../components/StartingOut';


const Index = () => {
    return (
        <Layout>
            <Helmet>
                <title>Alex Acker</title>
            </Helmet>
            <StartingOut
                title="New Gatsby Site in progress here..."
                imageSrc={AlexImage}
                altImage="Alex looking"
            />
        </Layout>
    )
}

export default Index