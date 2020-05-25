import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className ="home">
            <h3>Welcome to Dev.Notes</h3>
            <p>Dev.Notes is a collection of topics useful for web development students.</p>
            <p>Click on <Link to="/notes">Notes</Link> to see all the notes.</p>
        </div>
    )
}

export default Home