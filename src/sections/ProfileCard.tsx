import styled from "styled-components";
import ProfileImg from "../assets/profile.jpg";

function ProfilePicture() {
  return (
    <PictureCard>
      <img src={ProfileImg} title="" alt="" />
    </PictureCard>
  );
}

const PictureCard = styled.div`
  margin: 0 auto;
  height: 300px;
  width: 300px;
  background: var(--clr-1);
  border-radius: 50%;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: -0.5rem;
    z-index: -1;
    background: conic-gradient(
      from var(--gradient-angle),
      var(--clr-3),
      var(--clr-4),
      var(--clr-5),
      var(--clr-4),
      var(--clr-3)
    );
    border-radius: inherit;
    animation: rotation 15s linear infinite;
  }

  &::after {
    filter: blur(3.5rem);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @keyframes rotation {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`;

export default ProfilePicture;
