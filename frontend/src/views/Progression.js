import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import ProgressBar from "@ramonak/react-progress-bar";
import ContainerDashboardCard from "../components/ContainerDashboardCard";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "../styles/progression.css";

const Progression = () => {
  const data = [
    {
      name: "2020",

      goals: 6,
      amt: 2400,
    },
    {
      name: "2021",

      goals: 9,
      amt: 2210,
    },
    {
      name: "2022",

      goals: 10,
      amt: 2290,
    },
    {
      name: "2023",

      goals: 3,
      amt: 2000,
    },
    {
      name: "2024",

      amt: 2181,
    },
    {
      name: "2025",

      amt: 2500,
    },
    {
      name: "2026",

      amt: 2100,
    },
  ];

  const dataSubGoals = [
    {
      name: "Janvier",

      goals: 16,
      amt: 2400,
    },
    {
      name: "Février",

      goals: 5,
      amt: 2210,
    },
    {
      name: "Mars",

      goals: 23,
      amt: 2290,
    },
    {
      name: "Avril",

      goals: 3,
      amt: 2000,
    },
    {
      name: "Mai",
      goals: 2,
      amt: 2181,
    },
    {
      name: "Juin",
      goals: 24,
      amt: 2500,
    },
    {
      name: "Juillet",

      amt: 2100,
    },
    {
      name: "Août",

      amt: 2100,
    },
    {
      name: "Septembre",

      amt: 2100,
    },
    {
      name: "Octobre",

      amt: 2100,
    },
    {
      name: "Novembre",

      amt: 2100,
    },
    {
      name: "Décembre",

      amt: 2100,
    },
  ];

  return (
    <>
      <div className="gridContainer">
        <Menu />
        <Navbar id="fixHeight" titlePage="PROGRESSION" />
        <div id="containerDashboardCardProgression">
          <DashboardCard style={{ gridColumn: "1 / 4", gridRow: "1 / 4" }}>
            <h2>Progression</h2>
            <ul id="ulDashboardCard">
              <li className="liDashboardCard">Niveau actuel : Entrepreneur</li>
              <li className="liDashboardCard">Score : 1809</li>
              <li className="liDashboardCard">Objectif réalisé : 18</li>
              <li className="liDashboardCard">Tâches réalisés : 125</li>
            </ul>
          </DashboardCard>
          <DashboardCard style={{ gridColumn: "4 / 7", gridRow: "1 / 4" }}>
            <h2>Status</h2>
            <div id="containerProgressBar">
              <div id="containerLevelProgressBar">
                <p>Entrepreneur</p>
                <p>PDG</p>
              </div>
              <ProgressBar
                completed={80}
                maxCompleted={100}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
              />
              <p>Plus que 5 objectifs à réaliser</p>
            </div>
          </DashboardCard>
          <DashboardCard
            style={{
              gridColumn: "1 / 7",
              gridRow: "4 / 9",
              backgroundColor: "white",
            }}
          >
            <h2 id="titreChart">Objectif réalisés</h2>
            <ResponsiveContainer id="rou" width="70%" height="100%">
              <BarChart
                width={80}
                height={100}
                data={data}
                margin={{
                  top: 5,
                  right: 60,
                  left: 60,
                  bottom: 100,
                }}
              >
                <CartesianGrid strokeDasharray="1 8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="goals"
                  fill="#0d5ed7"
                  activeBar={<Rectangle fill="#0b2d61" stroke="white" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </DashboardCard>
          <DashboardCard
            style={{
              gridColumn: "1 / 7",
              gridRow: "9 / 14",
              backgroundColor: "white",
            }}
          >
            <h2 id="titreChart">Sous-objectifs réalisés</h2>
            <ResponsiveContainer id="rou" width="70%" height="100%">
              <BarChart
                width={80}
                height={100}
                data={dataSubGoals}
                margin={{
                  top: 5,
                  right: 60,
                  left: 60,
                  bottom: 100,
                }}
              >
                <CartesianGrid strokeDasharray="1 8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="goals"
                  fill="#0d5ed7"
                  activeBar={<Rectangle fill="#0b2d61" stroke="white" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </DashboardCard>
        </div>
      </div>
    </>
  );
};
export default Progression;
