import React from 'react'

export const CartWideItems = (props) => {
    return (
        <section key={props.key} >
            <img src={props.img} />

            <div>
                <h6>{props.title}</h6>
                <p>{props.desc}</p>
                <p>{props.priceUni}</p>
               
            </div>

            <>
                {props.counter}
            </>

            <div className="price-parcel">
                <p>{props.priceAmount}</p>
            </div>
            <div>
                {props.remove}
            </div>
        </section>
    )
}
