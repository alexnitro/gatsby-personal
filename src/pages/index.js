import React from "react"
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

//Load Ins
import Header from '../../components/Header';
import Container from '../../components/Container';
import Image from '../../components/images/Image200';
import AlexImage from '../../static/alex-looking.jpeg';


const Index = () => {
    return (
        <div className="app">
            <Helmet>
                <title>Alex Acker</title>
            </Helmet>
            <header>
                <Container>
                    <Header title="New Gatsby Website Coming Soon" />
                    <Image location={AlexImage} altImage="Alex thinking" />
                    <Link style={{marginTop:'40px',display:'inline-block'}} to="/about">About</Link>
                </Container>
            </header>
        </div>
    )
}

export default Index