import React from "react";
import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import arrowSvg from "../../assets/icons/arrow.svg";
import png from "../../assets/images/Rectangle.png";

const NotificationItem = ({
  titleBoard,
  nameColumn,
  backgroundImage,
  notificationText,
  userAvatar,
  userName,
}) => {
  return (
    <>
      <NotificationBoard backgroundImage={png}>
        <TitleBoard>{titleBoard}</TitleBoard>
        <p>{nameColumn}</p>
      </NotificationBoard>
      <StyledNotificationItem>
        <div>
          <BlueIcon />
          <UserAvatar />
          <UserName />
        </div>
        <NotificationText>Moved to list Done</NotificationText>
        <DateAdded>Sep 15 at 13:23 PM</DateAdded>
        <StyledArrowIcon src={arrowSvg} />
      </StyledNotificationItem>
    </>
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
`;

const NotificationBoard = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-color: ${(props) => !props.backgroundImage && "gray"};
  background-repeat: no-repeat;
  background-size: cover;
  width: 350px;
  height: 150px;
  border-radius: 18px;
  font-family: "Nunito", sans-serif;
  padding: 2px 10px 5px 20px;
  text-align: left;
  color: white;
  p {
    font-size: 20px;
    margin-top: 0;
  }
`;

const TitleBoard = styled.h3`
  margin-bottom: 0;
`;

const NotificationText = styled.span`
  font-weight: 500;
  font-size: 19px;
  color: #111111;
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
