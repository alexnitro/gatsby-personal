import React from "react"
import Header from '../../components/Header';
import AlexImage from '../../static/alex-looking.jpeg';
import { Link } from 'gatsby';

const Index = () => {
    return (
        <div className="app">
            <header>
                <Header title="New Gatsby Website Coming Soon" />
                {/* <Link to="/about">To the about page</Link> */}
                <img style={{maxWidth:200,display:'block',marginLeft:'auto',marginRight:'auto'}} src={AlexImage}/>
                <Link style={{marginTop:'40px',display:'inline-block'}} to="/about">About</Link>
            </header>
        </div>
    )
}

export default Index