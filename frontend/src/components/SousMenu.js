import "../styles/sousmenu.css";
import { Link } from "react-router-dom";
const SousMenu = ({ nameSousMenu, icon, path }) => {
  return (
    <>
      <div id="flexContainerSousMenu">
        <img id="icon" src={icon} />
        <Link id="lien" className="lienClasse" to={`/${path}`}>
          {nameSousMenu}
        </Link>
      </div>
    </>
  );
};
export default SousMenu;
