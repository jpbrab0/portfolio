import React from 'react'
import './styles.css'
import Programando from '../../assets/programando.svg'
import Header from '../../Components/Header'
import Links from '../../Components/Links'
const Home = () => {
    return(
        <>
            <Header title="João Pedro"/>
            <main>
                <section className="about-me">
                    <section className="description">
                        <div>
                            <h1>About me</h1>
                            <p>Hello, my name is João Pedro, 
                            <br />
                            I live in Campo Limpo Paulista,São Paulo I've been programming since I was 10 years old and my first learned programming language was Python 3
                            <br />
                            Currently I'm 13 years old and front-end developer with Python, Javascript and three frameworks ReactJs, NodeJS and React Native</p>
                        </div>
                        <div className="img">
                            <img src="https://avatars1.githubusercontent.com/u/58999202?s=460&u=450f987552a42e720e85d49e9226122f824cf1bb&v=4" alt="Homem Programando" draggable={false}/>
                        </div>
                    </section>
                </section>
                <Links />
                <section className="languages">
                    <div className="img">
                        <img src={Programando} alt="Jp programando"/>
                    </div>
                    <div className="description">
                        <h1>Languages</h1>
                        <p>
                            <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript"/>
                        </p>
                        <h1>Frameworks/Libraries</h1>
                        <p>
                            <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJs"/>
                            <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"/>
                            <img src="https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native"/>
                        </p>
                        <h1>Technologies</h1>
                        <p>
                            <img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
                            <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home