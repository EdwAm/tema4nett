import React from 'react'

const Character = (props) => {
    const handleClick = () => {
         props.onClick(props.name)
    }
    return(
        <div className="character">
            <h2 onClick={handleClick}>{props.name}</h2>
            <ul>
                <li>House: {props.house}</li>
                <li>Actor: {props.actor}</li>
            </ul>
            <img onClick={handleClick} src={props.img} alt={"Profile of " + props.name}/>
            <hr/>
            
        </div>
    )
}

export default Character