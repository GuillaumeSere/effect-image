import React from 'react'
import data from '../data/data'

const CardHorizontal = () => {
    return (
        <div className='horizontal-container'>
            {data.sort(() => Math.random() - 0.5).map(({ id, image, title }) => {
                return (
                    <div className='horizontal-card' key={id}>
                        <div className="horizontal-card-img">
                            <img src={image} alt="illustartion" />
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default CardHorizontal
