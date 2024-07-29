import React, { useState } from "react";
import { SessionCardWrap } from "./SessionCard.styles";
import calendar from "../../../assets/profile/calendar.png";
import time from "../../../assets/profile/time.png";
import { BsPencil } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/index";
import { Sessions } from "../../../Constant/Data";
const SessionCard = () => {
  const navigate = useNavigate();
  const EditSession = () => {
    navigate("/editSession")
  }
  const [isLoading, setIsLoading] = useState(false);

  const handleViewSession = (session) => {
    setIsLoading(true); 
    setTimeout(() => { 
      setIsLoading(false);
      navigate("/viewSession", { state: { sessionData: session } });
    }, 1000); 
  };

  return (
    <SessionCardWrap>
      <div className="cardWrap">
        {Sessions.map((session, index) => (
          <div className="wrapper" key={index}>
            <div className="cardHold">
              <figure>
                <img src={session.imag} alt="session" />
              </figure>
              <blockquote>
                <q>{session.name}</q>
                <h3>{session.title}</h3>
                <div className="timeWrap">
                  <cite>
                    <img src={calendar} alt="calendar" />
                    <span>
                     April 30, 2024 - May 7-2024
                    </span>
                  </cite>
                  <cite>
                    <img src={time} alt="time" />
                    <span>
                      9:00 pm - 11:00 pm
                    </span>
                  </cite>
                </div>
              </blockquote>
              <div className="iconBtn">
                <button onClick={EditSession}>
                  <BsPencil />
                </button>
                <button onClick={() => handleViewSession(session)}>
                  <FaRegEye />
                </button>
              </div>
            </div>
            <div className="btn">
              <Button width="128px">Join</Button>
            </div>
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>} 
    </SessionCardWrap>
  );
};

export default SessionCard;
