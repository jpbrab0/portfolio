import React from 'react'
import DiscordThumb from '../../assets/discordbotthumb.PNG'
import PedraPapelTesouraThumb from '../../assets/projeto2.PNG'
import PortfolioThumb from '../../assets/projeto3.PNG'
import './styles.css'

const Projects = () => {
    return(
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <header className="projects_header">
                <div>
                    <a href="javascript:history.back()"><i class="material-icons">arrow_back</i></a>
                    <h1>Projects</h1>
                </div>
            </header>
            <main>
                <div className="projects">
                    <div className="project">
                        <header className='headerProject'>
                            <a className='projects' href="https://github.com/jpbrab0/netflix-web-ui-clone" target="_blank" rel="noopener noreferrer">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo github"/>
                            </a>
                        </header>
                        <div className="thumbnail">
                            <img src="https://fontmeme.com/permalink/200917/69dfe28dc8c9bdcdb8ca6878bedab0b5.png" alt="thumbnail projeto"/>
                        </div>
                        <div className="description">
                            <h2>Netflix ui clone</h2>
                            <p>Netflix ui clone made with reactJs and css.</p>
                        </div>
                    </div>
                    <div className="project">
                        <header className='headerProject'>
                            <a className='projects' href="https://github.com/jpbrab0/gunter-bot-discord" target="_blank" rel="noopener noreferrer">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo github"/>
                            </a>
                        </header>
                        <div className="thumbnail">
                            <img src={DiscordThumb} alt="thumbnail projeto"/>
                        </div>
                        <div className="description">
                            <h2>Gunter discord bot</h2>
                            <p>Bot for discord made with NodeJs.</p>
                        </div>
                    </div>
                    <div className="project">
                        <header className='headerProject'>
                            <a className='projects' href="https://github.com/jpbrab0/pedra-papel-tesoura" target="_blank" rel="noopener noreferrer">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo github"/>
                            </a>
                        </header>
                        <div className="thumbnail">
                            <img src={PedraPapelTesouraThumb} alt="thumbnail projeto"/>
                        </div>
                        <div className="description">
                            <h2>Rock Paper Scissors</h2>
                            <p>Game rock paper and scissors made with VannilaJs.</p>
                        </div>
                    </div>
                    <div className="project">
                        <header className='headerProject'>
                            <a className='projects' href="https://github.com/jpbrab0/instagram-ui-clone" target="_blank" rel="noopener noreferrer">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo github"/>
                            </a>
                        </header>
                        <div className="thumbnail">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="thumbnail projeto"/>
                        </div>
                        <div className="description">
                            <h2>Instagram ui clone</h2>
                            <p>Instagram ui clone made with React Native and css-in-js</p>
                        </div>
                    </div>
                    <div className="project">
                        <header className='headerProject'>
                            <a className='projects' href="https://github.com/jpbrab0/twitchtv-clone" target="_blank" rel="noopener noreferrer">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo github"/>
                            </a>
                        </header>
                        <div className="thumbnail">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Twitch_logo_2019.svg/1024px-Twitch_logo_2019.svg.png" alt="thumbnail projeto"/>
                        </div>
                        <div className="description">
                            <h2>Twitch.tv ui clone</h2>
                            <p>Twitch.tv ui clone made with React Native and css-in-js</p>
                        </div>
                    </div>
                    <div className="project">
                        <header className='headerProject'>
                            <a className='projects' href="https://github.com/jpbrab0/personal-portfolio" target="_blank" rel="noopener noreferrer">
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo github"/>
                            </a>
                        </header>
                        <div className="thumbnail">
                            <img src={PortfolioThumb} alt="thumbnail projeto"/>
                        </div>
                        <div className="description">
                            <h2>Personal Portfólio</h2>
                            <p>Portfólio made with ReactJs and css3</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Projects