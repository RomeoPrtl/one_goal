import "../styles/input.css";
const Input = ({ title, typeInput, styleLabel, styleInput }) => {
  return (
    <>
      <label style={styleLabel}>{title}</label>
      <input type={typeInput} style={styleInput}></input>
    </>
  );
};
export default Input;
