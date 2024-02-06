import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import DashboardCard from "../components/DashboardCard";
import Btn from "../components/Btn";
import "../styles/mygoals.css";
import ItemCard from "../components/ItemCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
const MyGoals = () => {
  const percentage = 50;
  return (
    <>
      <div className="gridContainer">
        <Navbar titlePage="MES OBJECTIFS" />
        <Menu />
        <div id="containerDashboardCard">
          <Btn
            id="newGoalsBtn"
            title="Nouvel objectif"
            style={{
              backgroundColor: "#0d5ed7",
              color: "white",
              width: "200px",
              margin: "10px 0px",
            }}
          />
          <DashboardCard
            style={{
              gridColumn: "1 / 7",
              gridRow: "2 / 7",
              textAlign: "center",
            }}
          >
            <div id="flexContainerItemCardMyGoals">
              <Link className="lienClasse" to={"/goals"}>
                <ItemCard
                  style={{
                    width: "150px",
                    height: "150px",
                    padding: "10px",
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
            </div>
          </DashboardCard>
        </div>
      </div>
    </>
  );
};
export default MyGoals;
