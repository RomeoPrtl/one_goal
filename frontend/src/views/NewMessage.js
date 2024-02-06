import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import Btn from "../components/Btn";
import Input from "../components/Input";
import Formulaire from "../components/Formulaire";
import "../styles/newmessage.css";

const NewMessage = () => {
  return (
    <>
      <div className="gridContainer">
        <Menu />
        <Navbar titlePage="NOUVEAU MESSAGE" />
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
                title="Créer un nouveau message :"
                style={{ position: "relative", left: "43px", top: "10px" }}
              >
                <div id="containerFlexNewGoals">
                  <div id="leftFormNewGoals">
                    <Input
                      title="Titre du message :"
                      typeInput="text"
                      styleLabel={{ position: "relative", left: "0px" }}
                      styleInput={{ width: "327px", margin: "15px auto" }}
                    />
                    <Input
                      title="Date : "
                      typeInput="date"
                      styleLabel={{ position: "relative", left: "0px" }}
                      styleInput={{
                        width: "327px",
                        margin: "15px auto",
                        color: "#0d5ed7",
                      }}
                    />
                    <label id="labelSelect">Catégorie : </label>
                    <select id="idSelect">
                      <option value="">-- Catégorie du message --</option>
                      <option value="conseil">Conseil</option>
                      <option value="observation">Observation</option>
                      <option value="lecon">Leçon</option>
                    </select>
                  </div>
                  <div id="rightFormNewGoals">
                    <label id="labelSelect">Votre message : </label>
                    <textarea id="idTextareaMessage">
                      Ecrire un message...
                    </textarea>
                  </div>
                </div>
                <Btn
                  title="Créer un nouveau message"
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
export default NewMessage;
