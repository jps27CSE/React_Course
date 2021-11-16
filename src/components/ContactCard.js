import React from "react";
import user from "../images/1.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  console.log(props);

  return (
    <div className="item">
      <img
        className="ui avater image "
        src={user}
        alt="user"
        style={{ height: "40px" }}
      />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
