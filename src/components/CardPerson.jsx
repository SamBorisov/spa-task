import React from "react";

export default function CardPerson(props) {

    //show icon status for user
    function setStatus() {
        if (props.status === true) {
            return "icon-available.svg"
        } else {
            return "icon-busy.svg"
        }
    }

  return (

     <div className="card">

        <div className="imgCardContainer">
            <img src={props.img ? props.img : "userPic.png"}  alt="person" />
            <img src={setStatus()} alt="statusIcon" />
        </div>

        <div className="cardDetails">
            <h3>{props.name}</h3>
            <p style={{paddingBottom:"5%"}}>{props.location ? props.location : "No Location Provided"}</p>
            <p>Phone: {props.phone}</p>
            <p>email: {props.email}</p>
        </div>

     </div>
  );
}


