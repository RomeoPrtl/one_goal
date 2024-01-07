import "../styles/profilephoto.css";

import photoProfile from "../assets/photoProfile.jpg";
const ProfilePhoto = () => {
  return (
    <>
      <div id="containerPhotoProfile">
        <img id="photoProfile" src={photoProfile} />
      </div>
    </>
  );
};
export default ProfilePhoto;
