import React from 'react'
import img from '../../src/img/pizza.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 about_p'>
                        <h3>About</h3>
                        <h1>WELCOME TO MAESTRO PIZZINI</h1>
                        <p>Investigationes demonstraverunt lectores legere me lius
                        quod ii legunt saepius. Claritas est etiam processus dynaus,
                        quise sequitur mutationem consuetudium lectorum.
                        </p>
                        <div className='about__btn'>
                        <a href='#' className='btn btn-smart'>Read More</a>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className='about__img'>
                            <img src={img} alt="pizza"/>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default About
