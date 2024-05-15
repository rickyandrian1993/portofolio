import styled from "styled-components";
import ProfileImg from "../assets/profile.jpg";

function ProfilePicture() {
  return (
    <PictureCard>
      <div className="profile-display">
        <div className="profile-display-in">
          <img src={ProfileImg} title="" alt="" />
        </div>
      </div>
    </PictureCard>
  );
}

const PictureCard = styled.div`
  .profile-display {
    &-in {
      width: 300px;
      height: 300px;
      border-radius: 999px;
      overflow: hidden;
      margin: 0 auto;
      border: 12px solid #d7dde8;
      box-shadow: 0 0 0 12ox #f8fafd;
      &::img {
        max-width: 100%;
      }
    }
  }
`;

export default ProfilePicture;
