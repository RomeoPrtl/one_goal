import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import ContainerDashboardCard from "../components/ContainerDashboardCard";

import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="gridContainer">
        <Menu />
        <Navbar titlePage="DASHBAORD" />
        <ContainerDashboardCard />
      </div>
    </>
  );
};
export default Dashboard;
