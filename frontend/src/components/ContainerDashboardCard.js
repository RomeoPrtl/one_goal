import DashboardCard from "./DashboardCard";
import ItemCard from "./ItemCard";
import BtnNew from "./BtnNew";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";

import "../styles/containerdashboardcard.css";

const ContainerDashboardCard = () => {
  const percentage = 60;
  return (
    <>
      <div id="containerDashboardCard">
        <DashboardCard style={{ gridColumn: "1 / 4", gridRow: "1 / 4" }}>
          <h2>Dernier objectif</h2>
          <div className="flexContainer">
            <div id="containerCardRight">
              <h2>Apprendre l'anglais</h2>
              <ul id="ulDashboardCard">
                <li className="liDashboardCard">
                  Dernière tâche : Apprendre le preterit present
                </li>
                <li className="liDashboardCard">
                  Prochaine tâche : Revoir les verbes irréguliers
                </li>
                <li className="liDashboardCard">Status : En cours</li>
                <li className="liDashboardCard">Tâches : 10/23</li>
                <li className="liDashboardCard">Difficulté : Intermédiaire</li>
              </ul>
            </div>
            <div
              className="ContainerCircularProgressBar"
              style={{ width: 150, height: 150 }}
            >
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={18}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "15px",
                  pathTransitionDuration: 0.5,
                  textColor: "#0d5ed7",
                  trailColor: "#F7F7F7",
                  pathColor: "#0d5ed7",
                })}
              />
            </div>
          </div>
        </DashboardCard>
        <DashboardCard style={{ gridColumn: "4 / 7", gridRow: "1 / 4" }}>
          <h2>Progression</h2>
          <ul id="ulDashboardCard">
            <li className="liDashboardCard">Niveau actuel : Entrepreneur</li>
            <li className="liDashboardCard">Score : 1809</li>
            <li className="liDashboardCard">Objectif réalisé : 18</li>
            <li className="liDashboardCard">Tâches réalisés : 125</li>
          </ul>
        </DashboardCard>
        <DashboardCard style={{ gridColumn: "1 / 7", gridRow: "4 / 7" }}>
          <h2>Vos derniers objectifs</h2>
          <div id="flexContainerItemCard">
            <Link className="lienClasse" to={"/goals"}>
              <ItemCard
                style={{
                  width: "150px",
                  height: "150px",
                  padding: "10px",
                  marginLeft: "20px",
                  textAlign: "center",
                }}
              >
                <h4>Apprendre l'anglais</h4>
                <div
                  className="ContainerCircularProgressBar"
                  style={{ width: 75, height: 75 }}
                >
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={18}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      textColor: "#0d5ed7",
                      trailColor: "#F7F7F7",
                      pathColor: "#0d5ed7",
                    })}
                  />
                </div>
              </ItemCard>
            </Link>
            <Link className="lienClasse" to={"/goals"}>
              <ItemCard
                style={{
                  width: "150px",
                  height: "150px",
                  padding: "10px",
                  marginLeft: "20px",
                  textAlign: "center",
                }}
              >
                <h4>Développer One Goal</h4>
                <div
                  className="ContainerCircularProgressBar"
                  style={{ width: 75, height: 75 }}
                >
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={18}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      textColor: "#0d5ed7",
                      trailColor: "#F7F7F7",
                      pathColor: "#0d5ed7",
                    })}
                  />
                </div>
              </ItemCard>
            </Link>
            <Link className="lienClasse" to={"/goals"}>
              <ItemCard
                style={{
                  width: "150px",
                  height: "150px",
                  padding: "10px",
                  marginLeft: "20px",
                  textAlign: "center",
                }}
              >
                <h4>Apprendre le piano</h4>
                <div
                  className="ContainerCircularProgressBar"
                  style={{ width: 75, height: 75 }}
                >
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={18}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      textColor: "#0d5ed7",
                      trailColor: "#F7F7F7",
                      pathColor: "#0d5ed7",
                    })}
                  />
                </div>
              </ItemCard>
            </Link>
            <Link className="lienClasse" to={"/newgoals"}>
              <BtnNew
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "30px",
                  fontSize: "16px",
                }}
              />
            </Link>
          </div>
        </DashboardCard>
        <DashboardCard style={{ gridColumn: "1 / 7", gridRow: "7 / 10" }}>
          <h2>Journal de bord</h2>
          <div id="flexContainerItemMessage">
            <Link className="lienClasse" to={"/message"}>
              <ItemCard
                style={{
                  width: "150px",
                  height: "150px",
                  padding: "10px",
                  marginLeft: "20px",
                  textAlign: "center",
                }}
              >
                <div id="flexContainerItemCardMessage">
                  <p id="dateMessage">08/10/23</p>
                  <h5 id="categorieMessage">Conseil</h5>
                </div>
                <p id="titreMessage">Apprendre l'anglais</p>
              </ItemCard>
            </Link>
            <Link className="lienClasse" to={"/message"}>
              <ItemCard
                style={{
                  width: "150px",
                  height: "150px",
                  padding: "10px",
                  marginLeft: "20px",
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
            <Link className="lienClasse" to={"/newmessage"}>
              <BtnNew
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "30px",
                  fontSize: "16px",
                }}
              />
            </Link>
          </div>
        </DashboardCard>
      </div>
    </>
  );
};
export default ContainerDashboardCard;
