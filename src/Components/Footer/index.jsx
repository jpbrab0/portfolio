import React from 'react'
import './styles.css'

export default ({ position }) => {
    return(
        <>
            <footer style={
                {
                    position:position ? 'absolute' : 'relative'
                }
            }>
                <a href="https://pt-br.reactjs.org/" rel="opener">
                    Feito com ReactJs 
                </a>
            </footer>
        </>
    )
}