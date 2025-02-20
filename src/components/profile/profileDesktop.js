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
      <h1>
        Hello. I am Prashant Raj Parihar. I'm an interdisciplinary designer
        living in Bengaluru, Karnataka. Currently I work at Accolite Digital,
        transforming how we experience Shopping.
      </h1>
      <Stacking />
      <div style={{ height: "100vh" }}>hello world</div>
    </>
  );
}

export default ProfileDesktop;
