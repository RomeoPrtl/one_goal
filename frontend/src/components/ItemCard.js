import "../styles/itemcard.css";
const ItemCard = ({ style, children }) => {
  return (
    <>
      <div id="itemCard" style={style}>
        {children}
      </div>
    </>
  );
};

export default ItemCard;
