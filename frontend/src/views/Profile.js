import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import DashboardCard from "../components/DashboardCard";
import Btn from "../components/Btn";
import Formulaire from "../components/Formulaire";
import Input from "../components/Input";
import "../styles/profile.css";

import iconNewPhoto from "../assets/iconNewPhoto.png";

const Profile = () => {
  return (
    <>
      <div className="gridContainer">
        <Menu />
        <Navbar titlePage="PROFILE" />
        <div id="containerDashboardCard">
          <DashboardCard
            style={{
              gridColumn: "1 / 3",
              gridRow: "1 / 6",
              textAlign: "center",
            }}
          >
            <div id="firstElipse">
              <div id="secondElipse">
                <img id="iconNewPhoto" src={iconNewPhoto} />
              </div>
            </div>
            <p>Format acceptés : jpeg, png, pdf</p>
            <p>Taille maximale : 6 mo</p>
          </DashboardCard>
          <DashboardCard style={{ gridColumn: "3 / 5", gridRow: "1 / 6" }}>
            <Formulaire title="Vos informations :">
              <Input
                title="Adresse mail :"
                typeInput="email"
                styleLabel={{ position: "relative", left: "33px" }}
                styleInput={{ width: "327px", margin: "15px auto" }}
              />
              <Input
                title="Nom :"
                typeInput="text"
                styleLabel={{ position: "relative", left: "33px" }}
                styleInput={{ width: "327px", margin: "15px auto" }}
              />
              <Input
                title="Prénom :"
                typeInput="text"
                styleLabel={{ position: "relative", left: "33px" }}
                styleInput={{ width: "327px", margin: "15px auto" }}
              />
              <Input
                title="Téléphone :"
                typeInput="text"
                styleLabel={{ position: "relative", left: "33px" }}
                styleInput={{ width: "327px", margin: "15px auto" }}
              />
              <Btn
                title="Modifier"
                style={{
                  backgroundColor: "white",
                  color: "#0d5ed7",
                  width: "330px",
                  margin: "10px 32px",
                }}
              />
            </Formulaire>
          </DashboardCard>
          <DashboardCard style={{ gridColumn: "5 / 7", gridRow: "1 / 6" }}>
            <Formulaire title="Mot de passe :">
              <Input
                title="Ancien mot de passe :"
                typeInput="password"
                styleLabel={{ position: "relative", left: "33px" }}
                styleInput={{ width: "327px", margin: "15px auto" }}
              />
              <Input
                title="Nouveau mot de passe : "
                typeInput="password"
                styleLabel={{ position: "relative", left: "33px" }}
                styleInput={{ width: "327px", margin: "15px auto" }}
              />
              <Input
                title="Confirmer le nouveau mot de passe : "
                typeInput="password"
                styleLabel={{ position: "relative", left: "33px" }}
                styleInput={{ width: "327px", margin: "15px auto" }}
              />
              <Btn
                title="Modifier"
                style={{
                  backgroundColor: "white",
                  color: "#0d5ed7",
                  width: "330px",
                  margin: "10px 32px",
                }}
              />
            </Formulaire>
          </DashboardCard>
          <Btn
            title="Supprimer le compte"
            style={{ backgroundColor: "red", color: "white", width: "200px" }}
          />
        </div>
      </div>
    </>
  );
};
export default Profile;
