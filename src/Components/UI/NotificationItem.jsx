import React from "react";
import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import arrowSvg from "../../assets/icons/arrow.svg";

const NotificationItem = ({ avatar, date, title }) => {
  
  return (
    <StyledNotificationItem>
      <div>
        <BlueIcon />
        <UserAvatar />
        <UserName />
      </div>
      <span>Moved to list Done</span>
      <DateAdded>Sep 15 at 13:23 PM</DateAdded>
      <StyledArrowIcon src={arrowSvg} />
    </StyledNotificationItem>
  );
};

export default NotificationItem;

const StyledNotificationItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 10px 40px 20px 40px;
  width: 321px;
  height: 96px;
  border-bottom: 1px solid #e3e3e3;
  font-family: "Nunito", sans-serif;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 215px;
  }

  span {
    font-weight: 500;
    font-size: 19px;
    color: #111111;
  }
`;

const DateAdded = styled.p`
  color: #919191;
  font-size: 17px;
  margin: 0;
`;

const StyledArrowIcon = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 10px;
  top: 50px;
`;

const BlueIcon = styled.span`
  width: 9px;
  height: 9px;
  background: #0079bf;
  border-radius: 50%;
`;
