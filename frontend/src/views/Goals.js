import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import DashboardCard from "../components/DashboardCard";
import Btn from "../components/Btn";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../styles/goals.css";

const Goals = () => {
  const percentage = 60;
  // Initialisation d'un objet pour gérer l'état ouvert/fermé de chaque sous-objectif
  const [ouvert, setOuvert] = useState({});

  // Fonction pour basculer l'état ouvert/fermé pour un sous-objectif spécifique
  const toggleOuvert = (index) => {
    setOuvert((prevOuvert) => ({
      ...prevOuvert,
      [index]: !prevOuvert[index],
    }));
  };

  return (
    <>
      <div className="gridContainer">
        <Navbar titlePage="APPRENDRE L'ANGLAIS" />
        <Menu />
        <div id="containerDashboardCard">
          <Btn
            id="newGoalsBtn"
            title="Objectif atteint ✅"
            style={{
              backgroundColor: "#0d5ed7",
              color: "white",
              width: "200px",
              margin: "10px 0px",
            }}
          />
          <DashboardCard
            style={{
              backgroundColor: "white",
              gridColumn: "1 / 7",
              gridRow: "2 / 7",
              textAlign: "center",
            }}
          >
            <h2 id="titleGoals">Apprendre l'anglais</h2>
            <div>
              <ul id="containerSousObjectif">
                {[...Array(7).keys()].map((index) => (
                  <li key={index} className="sousObjectif">
                    <button
                      className="btnSousObjectif"
                      onClick={() => toggleOuvert(index)}
                    >
                      <div id="sphere"></div>Apprendre les verbes irréguliers{" "}
                      <span>{ouvert[index] ? "▲" : "▼"}</span>
                    </button>
                    {ouvert[index] && (
                      <ul id="containerSousSousObjectif">
                        <li className="soussousObjectif">
                          Apprendre le verbe Make
                        </li>
                        <li className="soussousObjectif">
                          Apprendre le verbe Do
                        </li>
                        <li className="soussousObjectif">
                          Revoir les différents verbes du troisième groupe
                        </li>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </DashboardCard>
          <DashboardCard
            style={{
              backgroundColor: "white",
              gridColumn: "1 / 7",
              gridRow: "7 / 10",
              textAlign: "center",
            }}
          >
            <div id="containerGoals">
              <div id="containerLeftGoals">
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
                <ul id="containerResumeGoals">
                  <li className="liResumeGoals">
                    Prochaine étape : Apprendre les verbes irréguliers
                  </li>
                  <li className="liResumeGoals">Tâches restantes : 10/24</li>
                </ul>
              </div>
              <div id="containerRightGoals">
                <ul id="ulDescGoals">
                  <div id="containerLeftDescGoals">
                    <li className="liDescGoals">Titre : Apprendre l'anglais</li>
                    <li className="liDescGoals">Date de départ : 08/10/23</li>
                    <li className="liDescGoals">Date de fin : 08/12/23</li>
                    <li className="liDescGoals">Difficulté : Intermédiaire</li>
                    <li className="liDescGoals">Priorité : Important</li>
                  </div>
                  <div id="containerRightDescGoals">
                    <li className="liDescGoals">
                      Description : Apprendre l'anglais pour avancer au mieux
                      dans ma carrière.
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </DashboardCard>
        </div>
        <div id="btnFlexContainerGoals">
          <Btn
            title="Modifier l'objectif"
            style={{
              backgroundColor: "#0d5ed7",
              color: "white",
              width: "200px",
              margin: "10px 0px",
            }}
          />
          <Btn
            title="Supprimer l'objectif"
            style={{
              backgroundColor: "red",
              color: "white",
              width: "200px",
              margin: "10px 0px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Goals;
