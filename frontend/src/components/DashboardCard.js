import "../styles/dashboardcard.css";
const DashboardCard = ({ style, children }) => {
  return (
    <>
      <div id="dashboardCard" style={style}>
        {children}
      </div>
    </>
  );
};

export default DashboardCard;
