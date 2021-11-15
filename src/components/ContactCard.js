import React from "react";
import user from "../images/1.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img
        className="ui avater image "
        src={user}
        alt="user"
        style={{ height: "40px" }}
      />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
};

export default ContactCard;
