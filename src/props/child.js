import React from 'react'

export default function child(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Lop: {props.lop}</p>
        </div>
    )
}
