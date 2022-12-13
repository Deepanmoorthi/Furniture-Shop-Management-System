import React from 'react'
import Card from '../UI/Card'

const Trainer = ({image, name, job, contact}) => {
  return (
    <div>
      <Card className='trainer'>
        <div className='trainer_img'>
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <p>{contact}</p>
      </Card>
    </div>
  )
}

export default Trainer
