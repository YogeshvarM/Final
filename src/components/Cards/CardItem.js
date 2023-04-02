import React from 'react'
import CardIcons from "./CardIcons";
import "./CardItem.css"

const CardItem = (props) => {

    return (

        <div className={"card"} key={props.item.id}>
            <a style={{display: "flex"}}
               href={props.item.links[0].url}
               target={"_blank"}
               rel={"noopener noreferrer"}>
            <div style={{backgroundImage: "url('"+props.item.image+"')"}} className="card__img" alt={props.item.title}/>
            </a>
            <div className={"card__body"}>
                <h2 className={"card__title"} ><strong>{props.item.title}</strong></h2>
                {props.isProject?<div ><li className={"card__description"}>{props.item.Point1}</li>
                <li className={"card__description"}>{props.item.Point2}</li>
                <li className={"card__description"}>{props.item.Point3}</li></div>:<p className={"card__description"}>{props.item.description}</p>
                }
                <hr className={"card__line"}/>
                <CardIcons item={props.item}/>
            </div>
            
            
    
        </div>


    );
}

export default CardItem