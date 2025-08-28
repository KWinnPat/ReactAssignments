import ProfileCard from "../ProfileCard";
import { mockData } from "../../demo-data/mock-data";
import "../../styles/Home.scss";
const Home = () => {
  return (
    <div>
      <div className="cards">
        {Object.entries(mockData).map(([key, value]) => (
          <ProfileCard key={key} data={value} />
        ))}
      </div>
    </div>
  );
};

export default Home;
