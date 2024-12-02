import Navbar from "./Navbar";
import LoginRegisterSection from "./LoginRegisterSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1>Explore Books Around the World</h1>
        <LoginRegisterSection />
        <a href="/map">
          <button className="map-button">Go to Map</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
