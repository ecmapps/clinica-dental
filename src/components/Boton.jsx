import React from 'react'

export const Boton = ({props}) => {

    return(
        <button className='bg-danube-700 rounded-lg px-2 py-1 m-2 text-white border-inherit border-2 hover:bg-transparent hover:text-black hover:border-danube-700 duration-100' href={props.href} disabled={props.disabled}>
            {props.text}
        </button>
    )
}
