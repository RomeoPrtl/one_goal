import "../styles/sousmenu.css";
const SousMenu = ({ nameSousMenu, icon }) => {
  return (
    <>
      <div id="flexContainerSousMenu">
        <img id="icon" src={icon} />
        <p>{nameSousMenu}</p>
      </div>
    </>
  );
};
export default SousMenu;
