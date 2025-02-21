import "./style.css";
import Stacking from "./stacking";
import TypeWriterText from "../typeWriterText";
const skills = [
  {
    heading: "End-to-End Web Development",
    description:
      "Expert in designing, developing, and deploying scalable web applications, ensuring seamless performance across all devices.",
  },
  {
    heading: "Performance Optimization & Scalability",
    description:
      "Enhance website speed, responsiveness, and efficiency using best practices like lazy loading, code splitting, and Lighthouse performance tuning.",
  },
  {
    heading: "Modern Frontend Architecture",
    description:
      "Implement modular, maintainable, and reusable frontend solutions using React, Next.js, and state management tools like Redux and Context API.",
  },
  {
    heading: "UI/UX Excellence & Pixel-Perfect Design",
    description:
      "Craft visually appealing, user-friendly interfaces with accessibility compliance, smooth animations, and responsive design principles.",
  },
  {
    heading: "Technical Leadership & Collaboration",
    description:
      "Lead frontend teams, mentor developers, and work closely with cross-functional stakeholders to align technical execution with business objectives.",
  },
  {
    heading: "Technical Leadership & Collaboration",
    description:
      "Lead frontend teams, mentor developers, and work closely with cross-functional stakeholders to align technical execution with business objectives.",
  },
  {
    heading: "Thank You!",
    description:
      "I appreciate you taking the time to explore my work. I’m always excited to collaborate on innovative projects and push the boundaries of web development. Let’s build something amazing together!",
  },
];
function Profile() {
  return (
    <>
      <div className="flex profile-container ">
        <div className="image-container">
          <div className="gradient-bg"></div>
          <img
            src="/profilePhoto.png"
            alt="Profile_Image"
            className="circular-border"
          />
        </div>
      </div>
      <div className="main-text">
        <TypeWriterText
          text="Hello! I am Prashant Raj Parihar. "
          customClass="main-text"
          fs="24px"
        />
        <div>
          I am a Lead Frontend Developer with a passion for crafting
          pixel-perfect, high-performance UIs that deliver seamless user
          experiences. With expertise in modern web technologies, I specialize
          in building scalable, responsive, and visually stunning applications
          that meet industry standards.
        </div>
      </div>

      <Stacking notesData={skills} />
    </>
  );
}

export default Profile;
