import React from "react";

const BoardMember = ({ member }) => {
  return (
    <div>
      <img
        src={require(`../assets/images/board/${member.imageName}.png`)}
        alt={member.displayName}
        className="board-image"
      />
      <div className="board-name">{member.displayName}</div>
    </div>
  );
};

export default BoardMember;
