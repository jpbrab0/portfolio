import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
function Header(props){
    return(
        <header>
            <h1>{props.title}</h1>
            <section className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://linktree-jpres.vercel.app/">
                    Links
                </a>
                <Link to="/projects">
                    Projects
                </Link>
                <a target="_blank" rel="noopener noreferrer" href="https://blog.jpres.dev">
                    Blog
                </a>
            </section>
        </header>
    )
}
export default Header;