import "./App.css";
// import { useMediaQuery } from "react-responsive";
import Header from "./components/header";
import Profile from "./components/profile/profile";
import Work from "./components/work/index";

function App() {
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  // console.log("prp", isMobile);
  return (
    <>
      <div className="portfolio">
        <Header />
        <Profile />
        <Work />
      </div>
    </>
  );
}

export default App;
/*
      <div className="profile">{isMobile ? <ProfileM /> : <ProfileD />}</div> 
     */
