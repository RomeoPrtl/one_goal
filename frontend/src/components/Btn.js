import "../styles/btn.css";
const Btn = ({ title, style }) => {
  return (
    <>
      <button style={style}>{title}</button>
    </>
  );
};
export default Btn;
