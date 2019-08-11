import React from 'react';
import images from '../../src/styles/components/images.module.css'

export default props => (
    <img className={images.image200b} src={props.location} alt={props.altImage} />
)

