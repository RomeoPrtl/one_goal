import Btn from "./Btn";
import ProfilePhoto from "./ProfilePhoto";
import "../styles/navbar.css";
const Navbar = ({ titlePage }) => {
  return (
    <>
      <nav>
        <h1>{titlePage}</h1>
        <div className="align-right">
          <Btn
            id="btnNavbar"
            title="Se déconnecter"
            style={{
              background: "#0d5ed7",
              color: "white",
              width: "200px",
              marginRight: "40px",
            }}
          />
          <ProfilePhoto />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
