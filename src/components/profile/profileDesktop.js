import "./styleD.css";
import Stacking from "./stacking";

function ProfileDesktop() {
  return (
    <>
      <div className="flex profile-container ">
        <div className="image-container">
          <div className="gradient-bg"></div>
          <img
            src="/profilePhoto.png"
            alt="Profile Image"
            className="circular-border"
          />
        </div>
      </div>
      <Stacking />
    </>
  );
}

export default ProfileDesktop;
