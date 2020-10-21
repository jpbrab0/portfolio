import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
function Header(props){
    return(
        <header>
            <h1>{props.title}</h1>
            <section className="link">
                <a target="_blank" href="https://linktree-jpres.vercel.app/">
                    Links
                </a>
                <Link to="/projects">
                    Projects
                </Link>
            </section>
        </header>
    )
}
export default Header;