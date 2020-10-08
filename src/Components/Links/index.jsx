import React from 'react'
import './styles.css'

const Links = () => {
    return(
        <>
            <section className="links">
                <div className="item">
                    <div><a href="https://github.com/jpbrab0" target="_blank" rel="noopener noreferrer"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="logo github"/></a></div>
                    <div>Github</div>
                </div>
                <div className="item">
                    <div><a href="https://linkedin.com/in/jpresdev" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="Logo linkedin"/></a></div>
                    <div>Linkedin</div>
                </div>
                <div className="item">
                    <div>
                        <a href="https://twitter.com/jpbrab0" target="_blank" rel="noopener noreferrer"><img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png" alt="Logo twitter"/></a>
                    </div>
                    <div>Twitter</div>
                </div>
                <div className="item">
                    <div>
                        <a href="https://www.youtube.com/channel/UC7HsgG803jN6UakOzSVZ5lQ?view_as=subscriber" target="_blank" rel="noopener noreferrer">
                            <img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-7-2.png" alt="Logo youtube"/>
                        </a>
                    </div>
                    <div>Youtube</div>
                </div>
                <div className="item">
                    <div>
                        <a href="https://twitch.tv/jpbrab0" target="_blank" rel="noopener noreferrer">
                            <img src="https://seeklogo.com/images/T/twitch-tv-logo-51C922E0F0-seeklogo.com.png" alt="Logo Twitch"/>
                        </a>
                    </div>
                    <div>Twitch.tv</div>
                </div>
            </section>
        </>
    )
}
export default Links