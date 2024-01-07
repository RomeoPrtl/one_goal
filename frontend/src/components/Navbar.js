import Btn from "./Btn";
import ProfilePhoto from "./ProfilePhoto";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <h1>DASHBOARD</h1>
        <div className="align-right">
          <Btn />
          <ProfilePhoto />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
