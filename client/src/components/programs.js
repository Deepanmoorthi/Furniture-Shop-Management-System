import React from 'react'
import {FaCrown} from 'react-icons/fa'
import {programs} from '../data'
import SectionHead from './sectionHead'
import {Link} from 'react-router-dom'
import Card from '../UI/Card'
import {AiFillCaretRight} from 'react-icons/ai'

import '../index.css'

const Programs = () => {
  return (
    <section className='programs'>
        <div className='container programs_container'>
            <SectionHead icon={<FaCrown/>} title='Programs'/>
        
        <div className='programs_wrapper'>
          {
            programs.map(({id, icon,title, info, path}) =>{
              return(
                <Card className='section_head' key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className='btn sm'>Learn More <AiFillCaretRight/> </Link>
                
                </Card> 
              )
              
            })
          }
        </div>
        </div>
    </section>
  )
}

export default Programs
