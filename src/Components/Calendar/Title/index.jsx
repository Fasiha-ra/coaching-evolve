import React from "react";
import { TitleWrap } from "./Title.styles";
import people from "../../../assets/session/proples.png";
import person from "../../../assets/session/person.png";
import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Title = () => {
  return (
    <TitleWrap>
      <span>Change Management: Leading Agile Systems Change...</span>
      <span>
        <img src={people} alt="people" />
        20 Employees Enrolled
      </span>
      <span>
        <FaPencilAlt />
        <div className="preview">
          <FaEye />
        </div>
      </span>
    </TitleWrap>
  );
};

export default Title;

export const ManageTitle = () => {
  return (
    <TitleWrap>
      <span>Change Management: Leading Agile Systems Change...</span>
      <span>
        <img src={person} alt="person" />
        Anish Mehra, Junior Engineer
      </span>
      <span>
        <FaPencilAlt />
        <FaEye />
      </span>
    </TitleWrap>
  );
};
