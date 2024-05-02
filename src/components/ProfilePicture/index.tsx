import styled from "styled-components";
import ProfileImg from "../../assets/profile.jpg";

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

const PictureCard = styled.div``;

export default ProfilePicture;
