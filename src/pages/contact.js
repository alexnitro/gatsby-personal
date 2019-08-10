import React from "react"
import Header from '../../components/Header';
import { Link } from 'gatsby';

const Contact = () => {
    return (
        <>
            <Header title="This is the homepage" />
            <Link to="/about">To the about page</Link>
        </>

    )
}

export default Contact