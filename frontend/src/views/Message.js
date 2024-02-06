import Menu from "../components/Menu";
import DashboardCard from "../components/DashboardCard";
import Navbar from "../components/Navbar";
import Btn from "../components/Btn";
import "../styles/message.css";
const Message = () => {
  return (
    <>
      <div className="gridContainer">
        <Menu />
        <Navbar titlePage="NOUVEAU MESSAGE" />
        <div id="containerDashboardCard">
          <DashboardCard
            style={{
              backgroundColor: "white",
              gridColumn: "1 / 7",
              gridRow: "1 / 8",
              margin: "0px 100px",
            }}
          >
            <div id="flexContainerMessage">
              <h2 id="titreMessageUnique">Revoir le cours progressivement</h2>
              <p id="dateMessageUnique">08/10/23</p>
            </div>
            <h2 id="categorieMessageUnique">Observation</h2>
            <div id="containerMessageUnique">
              <p id="message">
                "Manquer de travail et d'effort peut conduire à une incompétence
                notable. Cette négligence, souvent due à un manque de motivation
                ou de discipline, limite l'acquisition de compétence et freine
                la progression personnelle et professionnelle."
              </p>
            </div>
            <div id="btnFlexContainerMessage">
              <Btn
                title="Modifier le message"
                style={{
                  backgroundColor: "#0d5ed7",
                  color: "white",
                  width: "200px",
                  margin: "10px 0px",
                }}
              />
              <Btn
                title="Supprimer le message"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  width: "200px",
                  margin: "10px 0px",
                }}
              />
            </div>
          </DashboardCard>
        </div>
      </div>
    </>
  );
};
export default Message;
