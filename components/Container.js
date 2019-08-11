import React from 'react';
import stylesContainer from '../src/styles/components/container.module.css';

export default ({children}) => (
    <div className={stylesContainer.container}>{children}</div>
)

