import {
  RiDiscordFill,
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";
import styled from "styled-components";
import ProfileImg from "../assets/profile.jpg";
import ButtonIcon from "../components/Buttons/Icon";

function ProfileCard() {
  return (
    <>
      <Card>
        <b></b>
        <img src={ProfileImg} title="Ricky Andrian" alt="Ricky Andrian" />
        <div className="content">
          <h1 className="title text-center">
            Ricky Andrian
            <br />
            <span>I'm Software Developer</span>
          </h1>
          <ul className="sci">
            <li>
              <ButtonIcon url="https://github.com/rickyandrian1993">
                <RiGithubFill />
              </ButtonIcon>
            </li>
            <li>
              <ButtonIcon url="https://www.linkedin.com/in/andrian-ricky/">
                <RiLinkedinBoxFill />
              </ButtonIcon>
            </li>
            <li>
              <ButtonIcon url="https://discord.com/users/ricky_andrian">
                <RiDiscordFill />
              </ButtonIcon>
            </li>
            <li>
              <ButtonIcon url="https://www.instagram.com/_rickyandrian_/">
                <RiInstagramFill />
              </ButtonIcon>
            </li>
            <li>
              <ButtonIcon url="https://www.facebook.com/rickyandrian1993">
                <RiFacebookFill />
              </ButtonIcon>
            </li>
          </ul>
        </div>
      </Card>
    </>
  );
}

const Card = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background: #f00;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
  }

  &::after {
    filter: blur(30px);
  }

  b {
    position: absolute;
    inset: 6px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  img {
    position: absolute;
    z-index: 3;
    scale: 0.9;
    opacity: 0.25;
    transition: 0.5s;
  }

  &:hover img {
    scale: 0.8;
    opacity: 0.9;
    transform: translateY(-70px);
  }

  .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);
    transition: 0.5s;

    .title {
      position: relative;
      color: #fff;
      font-weight: 500;
      line-height: 1em;
      font-size: 1.4em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-align: center;

      span {
        text-align: center;
        font-weight: 300;
        font-size: 0.7em;
      }
    }
    .sci {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin-top: 5px;

      li {
        list-style: none;

        a {
          position: relative;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.5);
          background-color: rgba(0, 0, 0, 0.2);
          fill: currentColor;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          transition: 0.5s;

          &:hover {
            fill: currentColor;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }

  &:hover .content {
    transform: scale(1);
    bottom: 25px;
  }

  @media screen and (max-width: 767px) {
    width: 340px;
    height: 340px;
    transition: 0.2s;
  }
`;

export default ProfileCard;
