import "../styles/formulaire.css";
const Formulaire = ({ title, children, style }) => {
  return (
    <>
      <h2 id="titleForm" style={style}>
        {title}
      </h2>
      <form>{children}</form>
    </>
  );
};
export default Formulaire;
