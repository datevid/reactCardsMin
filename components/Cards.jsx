import React from 'react'
import Card from './Card'
import image1 from '../src/assets/image1.jpg'
import image2 from '../src/assets/image2.jpg'
import image3 from '../src/assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: "web 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus deleniti atque sit doloribus doloremque pariatur ducimus, consequuntur totam soluta autem rem neque! Harum, odit ipsum. Nam odio dolores est.",
        image: image1
    },
    {
        id: 2,
        title: "web 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus deleniti atque sit doloribus doloremque pariatur ducimus, consequuntur totam soluta autem rem neque! Harum, odit ipsum. Nam odio dolores est.",
        image: image2
    },
    {
        id: 3,
        title: "web 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus deleniti atque sit doloribus doloremque pariatur ducimus, consequuntur totam soluta autem rem neque! Harum, odit ipsum. Nam odio dolores est.",
        image: image3
    }
]

function Cards() {
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    {
                        cards.map(item => {
                            return (
                                <div className="col-md-4 my-2" key={item.id}>
                                    <Card item={item} />
                                </div>

                            )
                        })
                    }


                </div>
            </div>

        </>
    )
}

export default Cards