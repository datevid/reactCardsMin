import React from 'react'
import image1 from '../src/assets/image1.jpg'

function Card({ item }) {
    console.log(item)
    return (
        <>
            <div className="card">
                <img src={item.image} alt="" />
                <div className="card-body">
                    <h4 className='card-title'>{item.title}</h4>
                    <p className="card-text text-secondary">{item.text}</p>
                    <a href="#" className="btn btn-outline-secondary">
                        Go to this website
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card