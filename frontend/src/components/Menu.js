import SousMenu from "./SousMenu";
import "../styles/menu.css";

import logo from "../assets/logoOneGoal.png";
import iconHome from "../assets/iconHome.jpg";
import iconProfile from "../assets/iconProfile.jpg";
import iconMyGoals from "../assets/iconMyGoals.jpg";
import iconNewGoals from "../assets/iconNewGoals.jpg";
import iconProgression from "../assets/iconProgression.jpg";
import iconLookBook from "../assets/iconLookBook.jpg";

const Menu = () => {
  return (
    <>
      <div id="containerMenu">
        <img id="logoOneGoal" src={logo} />
        <ul id="ulSousMenu">
          <li className="liSousMenu">
            <SousMenu
              path={""}
              nameSousMenu={"Tableau de bord"}
              icon={iconHome}
            />
          </li>
          <li className="liSousMenu">
            <SousMenu
              path={"profile"}
              nameSousMenu={"Profile"}
              icon={iconProfile}
            />
          </li>
          <li className="liSousMenu">
            <SousMenu
              path={"mygoals"}
              nameSousMenu={"Mes Objectifs"}
              icon={iconMyGoals}
            />
          </li>
          <li className="liSousMenu">
            <SousMenu
              path={"newgoals"}
              nameSousMenu={"Nouvelle Objectif"}
              icon={iconNewGoals}
            />
          </li>
          <li className="liSousMenu">
            <SousMenu
              path={"progression"}
              nameSousMenu={"Progression"}
              icon={iconProgression}
            />
          </li>
          <li className="liSousMenu">
            <SousMenu
              path={"logbook"}
              nameSousMenu={"Journal de Bord"}
              icon={iconLookBook}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
