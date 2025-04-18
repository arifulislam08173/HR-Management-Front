import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";
import { FiPlus } from "react-icons/fi";

const PlusButton = ({ id, color, bgColor, tooltip, onClick }) => {
  return (
    <>
      <Button
        id={id}
        className="btn"
        style={{
          color: 'white',
          backgroundColor: '#DC3545',
          borderRadius: "4px",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          padding: "0",
          transition: "all 0.2s ease-in-out",
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick(e);
        }}
        onMouseOver={(e) => {
        //   e.currentTarget.style.backgroundColor = "#DC3545";
        //   e.currentTarget.style.color = "white";
          e.currentTarget.style.opacity = "0.8";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
        //   e.currentTarget.style.backgroundColor = '#DC3545';
        //   e.currentTarget.style.color = "red";
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <FiPlus size={20} />
      </Button>
      <UncontrolledTooltip placement="top" target={id}>
        {tooltip}
      </UncontrolledTooltip>
    </>
  )
}

export default PlusButton
