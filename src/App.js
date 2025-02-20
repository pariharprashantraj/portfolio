import "./App.css";
import { useMediaQuery } from "react-responsive";
import Header from "./components/header";
import ProfileM from "./components/profile/profileMobile";
import ProfileD from "./components/profile/profileDesktop";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  console.log("prp", isMobile);
  return (
    <div className="portfolio">
      <Header />
      {console.log("prp1", isMobile)}
      <div className="profile">{isMobile ? <ProfileM /> : <ProfileD />}</div>
    </div>
  );
}

export default App;
