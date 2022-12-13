import React from 'react'

import Image from '../images/values.jpg'
import SectionHead from './sectionHead' 
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'
import '../pages/about/about.css'


const Values = () => { 
  return (
    <section className='values'>
        <div className='container values_container'>
            <div className='values_left'>

            </div>
            <div className='values_image'>
                <img src={Image} alt='values Img'/>
            </div>
            <div className='values_right'>
                <SectionHead icons={<GiCutDiamond/>} title='values'/> 
                <p>
                    Welcome to Shop
                </p>
                <div className='values_wrapper'>
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card className="values_value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>

                            </Card>
                        })
                    }
                </div>
            </div>

        </div>
    </section>
  )
}

export default Values
