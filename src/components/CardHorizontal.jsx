import React, { useState } from 'react'
import data from '../data/data'

const CardHorizontal = () => {

    const [show, setShow] = useState(false);

    return (
        <div className='horizontal-container'>
            {data.sort(() => Math.random() - 0.5).map(({ id, image }) => {
                const handleShow = () => {
                    setShow(true);
                    window.open(image, '_blank');
                };
                return (
                    <div className='horizontal-card' key={id}>
                        <div className="horizontal-card-img">
                            <img src={image} alt="illustartion" onClick={handleShow} openWindow={true} />
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default CardHorizontal
