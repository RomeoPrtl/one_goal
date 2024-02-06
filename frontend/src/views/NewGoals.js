import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Formulaire from "../components/Formulaire";
import Input from "../components/Input";
import DashboardCard from "../components/DashboardCard";
import BtnNew from "../components/BtnNew";
import Btn from "../components/Btn";
import "../styles/newgoals.css";
const NewGoals = () => {
  return (
    <>
      <div className="gridContainer">
        <Menu />
        <Navbar titlePage="NOUVELLE OBJECTIF" />
        <div id="containerDashboardCard">
          <DashboardCard
            style={{
              gridColumn: "1 / 7",
              gridRow: "1 / 6",
              margin: "0px 100px",
            }}
          >
            <div id="containerCenterFormulaire">
              <Formulaire
                title="Créer un nouvel objectif :"
                style={{ position: "relative", left: "43px", top: "10px" }}
              >
                <div id="containerFlexNewGoals">
                  <div id="leftFormNewGoals">
                    <Input
                      title="Titre de l'objectif :"
                      typeInput="text"
                      styleLabel={{ position: "relative", left: "0px" }}
                      styleInput={{ width: "327px", margin: "15px auto" }}
                    />
                    <Input
                      title="Date de départ : "
                      typeInput="date"
                      styleLabel={{ position: "relative", left: "0px" }}
                      styleInput={{
                        width: "327px",
                        margin: "15px auto",
                        color: "#0d5ed7",
                      }}
                    />
                    <Input
                      title="Date de fin :"
                      typeInput="date"
                      styleLabel={{ position: "relative", left: "0px" }}
                      styleInput={{
                        width: "327px",
                        margin: "15px auto",
                        color: "#0d5ed7",
                      }}
                    />
                    <label id="labelSelect">Difficulté : </label>
                    <select id="idSelect">
                      <option value="">-- Difficulté de l'objectif --</option>
                      <option value="facile">Facile</option>
                      <option value="intermediaire">Intermédiaire</option>
                      <option value="difficile">Difficile</option>
                    </select>
                  </div>
                  <div id="rightFormNewGoals">
                    <Input
                      title="Sous-objectif :"
                      typeInput="text"
                      styleLabel={{ position: "relative", left: "0px" }}
                      styleInput={{ width: "327px", margin: "15px auto" }}
                    />
                    <div id="btnNewSubGoals">
                      <BtnNew
                        style={{
                          width: "20px",
                          height: "20px",

                          fontSize: "12px",
                        }}
                      />
                      <p id="marginSubGoalsBtn">
                        Ajouter un nouvel sous-objectif
                      </p>
                    </div>
                    <label id="labelSelect">Priorité : </label>
                    <select id="idSelect">
                      <option value="">-- Priorité de l'objectif --</option>
                      <option value="pasimportant">Pas important</option>
                      <option value="important">Important</option>
                      <option value="tresimportant">Très important</option>
                    </select>
                    <label id="labelSelect">Description : </label>
                    <textarea id="idTextarea">
                      Description de l'objectif...
                    </textarea>
                  </div>
                </div>
                <Btn
                  title="Créer un nouvel objectif"
                  style={{
                    backgroundColor: "white",
                    color: "#0d5ed7",
                    width: "330px",
                    position: "relative",
                    left: "32%",
                    top: "30px",
                  }}
                />
              </Formulaire>
            </div>
          </DashboardCard>
        </div>
      </div>
    </>
  );
};
export default NewGoals;
