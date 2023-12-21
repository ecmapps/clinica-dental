import React from 'react'

export const Boton = ({props}) => {

    return(
        <button className='text-md font-medium rounded-lg px-2 py-1 m-2 border-transparent border-2 hover:bg-danube-700 hover:border-danube-100 duration-200 hover:text-white' href={props.href} disabled={props.disabled}>
            {props.text}
        </button>
    )
}
