import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import DashboardCard from "../components/DashboardCard";
import Btn from "../components/Btn";
import "../styles/mygoals.css";
import ItemCard from "../components/ItemCard";
import { Link } from "react-router-dom";
import "../styles/logbook.css";
const Logbook = () => {
  return (
    <>
      <div className="gridContainer">
        <Navbar titlePage="JOURNAL DE BORD" />
        <Menu />
        <div id="containerDashboardCard">
          <Link to={"/newmessage"}>
            <Btn
              id="newGoalsBtn"
              title="Nouveau message"
              style={{
                backgroundColor: "#0d5ed7",
                color: "white",
                width: "200px",
                margin: "10px 0px",
              }}
            />
          </Link>

          <DashboardCard
            style={{
              gridColumn: "1 / 7",
              gridRow: "2 / 7",
              textAlign: "center",
            }}
          >
            <div id="flexContainerItemCardMyGoals">
              <Link className="lienClasse" to={"/message"}>
                <ItemCard
                  style={{
                    width: "150px",
                    height: "150px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <div id="flexContainerItemCardMessage">
                    <p id="dateMessage">08/10/23</p>
                    <h5 id="categorieMessage">Conseil</h5>
                  </div>
                  <p id="titreMessage">Tu ne travailles pas assez</p>
                </ItemCard>
              </Link>
              <Link className="lienClasse" to={"/message"}>
                <ItemCard
                  style={{
                    width: "150px",
                    height: "150px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <div id="flexContainerItemCardMessage">
                    <p id="dateMessage">08/10/23</p>
                    <h5 id="categorieMessage">Conseil</h5>
                  </div>
                  <p id="titreMessage">Tu ne travailles pas assez</p>
                </ItemCard>
              </Link>
              <Link className="lienClasse" to={"/message"}>
                <ItemCard
                  style={{
                    width: "150px",
                    height: "150px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <div id="flexContainerItemCardMessage">
                    <p id="dateMessage">08/10/23</p>
                    <h5 id="categorieMessage">Conseil</h5>
                  </div>
                  <p id="titreMessage">Tu ne travailles pas assez</p>
                </ItemCard>
              </Link>
              <Link className="lienClasse" to={"/message"}>
                <ItemCard
                  style={{
                    width: "150px",
                    height: "150px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <div id="flexContainerItemCardMessage">
                    <p id="dateMessage">08/10/23</p>
                    <h5 id="categorieMessage">Conseil</h5>
                  </div>
                  <p id="titreMessage">Tu ne travailles pas assez</p>
                </ItemCard>
              </Link>
              <Link className="lienClasse" to={"/message"}>
                <ItemCard
                  style={{
                    width: "150px",
                    height: "150px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <div id="flexContainerItemCardMessage">
                    <p id="dateMessage">08/10/23</p>
                    <h5 id="categorieMessage">Conseil</h5>
                  </div>
                  <p id="titreMessage">Tu ne travailles pas assez</p>
                </ItemCard>
              </Link>
              <Link className="lienClasse" to={"/message"}>
                <ItemCard
                  style={{
                    width: "150px",
                    height: "150px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <div id="flexContainerItemCardMessage">
                    <p id="dateMessage">08/10/23</p>
                    <h5 id="categorieMessage">Conseil</h5>
                  </div>
                  <p id="titreMessage">Tu ne travailles pas assez</p>
                </ItemCard>
              </Link>
              <Link className="lienClasse" to={"/message"}>
                <ItemCard
                  style={{
                    width: "150px",
                    height: "150px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <div id="flexContainerItemCardMessage">
                    <p id="dateMessage">08/10/23</p>
                    <h5 id="categorieMessage">Conseil</h5>
                  </div>
                  <p id="titreMessage">Tu ne travailles pas assez</p>
                </ItemCard>
              </Link>
            </div>
          </DashboardCard>
        </div>
      </div>
    </>
  );
};
export default Logbook;
