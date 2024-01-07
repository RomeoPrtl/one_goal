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
        <ul>
          <li>
            <SousMenu nameSousMenu={"Tableau de Bord"} icon={iconHome} />
          </li>
          <li>
            <SousMenu nameSousMenu={"Profile"} icon={iconProfile} />
          </li>
          <li>
            <SousMenu nameSousMenu={"Mes Objectifs"} icon={iconMyGoals} />
          </li>
          <li>
            <SousMenu nameSousMenu={"Nouvelle Objectif"} icon={iconNewGoals} />
          </li>
          <li>
            <SousMenu nameSousMenu={"Progression"} icon={iconProgression} />
          </li>
          <li>
            <SousMenu nameSousMenu={"Journal de Bord"} icon={iconLookBook} />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
