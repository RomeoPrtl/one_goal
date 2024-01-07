import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import "../styles/dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="flexContainer">
        <Menu />
        <Navbar />
      </div>
    </>
  );
};
export default Dashboard;
