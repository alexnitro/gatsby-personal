import React from 'react';

import Container from './Container';
import Header from './Header';
import Image from './images/Image200';

const StartingOut = props => {
    return (
        <div className="app">
            <header>
                <Container>
                    <Header title={props.title} />
                    <Image location={props.imageSrc} altImage={props.altImage} />
                </Container>                
            </header>
        </div>
    )
}

export default StartingOut
