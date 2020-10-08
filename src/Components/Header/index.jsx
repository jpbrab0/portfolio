import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
function Header(props){
    return(
        <header>
            <h1>{props.title}</h1>
            <section className="link">
                <Link to="/">
                    Home
                </Link>
                <Link to="/projects">
                    Projects
                </Link>
            </section>
        </header>
    )
}
export default Header;